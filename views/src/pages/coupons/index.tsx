import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, Radio, Select,DatePicker } from 'antd';
import { couponList, couponEdit, couponDel } from '@/services/coupon'
import { history } from 'umi'
import moment from 'moment'
import './index.less'
import Tables from '@/components/Tables'
interface StateType {
    list: any[]
}
interface PropsType { }
const { Option } = Select;
const { RangePicker } = DatePicker;

let type: any = { '1': '满减', '2': "折扣", '3': '现金券' }
const arr = [
    {
        title: '優惠券編號',
        dataIndex: 'cid',
        key: 'cid',
    },
    {
        title: '兌換碼口令',
        dataIndex: 'redeem',
        key: 'redeem',
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        render(e: string) {
            return type[e]
        }
    },
    {
        title: '數值',
        key: 'cid',
        render(e: { type: string; reduct: any; subtract: any; rebate: any; cash: any; }) {
            if (e.type === '1') {
                return `满${e.reduct}减${e.subtract}`
            }
            if (e.type === '2') {
                return `折扣${e.rebate}%`
            }
            if (e.type === '3') {
                return `现金券${e.cash}`
            }
        }
    },
    {
        title: '數量',
        dataIndex: 'num',
        key: 'num',
    },
    {
        title: '設置時間',
        dataIndex: 'create_time',
        key: 'create_time',
    },
    {
        title: '當前狀態',
        dataIndex: 'state',
        key: 'state',
        render(e: string) {
            return e === '1' ? '启用' : '停用'
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
            list: []
        }
    }
    componentDidMount() {
        this.couponList()
    }
    couponList = async () => {
        let { data } = await couponList()
        this.setState({
            list: data.list || []
        })
    }
    goto(e: any) {
        history.push({
            pathname: '/couponsDetail',
            query: {
                cid: e.cid
            }
        })
    }
    editStatus = async (e: any) => {
        await couponEdit({ state: e.state === '1' ? '2' : '1', cid: e.cid })
        await this.couponList()
    }
    del = async (e: any) => {
        await couponDel({ cid: e.cid })
        await this.couponList()
    }
    render() {
        const columns = [...arr, {
            title: '操作',
            key: 'cid',
            width: '150px',
            render: (text: any) => (
                <div>
                    <a onClick={() => this.goto(text)}>詳情</a>
                    <a style={{ marginLeft: 10 }} onClick={() => this.editStatus(text)}>停用</a>
                    <a style={{ marginLeft: 10 }} onClick={() => this.del(text)}>刪除</a>
                </div>
            )

        },]
        const { list } = this.state
        return <div>
            <Form layout='inline'  {...formItemLayout} className='search-form'>
                <Row>
                    <Col span={6}>
                        <Radio.Group defaultValue="a">
                            <Radio.Button value="a">優惠券列表</Radio.Button>
                            <Radio.Button value="d">領取記錄</Radio.Button>
                        </Radio.Group>
                    </Col>
                    <Col span={3}>
                        <Form.Item >
                            <Input placeholder="編號或名稱" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item >
                        <RangePicker placeholder={['开始时间','结束时间']} format='YYYY-MM-DD' />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item >
                            <Select placeholder="选择状态">
                                <Option value="1">启用</Option>
                                <Option value="2">停用</Option>
                            </Select>
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
                <Tables columns={columns} data={list} rowKey='cid' list={{ totalNum: 0, totalPage: 0 }} />
            </Card>
        </div>
    }
}
