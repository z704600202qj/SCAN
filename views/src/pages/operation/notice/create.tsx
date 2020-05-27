import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, DatePicker } from 'antd';
import BraftEditor from 'braft-editor'
import { history } from 'umi'

import 'braft-editor/dist/index.css'
import { noticeCreate, noticeDetail, noticeEdit } from '@/services/notice'

import './index.less'
interface StateType {
    content: any,
    nid: string,
    title: string,
    show: boolean
}
interface PropsType { }


export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            content: null,
            title: '',
            nid: '',
            show: true
        }
    }
    componentDidMount() {
        const { query }: any = history.location
        if (query.nid) {
            this.noticeDetail(query.nid)
        }
    }


    noticeDetail = async (nid: string) => {
        let { data } = await noticeDetail({ nid })
        this.setState({
            ...data
        })
    }
    submitContent = async () => {
        const content = this.state.content.toHTML()
        let { code } = await noticeCreate({ content: content, title: this.state.title })
        if (code === 200) {
            this.resets()
        }
    }
    resets = () => {
        this.setState({
            content: null,
            title: '',
            show: false
        }, () => {
            this.setState({
                show: true
            })
        })
    }
    handleEditorChange = (content: any) => {
        this.setState({ content })
    }
    changes = (e: any) => {
        const { value } = e.target;
        this.setState({
            title: value
        })
    }
    editsubmit = async () => {
        const { nid, title } = this.state
        const content = this.state.content.toHTML()
        let { code } = await noticeEdit({ content: content, title, nid })
        if (code === 200) {
            this.resets()
        }
    }
    render() {
        const { nid } = this.state

        return <div>

            <Card bordered={false} style={{ margin: '10px 20px' }}>
                <div style={{ marginBottom: 10 }}>標題</div>
                <Input placeholder='請輸入標題' value={this.state.title} style={{ marginBottom: 10 }} onChange={(e) => this.changes(e)} />
                <div style={{ marginBottom: 10 }}>內容</div>
                {
                    this.state.show && <BraftEditor
                        language='zh-hant'
                        value={BraftEditor.createEditorState(this.state.content)}
                        onChange={this.handleEditorChange}
                    />
                }

                <div>
                    {
                        nid ? <Button type="primary" style={{ marginRight: 10 }} onClick={this.editsubmit}>编辑保存</Button> :
                            <Button type="primary" style={{ marginRight: 10 }} onClick={this.submitContent}>保存</Button>
                    }
                    <Button onClick={this.resets} style={{ marginLeft: 10 }}>重置</Button>
                </div>
            </Card>
        </div>
    }
}
