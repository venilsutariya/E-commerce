import { Navigate } from "react-router-dom";
import LoginPageComp from "../Components/LoginFolder/LoginPageComp";
import SignupPageComp from "../Components/SignupPageFolder/SignupPageComp";
import Dashboard from "../Components/dashboard/Dashboard";
import CompleteOrderComp from "../Components/order/CompleteOrderComp";
import RealCompletedOrder from "../Components/order/RealCompletedOrder";
import ProductComp from "../Components/product/ProductComp";
import ProductCartComp from "../Components/productcart/ProductCartComp";
import ProfileComp from "../Components/profile/ProfileComp";

export const routeList = [
    {
        path : '/dashboard',
        element : <Dashboard/>,
        isPrivate : true,
    },
    {
        path : '/products',
        element : <ProductComp/>,
        isPrivate : true,
    },
    {
        path : '/profile',
        element : <ProfileComp/>,
        isPrivate : true,
    },
    {
        path : '/productcart',
        element : <ProductCartComp/>,
        isPrivate : true,
    },
    {
        path : '/order',
        element : <CompleteOrderComp/>,
        isPrivate : true,
    },
    {
        path : '/completedorder',
        element : <RealCompletedOrder/>,
        isPrivate : true,
    },
    {
        path : '*',
        element : <Navigate to='/dashboard'/>,
        isPrivate : true,
    },
    {
        path : '/login',
        element : <LoginPageComp/>,
        isPrivate : false,
    },
    {
        path : '/signup',
        element : <SignupPageComp/>,
        isPrivate : false,
    },
    {
        path : '*',
        element : <Navigate to='/login'/>,
        isPrivate : false,
    },
]