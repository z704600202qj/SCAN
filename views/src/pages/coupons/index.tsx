import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, Radio } from 'antd';
import './index.less'
import Tables from '@/components/Tables'
interface StateType {
    select: string
}
interface PropsType { }

const columns = [
    {
        title: '優惠券編號',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '兌換碼口令',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '类型',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '數值',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '數量',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '設置時間',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '當前狀態',
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
        return <div>
            <Form layout='inline'  {...formItemLayout} className='search-form'>
                <Row>
                    <Col span={6}>
                        <Radio.Group defaultValue="a">
                            <Radio.Button value="a">優惠券列表</Radio.Button>
                            <Radio.Button value="d">領取記錄</Radio.Button>
                        </Radio.Group>
                    </Col>
                    <Col span={3}>
                        <Button>新建兌換碼</Button>
                    </Col>

                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="編號或名稱" />
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
            <Card bordered={false} style={{ margin: '10px 20px' }}>
                <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />
            </Card>
        </div>
    }
}
