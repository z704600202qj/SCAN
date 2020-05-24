import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import {history} from 'umi'
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Tables from '@/components/Tables'
import './index.less'
const { RangePicker } = DatePicker;
const { Option } = Select;

interface StateType {
}
interface PropsType { }

const columns = [
    {
        title: '商戶編號',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '商戶名稱',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '擁有門店',
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

goto(){
    history.push('/merchantsDetails')
}
    render() {
        return <div>
            <Form layout='inline' style={{ marginBottom: 20 }} className='search-form'>
                <Row>
                    <Col style={{ marginRight: 20 }}>
                        <Button type="primary" icon={<PlusOutlined />} onClick={()=>this.goto()}> 添加商戶 </Button>
                    </Col>
                    <Col >
                        <Form.Item >
                            <Input placeholder="商戶編號/商戶名稱" />
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
                            <Button type="primary">搜索</Button>
                            <Button style={{marginLeft:15}}>重置</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Card style={{ margin: '10px 20px' }}>
                <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />
            </Card>
        </div>
    }
}
