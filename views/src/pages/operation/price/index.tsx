import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './index.less'
import Tables from '@/components/Tables'
interface StateType {
    select: string
}
interface PropsType { }
const { RangePicker } = DatePicker;

const columns = [
    {
        title: '規則編號',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '規則名稱',
        dataIndex: 'orderNO',
        key: 'orderNO',
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
                <Col style={{ marginRight: 20 }}>
                        <Button type="primary" icon={<PlusOutlined />}> 新建價格規則 </Button>
                    </Col>
                    <Col span={4}>
                        <Form.Item >
                            <Input placeholder="編號或名稱" />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item >
                            <Input placeholder="當前狀態" />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item >
                            <RangePicker placeholder={['起始时间', '截止时间']} />

                        </Form.Item>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Button type="primary">搜索</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Card  bordered={false}  style={{margin:'10px 20px'}}>
                <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />
            </Card>
        </div>
    }
}
