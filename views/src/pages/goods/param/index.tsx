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
        title: '参数編號',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '参数名称',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '属性值',
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
                        <Button type="primary" icon={<PlusOutlined />}> 添加参数 </Button>
                    </Col>
                    <Col span={4}>
                        <Form.Item >
                            <Input placeholder="参数名称" />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item >
                            <Input placeholder="属性值" />
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
