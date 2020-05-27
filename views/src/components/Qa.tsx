import React, { useState } from 'react';
import { Input, Switch, Button } from 'antd';
const { TextArea } = Input;

import './index.less'
interface propsType {
    label: string,
    anLabel: string,
    create?: any,
    del?: any,
    edit?: any,
    index: number,
    item?: any
}
export default (props: propsType) => {
    const { label, anLabel, index, create, item, edit,del } = props

    const [is_show, set_is_show] = useState(item ? item.is_show : true)
    const [result, set_result] = useState(item ? item.result : "")
    const [title, set_title] = useState(item ? item.title : '')
    const changes_result = (e: any) => {
        const { value } = e.target;
        set_result(value)
    }
    const changes_title = (e: any) => {
        const { value } = e.target;
        set_title(value)
    }
    const createSubmit = () => {
        let obj: any = { is_show, result, title }
        set_result('')
        set_title('')
        set_is_show(true)
        create(obj)
    }
    const editSubmit = () => {
        let obj: any = { ...item, is_show, result, title, }
        edit(obj)
    }

    return <>
        <div className='qa-item'>
            <div className='qa-label'>
                {label}
            </div>
            <div className='qa-value'>
                <Input placeholder="問題标题" value={title} style={{ marginRight: 20 }} onChange={changes_title} />
                <Switch checkedChildren="开启" unCheckedChildren="关闭" checked={is_show} onChange={(e) => { set_is_show(e) }} />
            </div>
        </div>
        <div className='qa-item'>
            <div className='qa-label'>
                {anLabel}
            </div>
            <div className='qa-value'>
                <TextArea value={result} rows={4} placeholder="問題答案" style={{ marginRight: 20 }} onChange={changes_result} />
                {

                    index >= 0 ? <div style={{width:80}}>
                        <Button onClick={editSubmit}>保存</Button>
                        <Button onClick={()=>del(item)} style={{marginTop:10}}>删除</Button>
                    </div> : <Button onClick={createSubmit}>新建</Button>
                }
            </div>
        </div>

    </>;
}