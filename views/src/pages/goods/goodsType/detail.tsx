import React, { Component } from 'react';
import { Input, Button, Card } from 'antd';
import { history } from 'umi'
import Tables from '@/components/Tables'
import Create from './Create'
import { serverCreate, server, serverEdit, serverDel, serverDetail } from '@/services/serviceMg'

import './index.less'
interface StateType {
    visible: boolean,
    list: any[],
    serverList: any[],
    info: object
}
interface PropsType { }


export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            visible: false,
            list: [],
            serverList: [],
            info: {}
        }
    }
    componentDidMount() {
        this.server()
    }
    server = async () => {
        const { query }: any = history.location
        let { data } = await server({ stid: query.stid })
        this.setState({
            serverList: data
        })
    }
    edits = async (item: { sid: any; }) => {
        let { data } = await serverDetail({
            sid: item.sid
        })
        data.desc.fids = data.desc.fids.indexOf(',') > -1 ? data.desc.fids.split(',') : [data.desc.fids]
        let obj = {
            fids: data.desc.fids,
            sid: data.desc.sid,
            server_name: data.desc.server_name,
            colours: data.list[0].colours,
            tabula: data.list[0].tabula,
            spid: data.list[0].spid
        }
        this.setState({
            visible: true,
            info: obj
        })
    }
    del = () => {

    }
    handleOk = async (e: any) => {
        const { query }: any = history.location
        e.stid = query.stid
        e.fids = e.fids.join(',')
        if (Object.keys(this.state.info).length > 0) {
            e.spid = this.state.info.spid
            e.sid = this.state.info.sid
            await serverEdit(e)
        } else {
            await serverCreate(e)
        }
        await this.server()
        this.setState({
            visible: false,
            info:{}
        });
    };
    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const columns = [
            {
                title: '服務名稱',
                dataIndex: 'server_name',
                key: 'server_name',
            },
            {
                title: '操作',
                key: 'fdid',
                render: (text: any) => (
                    <div>
                        <a onClick={() => this.edits(text)}>编辑</a>
                        <a style={{ marginLeft: 10 }} onClick={() => this.del(text)}>删除</a>
                    </div>
                )
            }
        ]
        return <div className='merchantsetails'>

            <Card style={{ margin: '10px 20px' }} title='服務類型详情' extra={<Button onClick={() => {
                this.setState({
                    visible: true,
                })
            }}>添加服務</Button>} bordered={false}>
                <Tables columns={columns} data={this.state.serverList} rowKey='sid' unpagination={true} />

            </Card>
            {
                this.state.visible && <Create
                    info={this.state.info}
                    visible={this.state.visible}
                    onCreate={this.handleOk}
                    onCancel={() => {
                        this.setState({
                            visible: false,
                            info:{}
                        })
                    }}
                />
            }

        </div>
    }
}
