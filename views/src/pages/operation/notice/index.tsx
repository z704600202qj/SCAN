import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { history } from 'umi'
import { noticeList, noticeDel } from '@/services/notice'

import './index.less'
import Tables from '@/components/Tables'
interface StateType {
    list: any[],
    page: number,
    pageSize: number,
    count: number,
}
interface PropsType { }
const { RangePicker } = DatePicker;

const arr = [
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
    },
    {
        title: '发布时间',
        dataIndex: 'create_time',
        key: 'create_time',
    },

]


export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            list: [],
            page: 1,
            pageSize: 1,
            count: 0,
        }
    }
    componentDidMount() {
        this.noticeList()
    }
    noticeList = async () => {
        let { data } = await noticeList({ page: this.state.page })
        this.setState({
            list: data.list || [],
            pageSize: data.pageSize,
            count: data.count,
        })
    }
    creates = () => {
        history.push('/noticeDetail')
    }
    pageChange = (e: number) => {
        this.setState({
            page: e
        }, () => {
            this.noticeList()
        })
    }
    goto(e: any) {
        history.push({
            pathname: '/noticeDetail',
            query: {
                nid: e.nid
            }
        })
    }
    del = async (e: any) => {
        await noticeDel({ nid: e.nid })
        await this.noticeList()
    }
    render() {
        const columns = [...arr, {
            title: '操作',
            key: 'cid',
            width: '150px',
            render: (text: any) => (
                <div>
                    <a onClick={() => this.goto(text)}>修改</a>
                    <a style={{ marginLeft: 10 }} onClick={() => this.del(text)}>刪除</a>
                </div>
            )

        },]
        const { list, pageSize, count } = this.state
        return <div>
            <Form layout='inline' style={{ marginBottom: 20 }} className='search-form'>
                <Row>
                    <Col style={{ marginRight: 20 }}>
                        <Button type="primary" icon={<PlusOutlined />} onClick={() => this.creates()}> 新建公告 </Button>
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
                <Tables columns={columns} data={list} pageChange={this.pageChange} rowKey='nid' list={{ totalNum: count, totalPage: pageSize }} />
            </Card>
        </div>
    }
}
