import { Provider } from "react-redux";
import "./App.scss";
import Body from "./components/container/Body";
import Main from "./components/container/Main";
import Login from "./components/layout/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";
import BrowseMain from "./components/container/BrowseMain";
import Browse from "./components/container/Browse";
import GptSearch from "./components/container/GptSearch";



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/browse",
        element: (
         
            <Browse />
         
        ),
        children:[
          {
            path:"/browse",
            element:<BrowseMain/>
          },
          {
            path:"search",
            element:(<GptSearch/>)
          }
        ]
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
