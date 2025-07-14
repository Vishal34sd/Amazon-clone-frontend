import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Body from './components/Body.jsx'


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children:[
       {
        path: "/",
        element: <Body/>
      },
      {
        path: "/login",
        element: <Login/>
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router ={appRouter}/>
)
