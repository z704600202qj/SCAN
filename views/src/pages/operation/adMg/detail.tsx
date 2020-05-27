import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Upload, Input, Button, Radio } from 'antd';
import Tables from '@/components/Tables'

import './index.less'
const columns = [
    {
        title: '序號',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '圖片',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '連結狀態',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '連結地址',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '操作',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
]
interface StateType {
    select: string
}
interface PropsType { }


export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {

        return <div className='merchantsetails'>
            <Card title='自助機轮播图管理' style={{ margin: '10px 20px' }} extra={<Button>添加</Button>} bordered={false}>
                <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />
            </Card>
        </div>
    }
}
