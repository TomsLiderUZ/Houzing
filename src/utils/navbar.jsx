import uniqueId from "../hooks/useId"
import Home from "../pages/home/index"
import NotPage from "../pages/notFound/index"
import Properties from "../pages/properties/index"
import Register from "../pages/Register/index"
import LogIn from "../pages/LogIn/index"
import UserMe from "../pages/UserMe"
import UserMeEdit from "../pages/UserMeEdit"


export const navbar = [
    {
        id: uniqueId,
        title: "Home",
        path: "/home",
        element: <Home/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "Properties",
        path: "/properties",
        element: <Properties/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "LogIn",
        path: "/user/login",
        element: <LogIn/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "Register",
        path: "/user/register",
        element: <Register/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "Register",
        path: "/user/me",
        element: <UserMe/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "Register",
        path: "/user/me/edit",
        element: <UserMeEdit/>,
        private: false,
        hidden: false,
    },
    {
        id: uniqueId,
        title: "",
        path: "*",
        element: <NotPage/>,
        private: false,
        hidden: false,
    }
]
