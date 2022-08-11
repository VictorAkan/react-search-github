import { Link } from "react-router-dom";

export const Error = () => {
    return (
        <div className="text-center flex justify-center h-[100vh] bg-sky-200">
            <div>
                <h1 className="text-[10rem]">404</h1>
                <h3 className="mb-[1.5rem] text-gray-900">sorry, the page you tried cannot be found</h3>
                <Link to="/" className="capitalize">back home</Link>
            </div>
        </div>
    )
}