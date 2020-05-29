import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { history,Link } from 'umi'
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { brandList } from '@/services/store'
import Tables from '@/components/Tables'
import './index.less'
const { RangePicker } = DatePicker;
const { Option } = Select;


interface StateType {
    page: number,
    list: any[]
}
interface PropsType { }

const columns = [
    {
        title: '商戶編號',
        dataIndex: 'bid',
        key: 'bid',
    },
    {
        title: '商戶名稱',
        dataIndex: 'brand_name',
        key: 'brand_name',
    },
    {
        title: '擁有門店',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '創建日期',
        dataIndex: 'create_time',
        key: 'create_time',
    },
    {
        title: '當前狀態',
        render(e: any) {
            return e.status === '1' ? '正常' : '冻结'
        }
    },
    {
        title: '操作',
        render:(item: { bid: any; })=>{
            return <Link to={`/merchantsDetails?id=${item.bid}`}>详情</Link>
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
        this.brandList()
    }
    brandList = async () => {
        const { page } = this.state
        let { data } = await brandList({ page: page })
        console.log(data)
        this.setState({
            list: data.list
        })
    }
    goto() {
        history.push('/merchantsCreate')
    }
    render() {
        const { list } = this.state
        return <div>
            <Form layout='inline' style={{ marginBottom: 20 }} className='search-form'>
                <Row>
                    <Col style={{ marginRight: 20 }}>
                        <Button type="primary" icon={<PlusOutlined />} onClick={() => this.goto()}> 添加商戶 </Button>
                    </Col>
                    <Col >
                        <Form.Item >
                            <Input placeholder="商戶編號/商戶名稱" />
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
            <Card style={{ margin: '10px 20px' }}>
                <Tables columns={columns} data={list} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />
            </Card>
        </div>
    }
}
