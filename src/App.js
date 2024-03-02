import { Provider } from "react-redux";
import "./App.scss";
import Body from "./components/container/Body";
import Main from "./components/container/Main";
import Login from "./components/layout/Login";
//import Browse from "./components/container/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";
import { lazy, Suspense } from "react";

const Browse = lazy(()=>import("./components/container/Browse"));

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
          <Suspense>
            <Browse />
          </Suspense>
        ),
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
