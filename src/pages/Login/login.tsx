import { useAuth0 } from '@auth0/auth0-react';
import { loginImg } from '../../assets';

export default function Login() {
    const { loginWithRedirect } = useAuth0()
    return (
        <div className="h-[100vh] grid justify-center">
            <div className="container w-[90vw] text-center">
                <div className="flex justify-center">
                    <img className="mb-[2rem] w-1/2 mt-24" src={loginImg} alt="github user" />
                </div>
                <h1 className="mb-[1.5rem] capitalize font-bold text-[#102a42] text-6xl">github user</h1>
                <button className="uppercase bg-sky-500 hover:bg-sky-400 p-2 px-8 rounded-md text-white text-sm" onClick={loginWithRedirect}>
                    Log In / Sign Up
                </button>
            </div>
        </div>
    )
}