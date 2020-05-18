import request from '@/utils/request';

export async function login(params: any) {
  return request({
    url: '/user/doLogin',
    method: 'post',
    isUserId:false,
    data: { ...params },
  });
}