import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.less';

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
        return <div>
            <Form layout='inline' style={{ marginBottom: 20 }} className='search-form'>
                <Row>
                    <Col >
                        <Form.Item >
                            <Input placeholder="類型名稱" />
                        </Form.Item>
                    </Col>
                    <Col >
                        <Form.Item >
                            <Input placeholder="標籤" />
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
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" actions={[<div className='btns'>查看</div>]} bordered={false}>
                            Card content
                            
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title"  actions={[<div className='btns'>查看</div>]} bordered={false}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title"  actions={[<div className='btns'>查看</div>]}  bordered={false}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card bordered={false} style={{textAlign:"center"}}>
                           <PlusOutlined/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    }
}
