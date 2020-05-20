import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Tabs, Input, Button, Divider } from 'antd';
import './index.less'
const { TextArea } = Input;
const { TabPane } = Tabs;

interface propsType { }
interface stateType { }
const tabListNoTitle = [
    {
      key: '訂單',
      tab: '訂單',
    },
    {
      key: '發票資訊',
      tab: '發票資訊',
    },
    {
      key: '優惠券',
      tab: '優惠券',
    },
    {
        key: '日誌',
        tab: '日誌',
      },
  ];
export default class extends Component<propsType, stateType>{
    constructor(props: Readonly<propsType>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {
        return <div className='administrator-warp'  >
            <Card className='infos'>
                <div className='avatar'>
                    <img className='img' src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />
                    <div className='nickName'>
                        <div>momoChou</div>
                        <div>ID:39292839</div>
                    </div>
                </div>
                <p>註冊時間：2019-02-12 23:32:45</p>
                <p>註冊地址：台北市</p>
                <p>最近訪問：2020-02-02 12:32:44</p>
                <Divider dashed />
                <div className='infos-items'>69801548 <span>解绑</span></div>
                <div className='infos-items'>OpenID:292884023124124124 <span>解绑</span></div>
                <div className='infos-items'>kkkk@gmail.com<span>解绑</span></div>
                <Divider dashed />
                <div>
                    備註
                <TextArea rows={4} />
                    <Button type="link">保存</Button>

                </div>
                <Button type='default'>冻结账号</Button>

            </Card>
            <Card className='desc' tabList={tabListNoTitle}>
        
            </Card>

        </div>
    }
}
