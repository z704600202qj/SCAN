import React from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
import routes from '../../config/routes'

const { SubMenu } = Menu;

class Sider extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

    state = {
        SelectKeys: [],
        openKeys: [],
    };
    componentDidMount() {
        this.opens(history.location.pathname)
        history.listen(e => {
            let path = e.pathname
            this.opens(path)
        })
    }
    opens = (path: string) => {
        const route = routes[1].routes
        for (let i in route) {
            let k = Number(i)
            if (route[k].path === path) {
                let i: string = route[k].key
                this.setState({
                    openKeys: [route[k].parent],
                    SelectKeys: [i.indexOf('-') > 0 ? i.split('-')[0] : i],
                });
            }
        }
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
        const route: any[] = routes[1].routes
        let { key } = item
        let arr = route.filter(items => {
            if (key && items.key === key) {
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
                    <Menu.Item key="2">商戶管理</Menu.Item>
                    <Menu.Item key="3">門店管理</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                        <span className='sub-title'>
                            <span>商品設置管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="4">商品列表</Menu.Item>
                    <Menu.Item key="5">商品類型</Menu.Item>
                    <Menu.Item key="6">參數管理</Menu.Item>
                </SubMenu>

                <Menu.Item key="7">優惠券管理</Menu.Item>
                <SubMenu
                    key="sub4"
                    title={
                        <span className='sub-title'>
                            <span>運營管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="8">廣告管理</Menu.Item>
                    <Menu.Item key="9">公告管理</Menu.Item>
                    <Menu.Item key="11">价格管理</Menu.Item>
                </SubMenu>
                <Menu.Item key="12">用戶管理</Menu.Item>
                <Menu.Item key="13">管理員設置</Menu.Item>

            </Menu>
        );
    }
}
export default Sider