import React, { Component } from 'react';
import { Row, Radio, Card } from 'antd';
import {history} from 'umi'
import Titles from '@/components/Title'
import Param from '../param'
import Store from '../../stores/index'

import './index.less'
interface StateType {
    select: string
}
interface PropsType { }


export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            select: 'a'
        }
    }
    componentDidMount() {
    }

    radioChange = ({ target: { value } }: { target: { value: string } }) => {
        this.setState(({
            select: value
        }))
    }
    render() {
        const { query }: any = history.location
        const { select } = this.state
        return <div className='merchantsetails'>
            <Titles>
                <div style={{ position: "absolute" }}></div>
                <Radio.Group value={select} onChange={(e: any) => this.radioChange(e)} buttonStyle="solid">
                    <Radio.Button value="a">關聯門店</Radio.Button>
                    <Radio.Button value="b">關聯設備</Radio.Button>
                </Radio.Group>
            </Titles>

            {
                select === 'a' && <Store serverid={query.id}/>
            }
            {
                select === 'b' && <Param associated={query.fids}></Param>
            }

        </div>
    }
}
