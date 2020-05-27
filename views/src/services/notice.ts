import request from '@/utils/request';

export async function noticeCreate(params?: any) {
  return request({
    url: '/notice/create',
    method: 'post',
    ifHandleOk:true,
    data: { ...params },
  });
}
export async function noticeList(params?: any) {
    return request({
      url: '/notice',
      method: 'post',
      data: { ...params },
    });
  }
  export async function noticeDel(params?: any) {
    return request({
      url: '/notice/del',
      method: 'post',
      data: { ...params },
    });
  }
  export async function noticeDetail(params?: any) {
    return request({
      url: '/notice/detail',
      method: 'post',
      data: { ...params },
    });
  }
  export async function noticeEdit(params?: any) {
    return request({
      url: '/notice/edit',
      method: 'post',
      data: { ...params },
    });
  }
  