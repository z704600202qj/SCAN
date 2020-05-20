import React, { Component } from 'react';
import { Row, Upload, Card } from 'antd';
import { message, Input, Button, Radio } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';

import './index.less'
interface StateType {
    select: string
}
interface PropsType { }


export default class extends Component<PropsType, StateType>{
    constructor(props: Readonly<PropsType>) {
        super(props)

    }
    componentDidMount() {
    }


    render() {

        return <div className='merchantsetails'>

            <div className='merchants-content'>
                <div className='merchants-content-left'>
                    <div>門店基本信息</div>
                    <div className='form-title'>門店名稱</div>
                    <Input />
                    <div className='form-title'>所在位置</div>
                    <Input />

                    <div className='form-title'>縮略圖片</div>
                    <div className='uploadimg'>
                        <Upload>
                            <Button><UploadOutlined /> 上傳圖片</Button>
                        </Upload>
                        <img className='demo' style={{ marginLeft: 50 }} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" />
                    </div>
                    <div className='form-title'>所屬商戶</div>
                    <Input />
                </div>
                <div className='merchants-content-right'>
                    備註信息
                    </div>
            </div>

        </div>
    }
}
