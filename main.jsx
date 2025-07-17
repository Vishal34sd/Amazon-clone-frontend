import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Body from './components/Body.jsx'
import Signup from './components/Signup.jsx'
import SearchedPage from './components/SearchedPage.jsx'
import { FilterProvider } from './utils/filterContext.jsx'


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
      },
       
    ],
  },
  {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/search",
        element: <SearchedPage/>
      }
])

createRoot(document.getElementById('root')).render(
    <FilterProvider>  <RouterProvider router ={appRouter}/> </FilterProvider> 
)
