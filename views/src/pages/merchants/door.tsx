import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Tables from '@/components/Tables'
const { RangePicker } = DatePicker;
const { Option } = Select;

interface StateType {
}
interface PropsType { }

const columns = [
    {
        title: '門店編號',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '門店名稱',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '所屬地區',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '地址',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '創建日期',
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

export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {
        return <Card bordered={false}>
            <Form layout='inline' style={{ marginBottom: 20 }}>
                <Row>
                    <Col style={{ marginRight: 20 }}>
                        <Button type="primary" icon={<PlusOutlined />}> 添加門店 </Button>
                    </Col>
                    <Col >
                        <Form.Item >
                            <Input placeholder="門店編號/門店名稱" />
                        </Form.Item>
                    </Col>
                    <Col >
                        <Form.Item >
                            <RangePicker placeholder={['起始时间', '截止时间']} />

                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item >
                            <Select defaultValue="lucy" placeholder='全部状态'>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col>
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
