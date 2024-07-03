import uniqueId from "../hooks/useId"
import Home from "../pages/home/index"
import NotPage from "../pages/notFound/index"
import Properties from "../pages/properties/index"
import SignUp from "../pages/SignUp/index"
import LogIn from "../pages/LogIn/index"


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
        path: "/login",
        element: <LogIn/>,
        private: false,
        hidden: false,
    },

    {
        id: uniqueId,
        title: "SignUp",
        path: "/signup",
        element: <SignUp/>,
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