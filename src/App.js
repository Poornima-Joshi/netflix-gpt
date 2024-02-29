import { Provider } from "react-redux";
import "./App.scss";
import Body from "./components/container/Body";
import Main from "./components/container/Main";
import Login from "./components/layout/Login";
import Browse from "./components/container/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";


function App() {
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
          element: <Browse />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      
        <RouterProvider router={appRouter} />
      
    </Provider>
  );
}

export default App;
