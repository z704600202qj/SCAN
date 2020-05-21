import React, { Component } from 'react';
import { Row, Descriptions, Card } from 'antd';
import { message, Input, Button, Radio } from 'antd';
import Titles from '@/components/Title'

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

            <Card style={{ margin: '10px 20px' }} title='列印价格' bordered={false}>
                <Descriptions layout="vertical" bordered>
                    <Descriptions.Item label="Product">
                        <div>Cloud Database</div>
                        <div>Cloud Database</div>
                        <div>Cloud Database</div>
                        <div>Cloud Database</div>
                        <div>Cloud Database</div>
                    </Descriptions.Item>
                    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                </Descriptions>
            </Card>
        </div>
    }
}
