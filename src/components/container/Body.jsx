import Main from "./Main";
import Login from "../layout/Login";
import { createBrowserRouter,RouterProvider } from "react-router-dom";



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Main/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])
const Body = () => {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body
