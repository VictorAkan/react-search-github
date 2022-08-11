import { useAuth0 } from "@auth0/auth0-react";
import { loadingGif } from "../../assets";

export default function AuthWrapper({ children }:any) {
    const { isLoading,error } = useAuth0()
    if (isLoading) {
        return (
            <div className="h=[100vh] w-96 grid flex justify-center">
                <img src={loadingGif} alt="spinner" />
            </div>
        )
    }
    if (error) {
        return (
            <div className="h=[100vh] w-96 grid flex justify-center">
                <h1>{error.message}</h1>
            </div>
        )
    }
    return <>{ children }</>
}