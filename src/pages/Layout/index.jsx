import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getBillList} from "@/store/modules/billStore.js";
import React from 'react'
import { TabBar } from 'antd-mobile'
import './index.scss'
import {

    AddCircleOutline,
    HandPayCircleOutline,
    ShopbagOutline,
} from 'antd-mobile-icons'

const tabs = [
    {
        key: 'month',
        title: '月度账单',
        icon: <HandPayCircleOutline />,
    },
    {
        key: 'new',
        title: '记账',
        icon: <AddCircleOutline />,
    },
    {
        key: 'year',
        title: '年度账单',
        icon: <ShopbagOutline />,
    },

]



const Layout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBillList());
    }, [dispatch]);

    // 切换菜单跳转路由
    const navigate = useNavigate();
    const switchRoute = (path) => {
        console.log(path);
        navigate(path);

    }
    return (

        <div className="layout">

            <div className="container">
                <Outlet></Outlet>
            </div>


            <div className="footer">
                <TabBar onChange={switchRoute}>
                    {tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>

        </div>
    )
}

export default Layout