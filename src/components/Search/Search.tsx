import { MdSearch } from "react-icons/md"
import { GithubContext } from "../../context"
import { useState,useContext } from "react"

export const Search = () => {
    const [user, setUser] = useState('')
    const { request,error,searchGithubUser,isLoading } = useContext(GithubContext)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        if (user) {
            searchGithubUser(user)
        }
    }
    return (
        <section>
            <div className="relative flex justify-center">
                {error.show && (<div className="absolute capitalize w-[90vw] top-0 left-0 -translate-y-full">
                    <p className="text-[red] tracking-wider">{error.msg}</p>
                </div>)
                }
                <form action="" onSubmit={handleSubmit}>
                    <div className="bg-gray-100 rounded-[5px] p-[0.5rem] space-x-[0.5rem] flex justify-center">
                        <MdSearch />
                        <input 
                        type="text" 
                        placeholder="enter github user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        />
                        {request > 0 && !isLoading && (
                            <button type="submit">search</button>
                        )}
                    </div>
                </form>
                <h3>request : {request} / 60</h3>
            </div>
        </section>
    )
}