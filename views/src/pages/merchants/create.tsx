import React, { Component } from 'react';
import { Row, Upload, Card } from 'antd';
import { Input, Button, Checkbox } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Tables from '@/components/Tables'
import CreateFile from './CreateFile'
import { brandCreate } from '@/services/store'
import './create.less'
interface StateType {
    remark: string,
    brand_name: string,
    imageUrl: string,
    visible: boolean,
    loading: boolean,
    is_bold: boolean,
    list: any[]
}
interface PropsType { }
const { TextArea } = Input
const arr = [
    {
        title: '備註說明',
        dataIndex: 'describe',
        key: 'describe',
        render: text => <a>{text}</a>,
    },
    {
        title: '图片',
        dataIndex: 'file_path',
        key: 'file_path',
        render: text => <img width='50' src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />,
    },

]
export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            imageUrl: '123',
            remark: '',
            brand_name: '',
            is_bold: false,
            visible: false,
            loading: false,
            list: []
        }
    }
    componentDidMount() {
    }

    onCreate = (e: any) => {
        let arr: any[] = JSON.parse(JSON.stringify(this.state.list))
        arr.push(e)
        this.setState({
            list: arr,
            visible: false
        })
    }
    resets = () => {
        this.setState({
            imageUrl: '123',
            remark: '',
            brand_name: '',
            is_bold: false,
            visible: false,
            loading: false,
            list: []
        })
    }
    edits = (e) => {
        console.log(e)
    }
    del = (e) => {
        console.log(e)
    }
    createMer = async () => {
        const { imageUrl, remark, brand_name, is_bold, list } = this.state
        await brandCreate({ thumb_path: imageUrl, remark, brand_name, is_bold: is_bold ? 1 : 0, list })
    }
    onChange = (e: { target: { checked: any; }; }) => {
        this.setState({
            is_bold: e.target.checked,
        });
    }
    inputChange = (e: { target: { value: any; }; }, target: string) => {
        let obj: object = {
            [target]: e.target.value
        }
        this.setState(obj)
    }
    render() {
        const columns = [...arr, {
            title: '操作',
            width: '150px',
            render: (text: any, record) => (
                <div>
                    <a onClick={() => this.edits(text)}>修改</a>
                    <a style={{ marginLeft: 10 }} onClick={() => this.del(record)}>刪除</a>
                </div>
            )

        },]
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">上傳圖片</div>
            </div>
        );
        const { imageUrl, list, is_bold, brand_name } = this.state
        return <Card style={{ margin: '10px 20px' }} title='商户基本信息' bordered={false} extra={<Button type="primary" onClick={this.createMer}>新建商户</Button>}>
            <div className='merchantsetails'>

                <div className='merchants-content'>
                    <div className='merchants-content-left'>
                        <div className='form-title'>商户名称</div>
                        <Input value={brand_name} onChange={(e) => this.inputChange(e, 'brand_name')} />
                        <div className='form-title'>縮略圖片</div>
                        <div className='uploadimg'>
                            <Upload className="avatar-uploader">
                                {imageUrl ? <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className='demo' alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </div>
                        <div className='form-title'>工商信息     <Button onClick={() => {
                            this.setState({
                                visible: true
                            })
                        }}>新增</Button></div>

                        <Tables columns={columns} data={list} rowKey='index' unpagination={true} />

                    </div>
                    <div className='merchants-content-right'>
                        <div className='right-title'>
                            備註信息
                        <Checkbox checked={is_bold} onChange={this.onChange}>是否加粗</Checkbox>
                        </div>
                        <TextArea value={this.state.remark} onChange={(e) => this.inputChange(e, 'remark')} className='textarea' rows={4} />

                    </div>
                </div>
            </div>
            <CreateFile
                onCreate={(e) => this.onCreate(e)}
                visible={this.state.visible}
                onCancel={() => {
                    this.setState({
                        visible: false
                    })
                }} />
        </Card>
    }
}
