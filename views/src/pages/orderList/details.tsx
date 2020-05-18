import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Form, Input, Button, Radio } from 'antd';

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
            <Card title='訂單詳情' extra='訂單狀態：已完成'>
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
            </Card>
        </div>
    }
}
