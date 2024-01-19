
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Profile from "./Profile.jsx"
import NotProfile from "./NotProfile.jsx";


function Router () {
    const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "profile/:name",
        element: <Profile />,
    },
    ]);

    return <RouterProvider router= {router} />
}

export default Router