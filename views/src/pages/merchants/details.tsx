import React, { Component } from 'react';
import { Row, Upload, Card } from 'antd';
import { message, Input, Button, Radio } from 'antd';
import BaseInfo from './baseInfo';
import Door from './door';
import Order from './order';
import Titles from '@/components/Title'

import './index.less'
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
            <Titles>
                <div style={{position:"absolute"}}>商戶詳情</div>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">基本信息</Radio.Button>
                    <Radio.Button value="b">商戶門店</Radio.Button>
                    <Radio.Button value="c">商戶訂單</Radio.Button>
                </Radio.Group>
            </Titles>
            <Card style={{ margin: '10px 20px' }} bordered={false}>

                {/* <BaseInfo/> */}
                {/* <Door/> */}
                <Order />
            </Card>
        </div>
    }
}
