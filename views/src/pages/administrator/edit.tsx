import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
interface Values {
    oldpassword: string;
    newpassword: string;
    new2password: string;
}

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}
import { login, string } from '@/services/user'
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
            title="修改密码"
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
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                name="form_in_modal"
                initialValues={{ modifier: 'public' }}
            >
              <Form.Item
                    label="原密碼"
                    name="oldpassword"
                    rules={[{ required: true, message: '請輸入原密碼!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="新密碼"
                    name="newpassword"
                    rules={[{ required: true, message: '請輸入新密碼!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="确认密碼"
                    name="new2password"
                    dependencies={['newpassword']}
                    rules={[
                        {
                            required: true,
                            message: '请确认密码',
                        },

                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('newpassword') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('两次输入密码不一致，请重新输入!');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CollectionCreateForm