import React, { Component } from 'react';
import { message, Card, Button, Radio } from 'antd';
import { history } from 'umi'
import BaseInfo from './baseInfo';
import GoodsList from './goodsList';
import List from './list'
import Titles from '@/components/Title'
import { brandShopDetail } from '@/services/store'

import './index.less'
interface StateType {
    select: string,
    details: object
}
interface PropsType { }


export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            select: 'a',
            details: {}
        }
    }
    componentDidMount() {
        this.brandShopDetail()
    }
    brandShopDetail = async () => {
        const { query }: any = history.location
        let { data } = await brandShopDetail({ id: query.id })
        this.setState({
            details: data
        })
    }
    radioChange = ({ target: { value } }: { target: { value: string } }) => {
        this.setState(({
            select: value
        }))
    }
    render() {
        const { select,details } = this.state
        console.log(123,details)
        return <div className='merchantsetails'>
            <Titles>
                <div style={{ position: "absolute" }}>門店詳情</div>
                <Radio.Group value={select} onChange={(e: any) => this.radioChange(e)} buttonStyle="solid">
                    <Radio.Button value="a">基本信息</Radio.Button>
                    <Radio.Button value="b">門店商品</Radio.Button>
                    <Radio.Button value="c">服務記錄</Radio.Button>
                </Radio.Group>
            </Titles>

            {
                select === 'a' && <Card style={{ margin: '10px 20px' }} bordered={false}>
                    <BaseInfo />
                </Card>

            }
            {
                select === 'b' && <GoodsList details={details} />
            }
            {
                select === 'c' && <Card style={{ margin: '10px 20px' }} bordered={false}>
                    <List /> </Card>
            }
        </div>
    }
}
