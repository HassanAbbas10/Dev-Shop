import * as React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Product from './Pages/Product/Product'
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import './App.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


const Layout =()=>{
  return(
   <div className="app">
    <Navbar/>
    <Outlet/>
    <Footer/>
   </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, 
    children:[
       {
        path:'/',
        element:<Home/>
       },
       {
        path:'/products/all',
        element:<Products/>
       },
       {
        path:'/product/:id',
        element:<Product/>
       },
       {
        path:'/contact',
        element:<Contact/>
       },
    ]
  },
 
]);

const App = () => {
  return (<div>
     <RouterProvider router={router} />
  </div>
   
  )
}

export default App;