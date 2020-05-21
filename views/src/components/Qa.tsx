import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

import './index.less'
interface propsType {
}
export default (props: propsType) => {
    return <>
    <div className='qa-item'>
        <div className='qa-label'>
            1.問題
       </div>
        <div className='qa-value'>
            <Input placeholder="Basic usage" />
        </div>
    </div>
    <div className='qa-item'>
        <div className='qa-label'>
        1.答案
       </div>
        <div className='qa-value'>
            <TextArea rows={4} placeholder="Basic usage" />
        </div>
    </div>
    
    </>;
}