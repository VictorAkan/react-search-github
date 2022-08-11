import { useAuth0 } from "@auth0/auth0-react"

export const Navbar = () => {
    const {
        isAuthenticated,
        loginWithRedirect,
        logout,
        user,
        isLoading,
    } = useAuth0()
    const isUser = isAuthenticated && user;

    return (
        <div className="p-[1.5rem] mb-[4rem] bg-gray-100 text-center flex space-x-[1.5rem] justify-center">
            {isUser && user.picture && <img className="rounded-full w-[35px] h-[35px]" src={user.picture} alt={user.name} />}
            {isUser && user.name && (
                <h4 className="mb-0 font-[400]">
                    Welcome, <strong>{user.name.toUpperCase()}</strong>
                </h4>
            )}
            {isUser ? (<button
            onClick={() => {
                logout({ returnTo:window.location.origin })
            }}
            >
                logout
            </button> ) : (
                <button className="capitalize" onClick={loginWithRedirect}>login</button>
            )
            }
        </div>
    )
}