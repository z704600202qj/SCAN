import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.less'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
export default () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            className='login-warp'
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                    Login
        </Button>
            </Form.Item>
        </Form>
    );
};