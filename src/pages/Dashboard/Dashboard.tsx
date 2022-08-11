import { Navbar,Search,Info,User } from "../../components"
import { loadingGif } from "../../assets"
import { GithubContext } from "../../context"
import { useContext } from "react"

export const Dashboard = () => {
    const { isLoading } = useContext(GithubContext)
    if (isLoading) {
        return (
            <main>
                <Navbar />
                <Search />
                <div className="flex justify-center">
                    <img src={loadingGif} alt="loader" />
                </div>
            </main>
        )
    }
    return (
        <div>
            <Navbar></Navbar>
            <Search />
            <Info />
            <User />
        </div>
    )
}