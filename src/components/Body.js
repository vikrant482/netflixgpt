import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import SignUp from "./SignUp";
import { RouterProvider } from "react-router-dom";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/",
            element: <SignUp/>
        },
    ]);

    return (
        <div>
           <RouterProvider router={appRouter}></RouterProvider>
        </div>
    )
};

export default Body;