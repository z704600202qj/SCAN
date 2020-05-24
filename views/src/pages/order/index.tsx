import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import './index.less'
import Tables from '@/components/Tables'
interface StateType {
    select: string
}
interface PropsType { }
const { Option } = Select;
const { RangePicker } = DatePicker;

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
        return <div>
            <Form layout='inline'  {...formItemLayout} className='search-form'>
                <Row>
                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="訂單號" />
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="用戶ID" />
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="服務商" />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item >
                            <Input placeholder="金額" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item >
                            <RangePicker placeholder={['起始时间', '截止时间']} />
                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Select defaultValue="lucy" placeholder='全部状态'>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item >
                            <Button type="primary">搜索</Button>
                            <Button style={{ marginLeft: 15 }}>重置</Button>
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
