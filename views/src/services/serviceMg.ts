import request from '@/utils/request';

export async function facility(params?: any) {
  return request({
    url: '/facility',
    method: 'get',
    data: { ...params },
  });
}
export async function server_type(params?: any) {
  return request({
    url: '/server_type',
    method: 'get',
    data: { ...params },
  });
}
export async function server_type_create(params?: any) {
  return request({
    url: '/server_type/create',
    method: 'post',
    data: { ...params },
  });
}