import React, { Component } from 'react';
import { Row, Divider, Card } from 'antd';
import { Form, Input, Button, Radio } from 'antd';
import Titles from '@/components/Title'
import './index.less'
interface LoginState {
    select: string
}
interface LoginProps { }


export default class extends Component<LoginProps, LoginState>{
    constructor(props: Readonly<LoginProps>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {
        return <div className='orderdetails'>
            <Titles>
                <div>訂單詳情2929293</div>
                <div>323</div>
                <div>訂單狀態：已完成</div>
            </Titles>
            <Card  bordered={false}  style={{margin:'10px 20px'}}>
                <div className='tip-titles'>下單用戶</div>
                <div className='table-warp'>
                    <table >
                        <tr>
                            <td>暱稱：xxxx</td>
                            <td>LINE：xxxx</td>
                            <td>用戶ID：xxx</td>
                        </tr>
                        <tr>
                            <td>電話：xxxx</td>
                            <td>Elmail：xxx</td>
                            <td></td>
                        </tr>
                    </table>
                    <table >
                        <tr>
                            <td>訂單號：xxxx</td>
                            <td>下單時間：xxxx</td>
                            <td>下單方式：xxx</td>
                        </tr>
                        <tr>
                            <td>支付方式：xxxx</td>
                            <td>付款時間：xxx</td>
                            <td>支付交易號：xxx</td>

                        </tr>
                    </table>
                </div>
                <div className='tip-titles'>服務商戶</div>
                <div className='table-warp'>
                    <table >
                        <tr>
                            <td>商戶：xxxx</td>
                            <td>門店：xxxx</td>
                            <td>設備：xxx</td>
                        </tr>
                        <tr>
                            <td>電話：xxxx</td>
                            <td>Elmail：xxx</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className='tip-titles'>發票信息</div>
                <div className='table-warp'>

                    <table >
                        <tr>
                            <td>發票類型：個人</td>
                            <td>載具/紙本：電子紙本</td>
                            <td>客戶姓名：xxx</td>
                        </tr>
                        <tr>
                            <td>地址:xxxx</td>
                            <td>電郵地址：xxx</td>
                            <td>客戶電話：xxx</td>
                        </tr>
                    </table>
                </div>
                <Divider />
                <div className='table-warp'>

                    <table >
                        <tr>
                            <td>發票編號：151548789515</td>
                            <td>發票金額：34</td>
                            <td>合計:xxx </td>
                        </tr>
                        <tr>
                            <td>銷售額（含稅）:xxxx</td>
                            <td>稅額：xxx</td>
                            <td>總計：xxx</td>
                        </tr>
                        <tr>
                            <td>備註:xxxx</td>
                            <td>發票詳情：查看發票</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className='tip-titles'>商品信息</div>
                <div className='table-warp'>

                    <table >
                        <tr>
                            <td>商品：自助列印</td>
                            <td>商品編號：0001</td>
                            <td>顏色：xxx</td>
                        </tr>
                        <tr>
                            <td>數量：1</td>
                            <td>價格：64</td>
                            <td>服務狀態：已下單</td>
                        </tr>
                        <tr>
                            <td>列印範圍：3 - 67</td>
                            <td>列印方向：直式</td>
                            <td>單雙面：雙面-短邊裝訂</td>
                        </tr>
                        <tr>
                            <td>紙張大小：A4</td>
                            <td>列印副本：2</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>查看源文檔</td>
                            <td>取消訂單</td>
                            <td>手動退款</td>
                            <td>修改價格</td>
                        </tr>
                    </table>
                </div>
                <div className='tip-titles'>優惠信息</div>
                <div className='table-warp'>

                    <table >
                        <tr>
                            <td>優惠类型：折扣</td>
                            <td>減免金額：30</td>
                            <td>優惠券編號：10293910293</td>
                        </tr>
                        <Divider />

                        <tr>
                            <td>商品總額：xx</td>
                            <td>優惠券：-30</td>
                            <td>減免金額：10293910293</td>
                            <td>積分兌換：0</td>
                            <td>應付總額：0</td>
                        </tr>
                    </table>
                </div>
            </Card>
        </div>
    }
}
