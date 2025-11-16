import {Outlet} from "react-router-dom";
import {Button} from "antd-mobile";

const Layout = () => {
    return (

        <div>

            <Outlet></Outlet>
            我是layout
            <Button color="primary">测试全局</Button>

        </div>
    )
}

export default Layout