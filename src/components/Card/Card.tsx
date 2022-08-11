import { GithubContext } from "../../context";
import { MdBusiness,MdLocationOn,MdLink } from "react-icons/md";
import { useContext } from "react";

export const Card = () => {
    const { githubUser } = useContext(GithubContext);
    const {
        avatar_url,
        html_url,
        name,
        company,
        blog,
        bio,
        location,
        twitter_username,
    } = githubUser;

    return (
        <div className="relative">
            <header className="grid mb-[1rem]">
                <img className="rounded-full" src={avatar_url} alt={name} />
                <div>
                    <h4 className="mb-[0.25rem]">{name}</h4>
                    <p className="mb-0">@{twitter_username || 'john doe'}</p>
                </div>
                <a href={html_url}>follow</a>
            </header>
            <p className="bio">{bio}</p>
            <div className="links">
                <p>
                    <MdBusiness></MdBusiness> {company}
                </p>
                <p>
                    <MdLocationOn></MdLocationOn> {location || 'earth'}
                </p>
                <a href={`https://${blog}`}>
                    <MdLink></MdLink>
                    {blog}
                </a>
            </div>
        </div>
    )
}
