// 创建路由实例 绑定path element

import {createBrowserRouter} from "react-router-dom";
import New from "@/pages/New/index.jsx";
import Layout from "@/pages/Layout/index.jsx";
import Month from "@/pages/Month/index.jsx";
import Year from "@/pages/Year/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "month",
                element: <Month />
            },
            {
                path: "year",
                element: <Year />
            }
        ]
    },
    {
        path: "/new",
        element: <New />
    }

]);

export default router;