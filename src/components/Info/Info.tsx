import { GithubContext } from "../../context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { useContext } from "react";

export const Info = () => {
    const { githubUser } = useContext(GithubContext)
    const { public_repos, followers, following, public_gists } = githubUser

    const items = [
        {
            id: 1,
            icon: <GoRepo className='icon' />,
            label: 'repos',
            value: public_repos,
            color: 'pink',
        },
        {
            id: 2,
            icon: <FiUsers className='icon' />,
            label: 'followers',
            value: followers,
            color: 'green',
        },
        {
            id: 3,
            icon: <FiUserPlus className='icon' />,
            label: 'following',
            value: following,
            color: 'purple',
        },
        {
            id: 4,
            icon: <GoGist className='icon' />,
            label: 'gists',
            value: public_gists,
            color: 'yellow',
        },
    ]
    return (
        <section>
            <div className="grid">
                {items.map((item) => {
                    return <Item key={item.id} {...item}></Item>
                })}
            </div>
        </section>
    )
}

interface TypeMan {
    icon:any,
    label:string,
    value:string,
    color:any
}

const Item = ({ icon, label, value, color }:TypeMan) => {
    return (
        <article className='item'>
            <span className={color}>{icon}</span>
            <div>
                <h3>{value}</h3>
                <p>{label}</p>
            </div>
        </article>
    );
};