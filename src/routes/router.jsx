

import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../layout/Rootlayout";
import Authlayout from "../layout/Authlayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DasboradLayout from "../layout/DasboradLayout";
import Search from "../pages/Home/Contact/search";
import Blog from "../pages/Blog/Blog";
import MainDashborad from "../pages/Dashborad/MainDashborad/MainDashborad";
import AddProduct from "../pages/Dashborad/AddProduct/AddProduct";
import ManagProduct from "../pages/Dashborad/ManagProduct/ManagProduct";
import User from "../pages/Dashborad/User/User";

import MyRequest from "../pages/Dashborad/MyRequest/MyRequest";
import PaymentSucces from "../pages/PaymentSucces/PaymentSucces";
import PaymentCancel from "../pages/PaymentCancels/PaymentCancel";
import Work from "../pages/Home/Works/work";
import SearchPage from "../pages/SearchPage/SearchPage";
import JoinDoctor from "../pages/JoinDoctor/JoinDoctor";
import MyProfile from "../pages/Dashborad/MyProfile/MyProfile";
import Funding from "../pages/Funding/Funding";
import FundingPage from "../pages/FundingPage/FundingPage";
import DonationRequest from "../pages/Home/DonationRequest/DonationRequest";
import CreatePage from "../pages/Dashborad/CreatePage/CreatePage";
import RequestDetails from "../pages/Dashborad/RequestDetails/RequestDetails";
import DashboradHome from "../pages/Dashborad/DashboradHome/DashboradHome";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: 'work',
        element:<Work></Work>
      },
      
       {
        path: 'payment-success',
        element:<PaymentSucces></PaymentSucces>
      },
      {
        path: 'payment-cancel',
        element:<PaymentCancel></PaymentCancel>
      },
      {
        path: 'funding-page',
        element:<PrivateRoute><FundingPage></FundingPage></PrivateRoute>
      },
      {
        path: "donation-request",
        element:<DonationRequest></DonationRequest>
      },
      {
        path: "search",
        element:<SearchPage></SearchPage>
      },
      {
        path: 'funding',
        element:<Funding></Funding>
      },
      {
        path: "add-request",
        element:<PrivateRoute><RequestDetails></RequestDetails></PrivateRoute>
      },
      {
        path: "requests/:id",
        element:<PrivateRoute><RequestDetails></RequestDetails></PrivateRoute>
      } ,
    {
  path: 'join-us',
  element: (
    <PrivateRoute>
      <JoinDoctor />
    </PrivateRoute>
  )
}
    ],
  },

  // Auth Routes
  {
    path: "/auth",
    element: <Authlayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // Dashboard (Private)
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DasboradLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,   //  Dashboard default page
        element: <MainDashborad />,
      },

      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "my-request",
        element:<MyRequest></MyRequest>
      },
      {
        path: "add-request",
        element: <ManagProduct />,
      },
      {
        path: "users",
        element:<User />
      },
      {
        path: "home",
        element: <DashboradHome />
      },
    
      {
        path: 'profile',
        element:<MyProfile></MyProfile>
      },
     
      {
         path: "donation-request",
         element:<DonationRequest></DonationRequest>

      },
    {
       path: 'all-blood-donation-requests',
       element:<DonationRequest></DonationRequest>
    },
    {
      path: "add-request",
      element:<CreatePage></CreatePage>
    },
  
    ],
  },
]);

export default router;

