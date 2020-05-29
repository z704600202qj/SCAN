import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { history, Link } from 'umi'
import { brandShopList } from '@/services/store'

import Tables from '@/components/Tables'
const { RangePicker } = DatePicker;
const { Option } = Select;

interface StateType {
    page: number,
    list: any[]
}
interface PropsType { }

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
        render:(item: { bsid: any; })=>{
            return <Link to={`/storesDetails?id=${item.bsid}`}>详情</Link>
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
        const { query }: any = history.location
        const { page } = this.state
        let { data } = await brandShopList({
            bid: query.id,
            page: page
        })
        console.log(data)
        this.setState({
            list: data.list
        })
    }
    goto = () => {
        const { query }: any = history.location
        history.push({
            pathname: '/merchantsCreateDoor',
            query: {
                bid: query.id,
            }
        })
    }

    render() {
        const { list } = this.state
        return <Card bordered={false}>
            <Form layout='inline' style={{ marginBottom: 20 }}>
                <Row>
                    <Col style={{ marginRight: 20 }}>
                        <Button type="primary" icon={<PlusOutlined />} onClick={() => this.goto()}> 添加門店 </Button>
                    </Col>
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
                            <Button style={{ marginLeft: 15 }}>重置</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Tables columns={columns} data={list} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />
        </Card>
    }
}
