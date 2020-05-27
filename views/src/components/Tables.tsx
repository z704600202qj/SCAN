import React from 'react';
import { Table, Tag } from 'antd';

interface propsType {
    style?: any,
    columns: Array<object>,
    data: Array<object>,
    rowKey: string,
    list?: {
        totalNum:number,
        totalPage:number,
    },
    unpagination?: boolean,
    currentPage?: number,
    pageChange?: (e: any) => void,
}

export default (props: propsType) => {
    const { style, columns, data, rowKey, list, currentPage, pageChange, unpagination } = props
    return <div className='c-table' style={{ ...style }}>
        <Table locale={{
            emptyText: '暂无数据',
        }} pagination={!unpagination ? {
            simple: false,
            current: currentPage,
            total: list.totalNum,
            pageSize: 10,
            showTotal: count => {
                return `共 ${list.totalPage}页/${count} 条数据`;
            },
            onChange: pageChange,
        } : false}
            columns={columns} rowKey={rowKey} dataSource={data} />
    </div>;
}