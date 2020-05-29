import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'umi';
import { Form, Input, Button, Radio } from 'antd';
import './index.less'
import { user } from '@/services/user'

import Tables from '@/components/Tables'
interface StateType {
    page: number
    data:any[]
}
interface PropsType { }

const columns = [
    {
        title: '用户ID',
        dataIndex: 'userid',
        key: 'userid',
    },
    {
        title: '用戶暱稱',
        dataIndex: 'nickname',
        key: 'nickname',
    },
    {
        title: '註冊時間',
        dataIndex: 'create_time',
        key: 'create_time',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '手機號',
        dataIndex: 'mobile',
        key: 'mobile',
    },
    {
        title: '當前狀態',
        dataIndex: 'is_freeze',
        key: 'is_freeze',
        render(e: string) {
            return e === '1' ? '正常' : '冻结'
        }
    },
    {
        title: '操作',
        render:(item: { userid: any; })=>{
            return <Link to={`/userDetail?id=${item.userid}`}>详情</Link>
        }
    },
]
const formItemLayout = {
    wrapperCol: { span: 24 },
}

export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            page: 1,
            data:[]
        }
    }
    componentDidMount() {
        this.list()
    }

    list = async () => {
        const { page } = this.state
        let { data } = await user({ page: page })
        this.setState({
            data:data.list
        })
    }
    render() {
        const {data}=this.state
        return <div>
            <Form layout='inline'  {...formItemLayout} className='search-form'>
                <Row>
                    <Col span={7}>
                        <Form.Item >
                            <Input placeholder="編號或名稱" />
                        </Form.Item>
                    </Col>
                    <Col span={7}>
                        <Form.Item >
                            <Input placeholder="當前狀態" />
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
            <Card bordered={false} style={{ margin: '10px 20px' }}>
                <Tables columns={columns} data={data} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />
            </Card>
        </div>
    }
}
