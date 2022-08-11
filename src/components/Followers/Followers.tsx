import { GithubContext } from "../../context";
import { useContext } from "react";

export const Followers = () => {
    const { followers } = useContext(GithubContext)

    return (
        <div className="bg-gray-100 relative">
            <div className="scroll grid h-[260px]">
                {followers.map((follower:any, index:number) => {
                    const { avatar_url:img,html_url,login } = follower
                    return (
                        <article className="rounded-md grid gap-[1rem]" key={index}>
                            <img className="rounded-full h-full" src={img} alt={login} />
                            <div>
                                <h4 className="mb-0">{login}</h4>
                                <a href={html_url} className="text-gray-500">{html_url}</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}