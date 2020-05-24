import React, { Component } from 'react';
import { Form, Input, Button, Modal, Descriptions, Card } from 'antd';
import Titles from '@/components/Title'
import Tables from '@/components/Tables'

import './index.less'
interface StateType {
    visible: boolean
}
interface PropsType { }
const {TextArea}=Input

const columns = [
    {
        title: '服務名稱',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '操作',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
]
export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
this.state={
    visible:false
}
    }
    componentDidMount() {
    }

    create = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {

        return <div className='merchantsetails'>

            <Card style={{ margin: '10px 20px' }} title='設備詳情#0001' extra={<Button onClick={() => this.create()}>添加服務</Button>} bordered={false}>
                <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />

            </Card>
            <Modal
                title="添加服務"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form
                    className='login-warp'
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label='名稱'
                        name="username"
                        rules={[{ required: true, message: '請輸入名稱' }]}
                    >
                        <Input placeholder='請輸入名稱' />
                    </Form.Item>
                    <Form.Item
                        label='商品參數'
                        name="username"
                    >
                      A4
                    </Form.Item>
                    <Form.Item
                        label='黑白'
                        name="username"
                    >
                       <Input placeholder='請輸入名稱' style={{width:'80%'}} />  元/面
                    </Form.Item>
                    <Form.Item
                        label='彩色'
                        name="username"
                    >
                        <Input placeholder='請輸入名稱' style={{width:'80%'}} />  元/面
                    </Form.Item>
                    <Form.Item
                        label='關聯設備'
                        name="username"
                        rules={[{ required: true, message: '請輸入備註!' }]}
                    >
                        <TextArea placeholder='請輸入備註' />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    }
}
