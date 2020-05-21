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


    render() {
        return <div>
            <Card bordered={false} style={{ margin: '10px 20px' }}>
                <Row align='middle' style={{marginBottom:10}}>
                    <Col style={{ marginRight: 20 }}>
                        公告列表
                    </Col>
                    <Col span={4}>
                        <Button type="primary">新建</Button>
                    </Col>
                </Row>


                <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />
            </Card>
        </div>
    }
}
