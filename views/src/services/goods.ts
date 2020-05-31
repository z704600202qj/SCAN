import request from '@/utils/request';

export async function goodsList(params?: any) {
    return request({
      url: '/goods',
      method: 'post',
      data: { ...params },
    });
  }
export async function goodsCreate(params?: any) {
  return request({
    url: '/goods/create',
    method: 'post',
    ifHandleOk:true,
    data: { ...params },
  });
}