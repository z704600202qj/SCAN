import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { history } from 'umi'
import { Form, Input, Button, Modal, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.less';
import { server_type, server_type_del, server_type_create, server_type_edit } from '@/services/serviceMg'

import { FormInstance } from 'antd/lib/form';
const { TextArea } = Input
interface StateType {
    visible: boolean,
    list: any[],
    desc: object
}
interface PropsType { }



export default class extends Component<PropsType, StateType>{
    formRef = React.createRef<FormInstance>();

    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            visible: false,
            list: [],
            desc: {}
        }
    }
    componentDidMount() {
        this.getData()
    }
    async getData() {
        let { data } = await server_type()
        this.setState({
            list: data,
            desc: {}
        })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
        const { current }: any = this.formRef
        const { desc }: any = this.state
        let obj = current.getFieldsValue()
        current.submit()
        if (obj.type && obj.remark) {
            this.setState({
                visible: false,
            }, async () => {
                if (Object.keys(desc).length === 0) {
                    await this.server_type_create(obj)
                } else {
                    await server_type_edit({ ...desc, ...obj })
                }
                await this.getData()
                await current.resetFields()
            });

        }
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    server_type_create = async (obj: object) => {
        await server_type_create({ ...obj })
        await this.getData()
    }
    server_type_edit = async (obj: object) => {
        await server_type_edit({ ...obj })
        await this.getData()
    }
    detail = (stid: string) => {
        history.push({
            pathname: '/typeDetail',
            query: {
                stid
            }
        })
    }
    edits = (data: any) => {
        this.setState({
            visible: true,
            desc: data
        });
    }
    del = async (stid: string) => {
        await server_type_del({ stid })
        await this.getData()
    }
    render() {
        const { list, desc } = this.state
        let obj: any = { '1': '自助打印', '2': '人工打印', '3': '人工影印' }
        return <div>
            <div style={{ margin: '10px 20px' }} className="site-card-wrapper">
                <Row gutter={16}>
                    {
                        list.map((item) => <Col span={8}>
                            <Card title={obj[item.type]} actions={[<div className='btns' onClick={() => this.detail(item.stid)}>詳情</div>, <div className='btns' onClick={() => this.edits(item)}>編輯</div>, <div className='btns' onClick={() => this.del(item.stid)}>刪除</div>]} bordered={false}>
                                {item.remark}
                            </Card>
                        </Col>)
                    }
                    <Col span={8}>
                        <Card bordered={false} style={{ textAlign: "center" }} onClick={() => this.showModal()}>
                            <PlusOutlined />
                        </Card>
                    </Col>
                </Row>
            </div>
            <Modal
                title="添加服務類型"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                {/* 服务类型:1自助列印2人工列印3人工影印 */}
                <Form
                    className='login-warp'
                    name="basic"
                    ref={this.formRef}
                    initialValues={desc}
                >
                    <Form.Item
                        label='服务类型'
                        name="type"
                        rules={[{ required: true, message: '请输入服务类型!' }]}
                    >
                        <Select placeholder='请选择类型'>
                            <Select.Option value="1">自助打印</Select.Option>
                            <Select.Option value="2">人工打印</Select.Option>
                            <Select.Option value="3">人工影印</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label='备注'
                        name="remark"
                        rules={[{ required: true, message: '请输入备注!' }]}
                    >
                        <TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    }
}
