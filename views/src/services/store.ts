import request from '@/utils/request';

export async function brandCreate(params: any) {
    return request({
        url: '/brand/create',
        method: 'post',
        ifHandleOk: true,
        data: { ...params },
    });
}
export async function brandShopCreate(params: any) {
    return request({
        url: '/brand_shop/create',
        method: 'post',
        ifHandleOk: true,
        data: { ...params },
    });
}
export async function brandShopList(params: any) {
    return request({
        url: '/brand_shop',
        method: 'post',
        data: { ...params },
    });
}


export async function brandList(params: any) {
    return request({
        url: '/brand',
        method: 'post',
        data: { ...params },
    });
}
export async function brandDesc(params: any) {
    return request({
        url: '/brand/detail',
        method: 'post',
        data: { ...params },
    });
}
export async function brandEdit(params: any) {
    return request({
        url: '/brand/edit',
        method: 'post',
        ifHandleOk: true,
        data: { ...params },
    });
}
export async function brandStatus(params: any) {
    return request({
        url: '/brand/status',
        method: 'post',
        ifHandleOk: true,
        data: { ...params },
    });
}
