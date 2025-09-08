import { createBrowserRouter } from "react-router-dom";
import Homepage from "./src/components/Homepage.tsx";
import Layout from "./src/components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      }
    ]
  }
]);

export default router;
