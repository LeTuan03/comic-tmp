import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./App.css";
// import Home from "./view/pages/Home/Home";
// import Story from "./view/pages/Story/Story";
import Landing from "./view/pages/Landing/Landing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,

      children: [
        // {
        //   path: "/story",
        //   element: <Story />,
        // },
        {
          path: "/landing",
          element: <Landing />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
