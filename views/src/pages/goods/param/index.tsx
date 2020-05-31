import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { history } from 'umi'
import { Form, Input, Button, Modal, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';

import './index.less';
import { facility, facilitycreate, facilitydetail, facilitydel, facilityedit } from '@/services/serviceMg'
const { TextArea } = Input
interface StateType {
    visible: boolean,
    desc: {
        title?: string,
        remark?: string
    },
    list: any[]
}
interface PropsType {
    associated?: string // 关联设备
}

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
        const { associated } = this.props
        if (associated) {
            this.facilitydetail(associated)
            return
        }
        this.getData()
    }
    async getData() {
        let { data } = await facility()
        this.setState({
            list: data
        })
    }
    async facilitydetail(associated: string) {
        let arr = associated.indexOf(',') > -1 ? associated.split(',') : [associated]

        let { data } = await facilitydetail({
            fid: arr
        })
        this.setState({
            list: data
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
            desc: {}
        });
    };
    handleOk = () => {
        const { current }: any = this.formRef
        const { desc }: any = this.state
        let obj = current.getFieldsValue()
        current.submit()
        if (obj.title && obj.remark) {
            this.setState({
                visible: false,
            }, async () => {
                if (Object.keys(desc).length === 0) {
                    await facilitycreate(obj)
                } else {
                    await facilityedit({ ...obj, fid: desc.fid })
                }
                await this.getData()
                await current.resetFields()
            });

        }
    };
    del = async (fid: string) => {
        await facilitydel({ fid })
        await this.getData()
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    detail = (fid: string) => {
        history.push({
            pathname: '/paramDetail',
            query: {
                fid
            }
        })
    }
    edits = (data: any) => {
        this.setState({
            visible: true,
            desc: data
        });
    }
    render() {
        const { associated } = this.props

        const { list, desc } = this.state
        return <div>

            <div style={{ margin: '10px 20px' }} className="site-card-wrapper">
                <Row gutter={16}>
                    {
                        list.map((item) => <Col span={8} key={item.fid} >
                            <Card title={item.title} actions={[<div className='btns' onClick={() => this.detail(item.fid)}>詳情</div>, <div className='btns' onClick={() => this.edits(item)}>編輯</div>, <div className='btns' onClick={() => this.del(item.fid)}>刪除</div>]} bordered={false}>
                                key：{item.key_str} <br />
                                密钥：{item.secret_key} <br />
                                备注：{item.remark}
                            </Card>
                        </Col>)
                    }
                    {
                        !associated && <Col span={8}>
                            <Card bordered={false} style={{ textAlign: "center" }} onClick={() => this.showModal()}>
                                <PlusOutlined />
                            </Card>
                        </Col>
                    }

                </Row>
            </div>
            <Modal
                title={Object.keys(desc).length === 0 ? "添加設備" : '修改設備'}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form
                    className='login-warp'
                    name="basic"
                    ref={this.formRef}
                    initialValues={desc}
                >
                    <Form.Item
                        label='設備名稱'
                        name="title"
                        rules={[{ required: true, message: '請輸入名稱' }]}
                    >
                        <Input value={desc.title} />
                    </Form.Item>
                    <Form.Item
                        label='备注'
                        name="remark"
                        rules={[{ required: true, message: '請輸入備註!' }]}
                    >
                        <TextArea value={desc.remark} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    }
}
