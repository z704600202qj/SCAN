import React, { Component } from 'react';
import { Row, Upload, Card } from 'antd';
import { message, Input, Button, Radio } from 'antd';
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
                <div style={{position:"absolute"}}>商品詳情</div>
                <div></div>
            </Titles>
            <Card style={{ margin: '10px 20px' }} bordered={false}>
            </Card>
        </div>
    }
}
