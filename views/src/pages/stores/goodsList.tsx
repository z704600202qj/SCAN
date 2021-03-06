import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { brand_shop_goodsCreate, brand_shop_goods } from '@/services/goods'
import Create from './Create'
const { RangePicker } = DatePicker;
const { Option } = Select;

interface StateType {
    visible: boolean,
    list: any[]
}
interface PropsType {
    details: any
}

export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)
        this.state = {
            visible: false,
            list: []
        }
    }
    componentDidMount() {
        this.goodsList()
    }
    goodsList = async () => {
        const { details } = this.props
        console.log(details)
        let { data } = await brand_shop_goods({
            size: 100,
            page: 1,
            bsid: details.desc.bsid
        })
        this.setState({
            list: data.list
        })
    }

    onCreate = async (e: any) => {
        const { details } = this.props

        await brand_shop_goodsCreate({
            ...e,
            bsid: details.desc.bsid,
            bid: details.desc.bid,
        })
    }
    render() {
        const { visible, list } = this.state
        const { details } = this.props

        return <div style={{ margin: '10px 20px' }}>
            <Row gutter={16}>
                {
                    list.map((item) =>
                        <Col span={12} style={{ marginTop: 15 }}>
                            <Card title='自助商品-自助列印' extra={[<Button style={{ margin: '0px 8px' }} >停用</Button>, <Button  >編輯</Button>]} bordered={false}>
                                <Row gutter={16}>

                                    <Col span={12}  >
                                        <p><span>商戶名稱 :</span>{item.brand.brand_name}</p>
                                        <p><span>門店名稱 :</span>{item.brand_shop.shop_name}</p>
                                        <p><span>服務類型 :</span>{item.server_type.type_name}</p>
                                        <p><span>關聯服務 :</span>{item.server.server_name}</p>
                                       {
                                          item.goods_facility.map((items: { title: React.ReactNode; })=>{
                                           return  <p><span>關聯設備 :</span>{items.title}</p>
                                          })
                                       }
                                    </Col>
                                    <Col span={12}  >
                                        <p><span>日訂單數 :</span>星巴克</p>
                                        <p><span>日收入額 :</span>星巴克</p>
                                        <p><span>當前紙張餘量 :</span>星巴克</p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            <Button style={{ margin: '20px 0px' }} onClick={() => {
                this.setState({
                    visible: true
                })
            }}>添加商品</Button>
            <Create visible={visible}
                onCreate={this.onCreate}
                onCancel={() => {
                    this.setState({
                        visible: false
                    })
                }} />
        </div>
    }
}
