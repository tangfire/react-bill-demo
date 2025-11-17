import {Outlet} from "react-router-dom";
import {Button} from "antd-mobile";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getBillList} from "@/store/modules/billStore.js";

const Layout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBillList());
    }, [dispatch]);
    return (

        <div>

            <Outlet></Outlet>
            我是layout
            <Button color="primary">测试全局</Button>

        </div>
    )
}

export default Layout