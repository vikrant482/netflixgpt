import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import SignUp from "./SignUp";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

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