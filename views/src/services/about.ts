import request from '@/utils/request';

export async function help(params?: any) {
    return request({
        url: '/help',
        method: 'post',
        data: { ...params },
    });
}
export async function helpcreate(params?: any) {
    return request({
        url: '/help/create',
        method: 'post',
        ifHandleOk: true,
        data: { ...params },
    });
}
export async function helpedit(params?: any) {
    return request({
        url: '/help/edit',
        method: 'post',
        ifHandleOk: true,
        data: { ...params },
    });
}
export async function helpdel(params?: any) {
    return request({
        url: '/help/del',
        method: 'post',
        ifHandleOk: true,
        data: { ...params },
    });
}
export async function createabout(params?: any) {
    return request({
        url: '/help/createabout',
        method: 'post',
        ifHandleOk: true,
        data: { ...params },
    });
}
export async function aboutList(params?: any) {
    return request({
        url: '/help/about',
        method: 'post',
        data: { ...params },
    });
}
export async function editabout(params?: any) {
    return request({
        url: '/help/editabout',
        method: 'post',
        ifHandleOk: true,
        data: { ...params },
    });
}

