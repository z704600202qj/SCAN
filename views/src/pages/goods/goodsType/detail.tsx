import React, { Component } from 'react';
import { PageHeader, Descriptions, Card } from 'antd';
import { message, Input, Button, Radio } from 'antd';
import Titles from '@/components/Title'
import Tables from '@/components/Tables'

import './index.less'
interface StateType {
    select: string
}
interface PropsType { }

const columns = [
    {
        title: '參數名稱',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '參數值',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '備註',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '操作',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
]
export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {

        return <div className='merchantsetails'>
            <div style={{ background: "#fff" }}>
                <PageHeader
                    className="site-page-header"
                    onBack={() => window.history.back()}
                    title="商品組列表"
                    extra={[

                    ]}
                >
                    <Descriptions size="small" column={3}>
                        <Descriptions.Item label="商品組名稱">商品組名稱</Descriptions.Item>

                        <Descriptions.Item label="備註信息">2017-01-10</Descriptions.Item>
                        <Descriptions.Item >
                            <Button key="3">Operation</Button>
                        </Descriptions.Item>
                    </Descriptions>
                </PageHeader>
            </div>

            <Card style={{ margin: '10px 20px' }} title='商品類型#0001' extra={<a href="#">編輯</a>} bordered={false}>
                <Descriptions >
                    <Descriptions.Item label="分類">自助服務</Descriptions.Item>
                    <Descriptions.Item label="標籤">1810000000</Descriptions.Item>
                    <Descriptions.Item label="類型名稱">自助列印#001-FUJI xerox M28通用</Descriptions.Item>
                    <Descriptions.Item label="備註">empty</Descriptions.Item>

                </Descriptions>
  商品參數:
  <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />

            </Card>
        </div>
    }
}
