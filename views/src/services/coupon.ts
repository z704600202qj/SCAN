import request from '@/utils/request';

export async function couponCreate(params?: any) {
  return request({
    url: '/coupon/create',
    method: 'post',
    ifHandleOk:true,
    data: { ...params },
  });
}
export async function couponList(params?: any) {
    return request({
      url: '/coupon',
      method: 'post',
      data: { ...params },
    });
  }
  export async function couponDetail(params?: any) {
    return request({
      url: '/coupon/detail',
      method: 'post',
      data: { ...params },
    });
  }

  export async function couponEdit(params?: any) {
    return request({
      url: '/coupon/edit',
      method: 'post',
      ifHandleOk:true,
      data: { ...params },
    });
  }
  export async function couponDel(params?: any) {
    return request({
      url: '/coupon/del',
      method: 'post',
      ifHandleOk:true,
      data: { ...params },
    });
  }