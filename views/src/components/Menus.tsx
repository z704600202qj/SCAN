import React from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
import routes from '../../config/routes'

const { SubMenu } = Menu;

class Sider extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

    state = {
        SelectKeys: ['1'],
        openKeys: ['sub1'],
    };
    componentDidMount() {
        history.listen(e => {
            const route = routes[0].routes
            let path = e.pathname
            for (let i in route) {
                if (route[i].path === path) {
                    this.setState({
                        // SelectKeys: [i],
                        openKeys: [route[i].parent]
                    });
                }
            }
        })
    }
    onOpenChange = (openKeys: any[]) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    onItemChange = (item: { key: any; }) => {
        const route: any[] = routes[0].routes
        let { key } = item
        let arr = route.filter(items => {
            if (key&&item.key === key) {
                return items
            }
        })
        let data = arr[0]
        history.push(data.path);
        this.setState({
            SelectKeys: [key],
            openKeys: [data.parent]
        });
    }
    render() {
        return (
            <Menu
            theme="dark"

                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                onClick={this.onItemChange}
                selectedKeys={this.state.SelectKeys}
                style={{ width: '100%' }}
            >

                <SubMenu
                    key="sub1"
                    title={
                        <span className='sub-title'>
                            <span>訂單管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="1">訂單列表</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span className='sub-title'>
                            <span>服務組織管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="4">商戶管理</Menu.Item>
                    <Menu.Item key="5">門店管理</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                        <span className='sub-title'>
                            <span>商品設置管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="6">商品列表</Menu.Item>
                    <Menu.Item key="7">商品類型</Menu.Item>
                    <Menu.Item key="8">參數管理</Menu.Item>
                    <Menu.Item key="9">價格策略</Menu.Item>
                </SubMenu>

                <SubMenu
                    key="sub4"
                    title={
                        <span className='sub-title'>
                            <span>商品設置管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="10">商品列表</Menu.Item>
                    <Menu.Item key="11">商品類型</Menu.Item>
                </SubMenu>
                <Menu.Item key="12">優惠券管理</Menu.Item>
                <SubMenu
                    key="sub5"
                    title={
                        <span className='sub-title'>
                            <span>運營管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="13">公告管理</Menu.Item>
                    <Menu.Item key="14">廣告管理</Menu.Item>
                    <Menu.Item key="15">積分規則</Menu.Item>
                </SubMenu>
                <Menu.Item key="16">用戶管理</Menu.Item>
                <Menu.Item key="17">管理員設置</Menu.Item>

            </Menu>
        );
    }
}
export default Sider