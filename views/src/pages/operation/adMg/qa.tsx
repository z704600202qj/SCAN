import React, { Component } from 'react';
import { Row, Upload, Card } from 'antd';
import { message, Input, Button, Radio } from 'antd';
import QaItem from '@/components/Qa'
import { createabout, aboutList, editabout, help, helpcreate, helpedit,helpdel } from '@/services/about'

import './index.less'

const { TextArea } = Input;

interface StateType {
    list: any[],
    qaList: any[],
    haid: string,
    content: string
}
interface PropsType { }


export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            list: [],
            qaList: [],
            content: '',
            haid: ''
        }
    }
    componentDidMount() {
        this.aboutList()
        this.help()
    }
    aboutList = async () => {
        let { data } = await aboutList()
        this.setState({
            content: data.length > 0 ? data[0].content : '',
            haid: data.length > 0 ? data[0].haid : '',
            list: data
        })
    }
    helpcreate = async (e: any) => {
        await helpcreate(e)
        await this.help()
    }
    helpedit = async (e: any) => {
        console.log(e)
        await helpedit(e)
        await this.help()
    }
    helpdel= async (e: any) => {
        await helpdel({hid:e.hid})
        await this.help()
    }
    help = async () => {
        let { data } = await help()
        this.setState({
            qaList: data
        })
    }
    createabout = async () => {
        await createabout({ content: this.state.content })
        await this.aboutList()
        return
    }
    editabout = async () => {
        await editabout({ content: this.state.content, haid: this.state.haid })
        await this.aboutList()
    }

    changes = (e: any) => {
        const { value } = e.target;
        this.setState({
            content: value
        })
    }

    render() {
        const { list, content, qaList } = this.state
        return <div>

            <Card title='QA設置' style={{ margin: '10px 20px' }} bordered={false}>
                <QaItem label='问题' anLabel='答案' index={-1} create={this.helpcreate} />
                {
                    qaList.map((item, index) => <QaItem
                        key={index.toString()}
                        edit={this.helpedit}
                        del={this.helpdel}
                        item={item} label={`问题${index + 1}`}
                        anLabel={`答案${index + 1}`}
                        index={index} />)
                }
            </Card>

            <Card title='關於' style={{ margin: '10px 20px' }} bordered={false}>
                <div className='qa-item'>
                    <div className='qa-label'>關於內容</div>
                    <div className='qa-value'>
                        <TextArea rows={4} value={content} onChange={(e) => this.changes(e)} placeholder="關於內容" />
                    </div>
                </div>
                <div className='qa-item'>
                    <div className='qa-label'> </div>
                    <div className='qa-value'>
                        {
                            list.length > 0 ? <Button type='default' onClick={this.editabout}>编辑保存</Button> : <Button type='default' onClick={this.createabout}>保存</Button>
                        }
                    </div>
                </div>
            </Card>
        </div>
    }
}
