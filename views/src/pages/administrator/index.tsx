import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, Radio } from 'antd';
import Tables from '@/components/Tables'

import './index.less'
interface propsType { }
interface stateType { }
const tabListNoTitle = [
    {
        key: '日誌',
        tab: '日誌',
    },

];
const columns = [
    {
        title: '操作時間',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '类型',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
]
export default class extends Component<propsType, stateType>{
    constructor(props: Readonly<propsType>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {
        return <div className='administrator-warp'  >
            <Card className='infos'>
                <div className='avatar'>
                    <img className='img' src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />
                    <div className='nickName'>
                        <div>超級管理員</div>
                    </div>
                </div>
                <Form layout='vertical'  >
                    <Form.Item label='密碼' >
                        <Input placeholder="編號或名稱" />
                    </Form.Item>
                    <Form.Item label='驗證碼' style={{ marginTop: 15 }} >
                        <Row gutter={8}>
                            <Col span={12}>
                                <Form.Item
                                    name="captcha"
                                    noStyle
                                    rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Button>發送驗證碼</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12 }}>
                        <Button type="primary" htmlType="submit">修改密碼</Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card className='desc' tabList={tabListNoTitle}>
                <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} style={{ width: '100%' }} />
            </Card>

        </div>
    }
}
