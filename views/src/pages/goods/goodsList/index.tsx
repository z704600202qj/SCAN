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
        title: '服務編號',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '服務類型',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '服務名稱',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '創建日期',
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
                    <Col span={7}>
                        <Form.Item >
                            <Input placeholder="服務名稱" />
                        </Form.Item>
                    </Col>
                    <Col span={7}>
                        <Form.Item >
                            <Input placeholder="當前狀態" />
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
