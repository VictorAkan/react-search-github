import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const PrivateRoute = ({ children }:any) => {
    const { isAuthenticated,user } = useAuth0()
    const isUser = isAuthenticated && user
    if (!isUser) {
        return <Navigate to="/login" />
    }   
    return children
}