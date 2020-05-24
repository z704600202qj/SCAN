import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {history} from 'umi'
import './index.less'
import Tables from '@/components/Tables'
interface StateType {
    select: string
}
interface PropsType { }
const { RangePicker } = DatePicker;

const columns = [
    {
        title: '标题',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '内容',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '发布时间',
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

    goto = () => {
        history.push('/noticeDetail')
    }
    render() {
        return <div>
            <Form layout='inline' style={{ marginBottom: 20 }} className='search-form'>
                <Row>
                    <Col style={{ marginRight: 20 }}>
                        <Button type="primary" icon={<PlusOutlined />} onClick={() => this.goto()}> 新建公告 </Button>
                    </Col>

                    <Col >
                        <Form.Item >
                            <RangePicker placeholder={['起始时间', '截止时间']} />
                        </Form.Item>
                    </Col>
                    <Col>
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
