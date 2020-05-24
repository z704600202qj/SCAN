import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, Radio } from 'antd';
import Tables from '@/components/Tables'

import './index.less'
interface propsType { }
interface stateType { }
const tabListNoTitle = [
    {
        key: '日誌',
        tab: '日誌',
    },

];
const columns = [
    {
        title: '名稱',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '角色',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
    {
        title: '操作',
        dataIndex: 'orderNO',
        key: 'orderNO',
    },
]
export default class extends Component<propsType, stateType>{
    constructor(props: Readonly<propsType>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {
        return <div >
            <Card style={{ margin: '10px 20px' }}>
                <Tables columns={columns} data={[]} rowKey='' list={{ totalNum: 0, totalPage: 0 }} style={{ width: '100%' }} />
            </Card>

        </div>
    }
}
