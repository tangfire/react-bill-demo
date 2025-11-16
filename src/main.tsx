
import { createRoot } from 'react-dom/client'
import './index.css'
import sum from '@/test'
import {RouterProvider} from "react-router-dom";
import router from './router'
import './theme.css'
const total = sum(1,3);
console.log(total);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}></RouterProvider>
)
