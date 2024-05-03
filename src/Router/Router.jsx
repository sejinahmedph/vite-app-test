import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/home',
                element: <h1>Home</h1>,
            },
        ],
    },
]);
export default router;