import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
const { Option } = Select;
import { facility } from '@/services/serviceMg'

interface Values {
    file_path: string;
    describe: string;
}

interface CollectionCreateFormProps {
    visible: boolean;
    info:object,
    onCreate: (values: Values) => void;
    onCancel: () => void;
}
import './index.less'
const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel,
    info,
}) => {
    const [facility_list, set_facility_list] = useState([])

    useEffect(() => {
        facility().then(({ data }) => {
            set_facility_list(data)
        })
    }, [])


    let arr2 = facility_list.map((item: any) => <Option key={item.fid} value={item.fids} >{item.title}</Option>)

console.log(1122,info)
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="添加服務"
            okText="保存"
            cancelText="取消"
            onCancel={onCancel}
            
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
            }}
        >
            <Form
                className='login-warp'
                name="basic"
                form={form}
                initialValues={info}
            >
                <Form.Item
                    label='服务名称'
                    name="server_name"
                    rules={[{ required: true, message: '請輸入名稱' }]}
                >
                    <Input placeholder='請輸入名稱' />
                </Form.Item>
                <Form.Item label='商品參數' >
                    A4
                    </Form.Item>
                <Form.Item
                    label='黑白(元/面)'
                    name="tabula"
                >
                    <Input placeholder='請輸入金额' style={{ width: '80%' }} /> 
                    </Form.Item>
                <Form.Item
                    label='彩色(元/面)'
                    name="colours"
                >
                    <Input placeholder='請輸入金额' style={{ width: '80%' }} />  
                    </Form.Item>
                <Form.Item
                    label="關聯設備"
                    name="fids"
                >
                    <Select mode="multiple" >
                        {arr2}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CollectionCreateForm