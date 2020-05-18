import React from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
const { SubMenu } = Menu;

let route: any = {
    'sub1': {
        path: '/resource',
        parent: 'sub1'
    },
    '5': {
        path: '/baseLine',
        parent: 'sub2'
    },
    '6': {
        path: '/dynamicLine',
        parent: 'sub2'
    },
    '7': {
        path: '/cloudWifi',
        parent: 'sub2'
    },

    '9': {
        path: '/inLine',
        parent: 'sub3'
    },
    '10': {
        path: '/outLine',
        parent: 'sub3'
    },
    '11': {
        path: '/monitor',
        parent: 'sub3'
    },
    '12': {
        path: '/baseInfo',
        parent: 'sub4'
    },
    '13': {
        path: '/wallet',
        parent: 'sub4'
    },
}
class Sider extends React.Component {



    onItemChange = (item: { key: any; }) => {
        let { key } = item
        let data = route[key]
        history.push(data.path);
        this.setState({
            SelectKeys: [key],
            openKeys: [data.parent]
        });
    }
    render() {
        return (
            <Menu
                mode="inline"
                onClick={this.onItemChange}
                style={{ width: '100%' }}
            >
             
                <Menu.Item key="1">订单列表</Menu.Item>
                <Menu.Item key="2">商户列表</Menu.Item>
                <Menu.Item key="3">门店列表</Menu.Item>
                <Menu.Item key="4">门店商品 </Menu.Item>

                <Menu.Item key="5">服务记录</Menu.Item>
                <Menu.Item key="6">商品列表</Menu.Item>
                <Menu.Item key="7">商品类型</Menu.Item>

                <Menu.Item key="8">参数管理</Menu.Item>
                <Menu.Item key="9">xxx</Menu.Item>
                <Menu.Item key="10">运营管理</Menu.Item>
                <Menu.Item key="11">价格管理</Menu.Item>
                <Menu.Item key="12">优惠券管理</Menu.Item>
                <Menu.Item key="13">用户管理</Menu.Item>
                <Menu.Item key="14">管理员设置</Menu.Item>
            </Menu>
        );
    }
}
export default Sider