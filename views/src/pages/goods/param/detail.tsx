import React, { Component } from 'react';
import { Form, Input, Button, Modal, Descriptions, Card } from 'antd';
import { history } from 'umi'

import Tables from '@/components/Tables'
import { facility_device_create, facility_device, facility_device_del,facility_device_edit } from '@/services/serviceMg'
import { FormInstance } from 'antd/lib/form';

import './index.less'
interface StateType {
    visible: boolean,
    desc: object,
    list: any[]
}
interface PropsType { }
const { TextArea } = Input

const arr = [
    {
        title: '裝置名稱',
        dataIndex: 'device',
        key: 'device',
    },
    {
        title: '備註',
        dataIndex: 'remark',
        key: 'remark',
    },

]
export default class extends Component<PropsType, StateType>{
    formRef = React.createRef<FormInstance>();

    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            visible: false,
            desc: {},
            list: []
        }
    }
    componentDidMount() {
        this.facility_device()
    }
    facility_device_del = async (text: { fdid: any; }) => {
        await facility_device_del({fdid:text.fdid})
        await this.facility_device()
    }
    facility_device = async () => {
        const { query } = history.location

        let { data } = await facility_device({ fid: query.fid })
        this.setState({
            list: data
        })
    }
    facility_device_create = async (obj: object) => {
        const { query } = history.location
        await facility_device_create({ fid: query.fid, ...obj })
        await this.facility_device()
    }
    create = () => {
        this.setState({
            visible: true,
        });
    }
    edits = (data: any) => {
        this.setState({
            visible: true,
            desc: data
        });
    }
    handleOk = () => {
        const { current }: any = this.formRef
        const { desc }: any = this.state
        let obj = current.getFieldsValue()
        current.submit()
        if (obj.device && obj.remark) {
            this.setState({
                visible: false,
            }, async () => {
                if (Object.keys(desc).length === 0) {
                    await this.facility_device_create(obj)
                } else {
                    await facility_device_edit({...desc,...obj})
                }
                await this.facility_device()
                await current.resetFields()
            });

        }
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const columns = [...arr, {
            title: '操作',
            key: 'fdid',
            render: (text: any) => (
                <div>
                    <a  onClick={() => this.edits(text)}>编辑</a> 
                    <a style={{ marginLeft: 10 }} onClick={() => this.facility_device_del(text)}>删除</a>
                </div>
            )
        },]
        const { list ,desc} = this.state
        return <div className='merchantsetails'>

            <Card style={{ margin: '10px 20px' }} title='設備詳情' extra={<Button onClick={() => this.create()}>添加裝置</Button>} bordered={false}>
                <Tables columns={columns} data={list} rowKey='fdid' unpagination={true} />

            </Card>
            <Modal
                title="添加裝置"
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
                        label='名稱'
                        name="device"
                        rules={[{ required: true, message: '請輸入名稱' }]}
                    >
                        <Input placeholder='請輸入名稱' />
                    </Form.Item>
                    <Form.Item
                        label='备注'
                        name="remark"
                        rules={[{ required: true, message: '請輸入備註!' }]}
                    >
                        <TextArea placeholder='請輸入備註' />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    }
}
