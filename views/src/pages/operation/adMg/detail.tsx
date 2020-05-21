import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Upload, Input, Button, Radio } from 'antd';
import Tables from '@/components/Tables'

import './index.less'
const columns = [
    {
        title: '标题',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '添加时间',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '操作',
        dataIndex: 'orderTime',
        key: 'orderTime',
    },
]
interface StateType {
    select: string
}
interface PropsType { }


export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {

        return <div className='merchantsetails'>

            <Card title='Web轮播图管理' style={{ margin: '10px 20px' }} bordered={false}>
                <Row>
                    <Col span={6}>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        >
                            <img className='imgs' src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />

                        </Upload>
                        <Radio.Group >
                            <Radio value={1}>无内容</Radio>
                            <Radio value={2}>跳转内容</Radio>
                        </Radio.Group>
                        <div style={{marginTop:10}}>
                            <Button type="primary"  style={{marginRight:10}}>Primary</Button>
                            <Button>Default</Button>
                        </div>
                    </Col>
                    <Col span={18}>
                        <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />

                    </Col>
                </Row>
            </Card>

            <Card title='自助機轮播图管理' style={{ margin: '10px 20px' }} bordered={false}>
                <Row>
                    <Col span={6}>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        >
                            <img className='imgs' src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />

                        </Upload>
                        <Radio.Group >
                            <Radio value={1}>无内容</Radio>
                            <Radio value={2}>跳转内容</Radio>
                        </Radio.Group>
                        <div style={{marginTop:10}}>
                            <Button type="primary"  style={{marginRight:10}}>Primary</Button>
                            <Button>Default</Button>
                        </div>
                    </Col>
                    <Col span={18}>
                        <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />

                    </Col>
                </Row>
            </Card>
        </div>
    }
}
