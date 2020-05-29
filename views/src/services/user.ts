import request from '@/utils/request';

export async function login(params: any) {
  return request({
    url: '/admin/login',
    method: 'post',
    isUserId:false,
    data: { ...params },
  });
}
export async function string(params: any) {
  return request({
    url: '/string',
    method: 'get',
    isUserId:false,
    data: { ...params },
  });
}
export async function user(params: any) {
  return request({
    url: '/user',
    method: 'post',
    data: { ...params },
  });
}
export async function adminedit(params: any) {
  return request({
    url: '/admin/edit',
    method: 'post',
    ifHandleOk:true,
    data: { ...params },
  });
}
export async function admin(params?: any) {
  return request({
    url: '/admin',
    method: 'post',
    data: { ...params },
  });
}