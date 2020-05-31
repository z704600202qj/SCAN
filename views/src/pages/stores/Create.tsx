import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
const { Option } = Select;
import { server_type, server, facilitydetail } from '@/services/serviceMg'
interface Values {
    file_path: string;
    describe: string;
}

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}
import './index.less'
let type: any = { 1: '自助打印', 2: '人工打印', 3: '人工影印' }
const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    visible,
    onCreate,
    onCancel,
}) => {
    const [type_list, set_type_list] = useState([])
    const [server_list, set_server_list] = useState([])
    const [facility_list, set_facility_list] = useState([])

    useEffect(() => {
        server_type().then(({ data }) => {
            set_type_list(data)
        })
    }, [])
    const changeStid = async (stid: string) => {
        let { data } = await server({
            stid: stid
        })
        set_server_list(data)
    }
    const changeFids = async (sid: string) => {
        let select: any = server_list.filter((item: any) => {
            if (item.sid === Number(sid)) {
                return item
            }
        })
        let fids = select[0].fids
        let arr = fids.indexOf(',') > -1 ? fids.split(',') : [fids]
        let { data } = await facilitydetail({
            fid: arr
        })
        set_facility_list(data)
    }
    let arr = type_list.map((item: any) => <Option key={item.stid} value={item.stid} >{item.type_name}</Option>)
    let arr1 = server_list.map((item: any) => <Option key={item.sid} value={item.sid} >{item.server_name}</Option>)
    let arr2 = facility_list.map((item: any) => <Option key={item.fid} value={item.fid} >{item.title}</Option>)


    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="编辑商品"
            okText="保存"
            cancelText="取消"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
            }}
        >
            <Form
                form={form}
                name="form_in_modal"
                initialValues={{ modifier: 'public' }}
            >
                <Form.Item
                    label="服務類型"
                    name="stid">
                    <Select onChange={changeStid} >
                        {
                            arr
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    label="關聯服務"
                    name="sid"
                >
                    <Select onChange={changeFids} >
                        {arr1}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="關聯設備"
                    name="fids"
                >
                    <Select mode="multiple" >
                        {arr2}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CollectionCreateForm