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
export async function brand_shop_goods(params?: any) {
  return request({
    url: '/brand_shop_goods',
    method: 'post',
    data: { ...params },
  });
}export async function brand_shop_goodsCreate(params?: any) {
  return request({
    url: '/brand_shop_goods/create',
    method: 'post',
    data: { ...params },
  });
}