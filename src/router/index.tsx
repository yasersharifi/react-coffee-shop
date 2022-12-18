import { createBrowserRouter, Link } from "react-router-dom"
import App from "../App";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />

    },
    {
        path: 'about',
        element: (
            <>
                <h1>About Us</h1>
                <Link to="/">Home</Link>
            </>
        )
    }
])

export default routes;