import React, { Component } from 'react';
import { Row, Upload, Card } from 'antd';
import { message, Input, Button, Radio } from 'antd';
import QaItem from '@/components/Qa'
import './index.less'

const { TextArea } = Input;

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

        return <div>

            <Card title='QA設置' style={{ margin: '10px 20px' }} bordered={false}>
                <QaItem />
            </Card>

            <Card title='關於' style={{ margin: '10px 20px' }} bordered={false}>
                <div className='qa-item'>
                    <div className='qa-label'> 1.答案 </div>
                    <div className='qa-value'>
                        <TextArea rows={4} placeholder="Basic usage" />
                    </div>
                </div>
                <div className='qa-item'>
                    <div className='qa-label'> </div>
                    <div className='qa-value'>
<Button type='default'>保存</Button>
</div>
                    </div>
            </Card>
        </div>
    }
}
