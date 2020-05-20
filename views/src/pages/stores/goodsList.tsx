import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Tables from '@/components/Tables'
const { RangePicker } = DatePicker;
const { Option } = Select;

interface StateType {
}
interface PropsType { }

export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {
        return <Card bordered={false} title='自助商品-自助列印'>
           門店商品信息


        </Card>
    }
}
