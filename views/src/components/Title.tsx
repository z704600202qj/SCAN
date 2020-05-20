import React from 'react';
import './index.less'
interface propsType {
    children: React.ReactNode[]
}
export default (props: propsType) => {
    return <div className='title-warp'>
        <span className='title-item'>{props.children[0]}</span>
        <span className='title-item'>{props.children[1]}</span>
        <span className='title-item'>{props.children[2]}</span>
    </div>;
}