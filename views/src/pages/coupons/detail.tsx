import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { DatePicker, Input, Button, Radio } from 'antd';
import Tables from '@/components/Tables'
const { RangePicker } = DatePicker;
const { TextArea } = Input;

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

            <Card style={{ margin: '10px 20px' }} bordered={false}>
                <Row gutter={8}>
                    <Col span={6} >
                        <div>兌換碼</div>
                        <Input placeholder='xx'/>
                        <div>*自助機不支持中文輸入時，用戶可能無法兌換</div>
                        <div>類型</div>
                        <Radio.Group >
                            <Radio value={1}>滿減</Radio>
                            <Radio value={2}>折扣</Radio>
                            <Radio value={3}>現金券</Radio>
                        </Radio.Group>
                        <div>有效期</div>
                        <RangePicker />
                        <div>總量 當前剩餘9,032</div>
                        <Input placeholder='xx'/>
                        <div>可用用戶</div>
                        <Radio.Group >
                            <Radio value={1}>全體用戶</Radio>
                            <Radio value={3}>部分用戶</Radio>
                        </Radio.Group>
                        <div>適用範圍</div>
                        <Radio.Group >
                            <Radio value={1}>所有</Radio>
                            <Radio value={3}>部分設備</Radio>
                        </Radio.Group>
                        <div>備註</div>
                        <TextArea rows={4} />
                        <div style={{ marginTop: 10 }}>
                            <Button type="primary" style={{ marginRight: 10 }}>Primary</Button>
                            <Button>Default</Button>
                        </div>
                    </Col>
                    <Col span={18}>
                    <div>操作日誌</div>
                        <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} />

                    </Col>
                </Row>
            </Card>

        </div>
    }
}
