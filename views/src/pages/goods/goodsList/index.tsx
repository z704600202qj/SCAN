import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, Radio } from 'antd';
import {Link} from 'umi'
import './index.less'
import Tables from '@/components/Tables'

import { serverList } from '@/services/serviceMg'

interface StateType {
    list:any[]
}
interface PropsType { }

const columns = [
    {
        title: '服務編號',
        dataIndex: 'sid',
        key: 'sid',
    },
    {
        title: '服務名稱',
        dataIndex: 'server_name',
        key: 'server_name',
    },
    {
        title: '服務類型',
        render(e: any) {
            return e.server_type.type_name
        }
    },
    {
        title: '操作',
        render:(item: { sid: any;fids:string })=>{
            return <Link to={`/goodsListDetail?id=${item.sid}&fids=${item.fids}`}>详情</Link>
        }
    },
]
const formItemLayout = {
    wrapperCol: { span: 24 },
}

export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
this.state={
    list:[]
}
    }
    componentDidMount() {
        this.serverList()
    }

    serverList=async()=>{
      let {data}=  await serverList()
      console.log(data)
      this.setState({
        list:data.list
      })
    }
    render() {
        const {list}=this.state
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
                <Tables columns={columns} data={list} rowKey='sid' list={{ totalNum: 0, totalPage: 0 }} />
            </Card>
        </div>
    }
}
