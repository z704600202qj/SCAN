import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { history, Link } from 'umi'
import { brandShopList } from '@/services/store'

import Tables from '@/components/Tables'
import './index.less'
const { RangePicker } = DatePicker;
const { Option } = Select;

interface StateType {
    page: number,
    list: any[]
}
interface PropsType {
    serverid:string // 关联门店式使用
 }

const columns = [
    {
        title: '門店編號',
        dataIndex: 'bsid',
        key: 'bsid',
    },
    {
        title: '門店名稱',
        dataIndex: 'shop_name',
        key: 'shop_name',
    },
    {
        title: '所屬地區',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '創建日期',
        dataIndex: 'create_time',
        key: 'create_time',
    },
    {
        title: '當前狀態',
        dataIndex: 'sig',
        key: 'sig',
        render(e: any) {
            return e === '1' ? '正常' : (e === '2' ? '下线' : '停用')
        }
    },
    {
        title: '操作',
        render:(item: { bsid: any;bid:string })=>{
            return <Link to={`/storesDetails?bsid=${item.bsid}&bid=${item.bid}`}>详情</Link>
        }
    },
]

export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            page: 1,
            list: []
        }
    }
    componentDidMount() {
        this.brandShopList()
    }
    brandShopList = async () => {
        const { page } = this.state
        let { data } = await brandShopList({
            page: page
        })
        this.setState({
            list: data.list
        })
    }

    render() {
        const {list}=this.state
        return <>
            <Form layout='inline' style={{ marginBottom: 20 }}  className='search-form'>
                <Row>
                    <Col >
                        <Form.Item >
                            <Input placeholder="門店編號/門店名稱" />
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
            <Card bordered={false} style={{margin:'10px 20px'}}>
            <Tables columns={columns} data={list} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />
        </Card>
        </>
    }
}
