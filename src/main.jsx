import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Route/Route';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <div>Elemnt</div>
//   },
//   {
//     path: '/products',
//     element: <div>Products route hitted</div>
//   }
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
