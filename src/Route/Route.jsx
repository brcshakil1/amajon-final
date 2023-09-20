import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';
import DashboardLayout from '../layout/DashboardLayout.jsx/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Profile/Profile';
import EditProfile from '../pages/EditProfile/EditProfile';

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
            path:'/',
            element: <Home />
        },
        {
            path:'/Products',
            element: <Products />,
            loader: () => fetch('https://dummyjson.com/products'),
        },
        {
            path:'/products/:id',
            element: <Product />,
            loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
        },
        {
            path:'/dashboard',
            element: <DashboardLayout />,
            children: [
                {
                    path:'/dashboard/dashboard',
                    element: <Dashboard />
                },
                {
                    path:'/dashboard/profile',
                    element: <Profile />
                },
                {
                    path:'/dashboard/editprofile',
                    element: <EditProfile />
                }
            ]
        }
      ]
    }
  ])

export default router;