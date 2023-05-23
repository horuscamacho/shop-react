import {useRoutes} from "react-router-dom";
import {Home} from "../Pages/Home/index.jsx";
import {MyOrders} from "../Pages/MyOrders/index.jsx";
import {SignIn} from "../Pages/SignIn/index.jsx";
import {MyOrder} from "../Pages/MyOrder/index.jsx";
import {MyAccount} from "../Pages/MyAccount/index.jsx";
import {NotFound} from "../Pages/NotFound/index.jsx";

const AppRoutes = () => {
    return useRoutes([
        { path: "/", element: <Home/>},
        { path: "/my-orders", element: <MyOrders/>},
        { path: "/sign-in", element: <SignIn/>},
        { path: "/my-order", element: <MyOrder/>},
        { path: "/my-account", element: <MyAccount/>},
        { path: "*", element: <NotFound/>}
    ])
}

export {AppRoutes};