import React,{ useState,useEffect } from 'react'
import mockUser from './mockData.ts/mockUsers'
import mockRepos from './mockData.ts/mockRepos'
import mockFollowers from './mockData.ts/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com';
const GithubContext = React.createContext([] as any);

const GithubProvider = ({ children }:any) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    const [request, setRequest] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] =  useState({ show:false, msg:'' })

    const searchGithubUser = async (user:any) => {
        toggleError()
        setIsLoading(true)
        const res = await axios(`${rootUrl}/users/${user}`).catch((err) => 
            console.log(err)
        )
        if (res) {
            setGithubUser(res.data)
            const { login,followers_url } = res.data
            await Promise.allSettled([
                axios(`${rootUrl}/users/${login}/repos?per_page=100`),
                axios(`${followers_url}?per_page=100`)
            ]).then((results) => {
                const [repos, followers] = results
                const status = 'fulfilled'
                if (repos.status === status) {
                    setRepos(repos.value.data)
                }
                if (followers.status === status) {
                    setFollowers(followers.value.data)
                }
            }).catch((err) => console.log(err)
            )
        } else {
            toggleError(true, "there's no user with that username")
        }
        checkRequests()
        setIsLoading(false)
    }

    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`).then(({ data }) => {
            let { rate:{remaining} } = data
            setRequest(remaining)
            if ( remaining === 0 ) {
                toggleError(true, 'sorry, you have exceeded your hourly rate limit!')
            }
        }).catch((err) => console.log(err)
        )
    }
    function toggleError(show = false, msg = '') {
        setError({ show,msg })
    }
    useEffect(checkRequests, [])
    useEffect(() => {
        searchGithubUser('john-smilga')
    }, [])

    return (
        <GithubContext.Provider
        value={{
            githubUser,
            repos,
            followers,
            request,
            error,
            searchGithubUser,
            isLoading,
        }}
        >
            { children }
        </GithubContext.Provider>
    )
}

export { GithubProvider,GithubContext }