import React, { Component } from 'react';
import { Row, Upload, Card } from 'antd';
import { Input, Button, Checkbox } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { history } from 'umi';
import CreateFile from './CreateFile'
import { brandDesc, brandShopCreate } from '@/services/store'
import './create.less'
interface StateType {
    remark: string,
    bid: string,
    sig: string,
    brand_name: string,
    address: string,
    shop_name: string,
    imageUrl: string,
    channelserct: string,
    channelid: string,
    visible: boolean,
    loading: boolean,
    is_bold: boolean,
    list: any[]
}
interface PropsType { }
const { TextArea } = Input

export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            bid: '',
            sig: '1',
            imageUrl: '固定imageUrl',
            address: '',
            remark: '',
            shop_name: '',
            brand_name: '',
            channelserct: '',
            channelid: '',
            is_bold: false,
            visible: false,
            loading: false,
            list: []
        }
    }
    componentDidMount() {
        this.brandDesc()
    }
    brandDesc = async () => {
        const { query }: any = history.location
        let { data } = await brandDesc({ bid: query.bid })
        let info = data.data
        this.setState({
            brand_name: info.brand_name,
            bid: query.bid
        })
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
        const { imageUrl, remark, shop_name, brand_name, is_bold, channelserct, channelid, bid } = this.state
        // address lon lat pay_name
        await brandShopCreate({
            bid,
            thumb_path: imageUrl,
            address: '固定address',
            lon: '111',
            lat: '222',
            pay_name: 'LIne Pay',
            remark,
            shop_name,
            brand_name,
            is_bold: is_bold ? '1' : '0',
            channelserct,
            channelid
        })
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

        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">上傳圖片</div>
            </div>
        );
        const { imageUrl, bid, is_bold, brand_name, shop_name, channelserct, channelid } = this.state
        return <Card style={{ margin: '10px 20px' }} title='門店基本信息' bordered={false} extra={<Button type="primary" onClick={this.createMer}>新建門店</Button>}>
            <div className='merchantsetails'>

                <div className='merchants-content'>
                    <div className='merchants-content-left'>
                        <div className='form-title'>ID：{bid}</div>
                        <div className='form-title'>所屬商戶</div>
                        <Input value={brand_name} disabled />
                        <div className='form-title'>門店名稱</div>
                        <Input value={shop_name} onChange={(e) => this.inputChange(e, 'shop_name')} />
                        <div className='form-title'>縮略圖片</div>
                        <div className='uploadimg'>
                            <Upload className="avatar-uploader">
                                {imageUrl ? <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className='demo' alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </div>
                    </div>
                    <div className='merchants-content-right'>
                        <div className='right-title'>
                            備註信息
                        <Checkbox checked={is_bold} onChange={this.onChange}>是否加粗</Checkbox>
                        </div>
                        <TextArea value={this.state.remark} onChange={(e) => this.inputChange(e, 'remark')} className='textarea' rows={4} />
                        <div className='right-title' style={{ marginTop: 10 }}>
                            收款方式：LIne Pay
                        </div>
                        <div className='form-title'>channelID</div>
                        <Input value={channelid} onChange={(e) => this.inputChange(e, 'channelid')} />
                        <div className='form-title'>channelSecret</div>
                        <Input value={channelserct} onChange={(e) => this.inputChange(e, 'channelserct')} />
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
