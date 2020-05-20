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
        title: '訂單號',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '用戶ID',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '服務商戶',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '商品數量',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '應付金額',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '提交時間',
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
            <Form layout='inline'  {...formItemLayout} style={{ marginBottom: 20 }}>
                <Row>
                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Button type="primary">Submit</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />
        </Card>
    }
}
