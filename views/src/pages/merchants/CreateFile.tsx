import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
interface Values {
    file_path: string;
    describe: string;
}

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}
import './index.less'
const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel,
}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="工商信息"
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
                form={form}
                name="form_in_modal"
                initialValues={{ modifier: 'public' }}
            >
              <Form.Item
                    label="備註說明"
                    name="describe"
                    rules={[{ required: true, message: '請輸入備註說明!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="图片"
                    name="file_path"
                    rules={[{ required: true, message: '請輸入新密碼!' }]}
                >
                    <Input />
                </Form.Item>
           
            </Form>
        </Modal>
    );
};

export default CollectionCreateForm