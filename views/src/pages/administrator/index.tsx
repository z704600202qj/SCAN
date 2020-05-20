import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, Radio } from 'antd';
import './index.less'
interface propsType { }
interface stateType { }
export default class extends Component<propsType, stateType>{
    constructor(props: Readonly<propsType>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {
        return <div className='administrator-warp'  >
                    <Card className='infos'>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card className='desc'>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>

        </div>
    }
}
