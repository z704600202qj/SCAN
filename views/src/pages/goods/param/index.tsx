import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { history} from 'umi'
import { Form, Input, Button, Modal, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.less';

const { RangePicker } = DatePicker;
const { Option } = Select;
const {TextArea}=Input
interface StateType {
    visible: boolean
}
interface PropsType { }

const columns = [
    {
        title: '門店編號',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '門店名稱',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '所屬地區',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '地址',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '創建日期',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
    {
        title: '當前狀態',
        dataIndex: 'orderTime',
        key: 'orderTime',
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
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
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
    detail=()=>{
        history.push('/paramDetail')
    }
    render() {
        return <div>

            <div style={{ margin: '10px 20px' }} className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="設備1" actions={[<div className='btns' onClick={()=>this.detail()}>詳情</div>, <div className='btns'>編輯</div>, <div className='btns'>刪除</div>]} bordered={false}>
                        自助打印設備
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="設備1" actions={[<div className='btns'>詳情</div>, <div className='btns'>編輯</div>, <div className='btns'>刪除</div>]} bordered={false}>
                        自助打印設備
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="設備1" actions={[<div className='btns'>詳情</div>, <div className='btns'>編輯</div>, <div className='btns'>刪除</div>]} bordered={false}>
                        自助打印設備
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card bordered={false} style={{ textAlign: "center" }} onClick={() => this.showModal()}>
                            <PlusOutlined />
                        </Card>
                    </Col>
                </Row>
            </div>
            <Modal
                title="添加設備"
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
                        label='設備名稱'
                        name="username"
                        rules={[{ required: true, message: '請輸入名稱' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='备注'
                        name="username"
                        rules={[{ required: true, message: '請輸入備註!' }]}
                    >
                        <TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    }
}
