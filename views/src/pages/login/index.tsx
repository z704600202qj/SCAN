import React, { Component } from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { history } from 'umi'
import { login, string } from '@/services/user'
import './index.less'

export default () => {
    const onFinish = async (values: any) => {
        let data = await login(values)
        if (data.code === 200) {
            window.localStorage.setItem('tokens', data.data.token)
            history.replace('/')
            message.success(data.msg)
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const test = async (values: any) => {
        console.log('Success:', values);
        await string(values)
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
                rules={[{ required: true, message: '請輸入帳號!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: '請輸入密碼!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    登錄
        </Button>
            </Form.Item>
        </Form>
    );
};