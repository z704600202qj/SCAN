import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, Radio } from 'antd';

import Tables from '@/components/Tables'
interface StateType {
    select: string
}
interface PropsType { }

const columns = [
    {
        title: '服務時間',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '訂單號',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '用户ID',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '商品數量',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '費用',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '設備狀態',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '操作',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
]
const formItemLayout = {
    wrapperCol: { span: 24 },
}

export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {
        return <Card >
            <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />
        </Card>
    }
}
