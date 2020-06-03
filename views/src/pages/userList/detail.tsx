import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Tabs, Input, Button, Divider } from 'antd';
import { userDetail } from '@/services/user'
import { userCoupon } from '@/services/coupon'
import { userTemplateList } from '@/services/bill'

import { history } from 'umi'

import './index.less'
const { TextArea } = Input;
const { TabPane } = Tabs;

interface propsType { }
interface stateType {
    data: any
}
const tabListNoTitle = [
    {
        key: 'order',
        tab: '訂單',
    },
    {
        key: 'bill',
        tab: '發票資訊',
    },
    {
        key: 'coupon',
        tab: '優惠券',
    },
];
export default class extends Component<propsType, stateType>{
    constructor(props: Readonly<propsType>) {
        super(props)
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        this.userDetail()
    }
    userDetail = async () => {
        const { query }: any = history.location
        const { data } = await userDetail({ userid: query.id })
        this.setState({
            data
        })
    }
    change = async (e:string) => {
        const { query }: any = history.location

        console.log(e)
        if (e === 'coupon') {
            const { data } = await userCoupon({ userid: query.id })
        }else if(e === 'bill'){
            const { data } = await userTemplateList({ userid: query.id })
        }
    }
    render() {
        const { data } = this.state
        console.log(this.state.data)
        return <div className='administrator-warp'  >
            <Card className='infos'>
                <div className='avatar'>
                    <img className='imgs' src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />
                    <div className='nickName'>
                        <div>{data.nickname}</div>
                        <div>ID:{data.userid}</div>
                    </div>
                </div>
                <p>註冊時間：{data.create_time}</p>
                <p>註冊地址：{data.address}</p>
                <p>最近訪問：{data.update_time}</p>
                <Divider dashed />
                <div className='infos-items'>{data.mobile || '无'} <span>解绑</span></div>
                <div className='infos-items'>OpenID: {data.line || '无'} <span>解绑</span></div>
                <div className='infos-items'>{data.email || '无'}<span>解绑</span></div>
                <Divider dashed />
                <div>
                    備註
                <TextArea rows={4} value={data.remark} />
                    <Button type="link">保存</Button>

                </div>
                <Button type='default'>冻结账号</Button>

            </Card>
            <Card className='desc' onTabChange={this.change} tabList={tabListNoTitle}>

            </Card>

        </div>
    }
}
