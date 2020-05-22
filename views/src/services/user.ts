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