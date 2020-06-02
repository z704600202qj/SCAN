import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import moment from 'moment'
import { DatePicker, Input, Button, Radio } from 'antd';
import { history } from 'umi'

import Tables from '@/components/Tables'
import { couponCreate, couponDetail, couponEdit } from '@/services/coupon'
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
    select?: string,
    type?: string,
    redeem: string,
    remark: string,
    reduct: string,
    rebate: string,
    start_time: any,
    draw_endtime: any,
    draw_starttime: any,
    end_time: any,
    cash: string,
    num: number,
    cid: string,
    state: string,
    subtract: string,
}
interface PropsType { }


export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            redeem: '',
            remark: '',
            type: '1',
            state: '1',
            reduct: '',
            subtract: '',
            rebate: '',
            cash: '',
            num: 0,
            start_time: '',
            end_time: '',
            draw_endtime: '',
            draw_starttime: '',
            cid: ''
        }
    }
    componentDidMount() {
        const { query }: any = history.location
        if (query.cid) {
            this.couponDetail(query.cid)
        }
    }
    couponDetail = async (cid: string) => {
        let { data } = await couponDetail({ cid })
        this.setState({
            ...data
        })
    }
    changes = (e: any, query: string) => {
        const { value } = e.target;
        let obj: any = {
            [query]: value
        }
        this.setState(obj)
    }
    changesPicker = (e: moment.MomentInput[]) => {
        this.setState({
            start_time: moment(e[0]),
            end_time: moment(e[1]),
        })
    }
    changesPicker1= (e: moment.MomentInput[]) => {
        this.setState({
            draw_starttime: moment(e[0]),
            draw_endtime: moment(e[1]),
        })
    }
    submit = async () => {
        await couponCreate({ ...this.state })
    }
    editsubmit = async () => {
        await couponEdit({ ...this.state })
    }
    editStatus = async () => {
        const { state } = this.state
        const { query }: any = history.location
        await couponEdit({ state: state === '1' ? '2' : '1', cid: query.cid })
        await this.couponDetail(query.cid)
    }
    render() {
        const { type, cid, state } = this.state
        return <div className='couponsdetails'>

            <Card style={{ margin: '10px 20px' }} bordered={false}>
                <Row gutter={8}>
                    <Col span={6} >
                        <div className='label'>兌換碼</div>
                        <Input placeholder='兌換碼' value={this.state.redeem} onChange={(e) => this.changes(e, 'redeem')} />
                        <div className='label'>類型</div>
                        <Radio.Group value={this.state.type} onChange={(e) => this.changes(e, 'type')}>
                            <Radio value={'1'}>滿減</Radio>
                            <Radio value={'2'}>折扣</Radio>
                            <Radio value={'3'}>現金券</Radio>
                        </Radio.Group>
                        {
                            type === '1' && <div>
                                <div className='label'>满</div>
                                <Input placeholder='满足金额' value={this.state.reduct} onChange={(e) => this.changes(e, 'reduct')} />
                                <div className='label'>减</div>
                                <Input placeholder='减少金额' value={this.state.subtract} onChange={(e) => this.changes(e, 'subtract')} />
                            </div>
                        }
                        {
                            type === '2' && <div>
                                <div className='label'>折扣%</div>
                                <Input placeholder='折扣率' value={this.state.rebate} onChange={(e) => this.changes(e, 'rebate')} />
                            </div>
                        }
                        {
                            type === '3' &&
                            <div>
                                <div className='label'>现金劵</div>
                                <Input placeholder='折扣率' value={this.state.cash} onChange={(e) => this.changes(e, 'cash')} />
                            </div>
                        }

                        <div className='label'>领取时间</div>
                        <RangePicker placeholder={['开始时间','结束时间']} value={[moment(this.state.start_time), moment(this.state.end_time)]} onChange={this.changesPicker1} format='YYYY-MM-DD' />
                        <div className='label'>有效期</div>
                        <RangePicker placeholder={['开始时间','结束时间']} value={[moment(this.state.start_time), moment(this.state.end_time)]} onChange={this.changesPicker} format='YYYY-MM-DD' />
                        <div className='label'>總量 當前剩餘9,032</div>
                        <Input placeholder='优惠券数量' value={this.state.num} onChange={(e) => this.changes(e, 'num')} />
                        <div className='label'>備註</div>
                        <TextArea rows={4} value={this.state.remark} onChange={(e) => this.changes(e, 'remark')} />
                        <div style={{ marginTop: 10 }}>
                            {
                                cid ? <Button type="primary" style={{ marginRight: 10 }} onClick={this.editsubmit}>编辑保存</Button> :
                                    <Button type="primary" style={{ marginRight: 10 }} onClick={this.submit}>保存</Button>
                            }
                            {
                                (state && state === '1') ? <Button style={{ marginRight: 10 }} onClick={this.editStatus}>停用</Button> :
                                    <Button style={{ marginRight: 10 }} onClick={this.editStatus}>启用</Button>
                            }
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
