import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, DatePicker } from 'antd';

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

    goto=()=>{

    }
    render() {
        return <div>
             
            <Card bordered={false} style={{ margin: '10px 20px' }}>
                標題
                <Input placeholder='請輸入標題' />
                內容
            </Card>
        </div>
    }
}
