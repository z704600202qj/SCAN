import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, Radio } from 'antd';
import Tables from '@/components/Tables'
import Edit from './edit'
import { admin,adminedit } from '@/services/user'

import './index.less'
interface propsType { }
interface stateType {
    data: any[],
    visible: boolean,
    aid: string | number
}


export default class extends Component<propsType, stateType>{
    constructor(props: Readonly<propsType>) {
        super(props)
        this.state = {
            data: [],
            visible: false,
            aid: ''
        }
    }
    componentDidMount() {
        this.list()
    }

    list = async () => {
        let { data } = await admin()
        this.setState({
            data: data
        })
    }
    edit = (item: any) => {
        console.log(item)
        this.setState({
            aid: item.aid,
            visible: true
        })
    }
    onCreate =async (e: any) => {
       let data= await adminedit({
            aid:this.state.aid,
            password:e.oldpassword,
            newpassword:e.newpassword
        })
        console.log(data)
    }
    render() {
        const columns = [
            {
                title: '名稱',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: '角色',
                render: () => {
                    return <div>超級管理員</div>
                }
            },
            {
                title: '操作',
                render: (item: { aid: any; }) => {
                    return <div onClick={() => this.edit(item)}>修改密码</div>
                }
            },
        ]
        return <div >
            <Card style={{ margin: '10px 20px' }}>
                <Tables columns={columns} data={this.state.data} rowKey='aid' unpagination={true} style={{ width: '100%' }} />
            </Card>
            <Edit
                onCreate={(e) => this.onCreate(e)}
                visible={this.state.visible}
                onCancel={() => {
                    this.setState({
                        visible: false
                    })
                }} />
        </div>
    }
}
