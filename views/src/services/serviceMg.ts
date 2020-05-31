import request from '@/utils/request';

export async function facility(params?: any) {
  return request({
    url: '/facility',
    method: 'post',
    data: { ...params },
  });
}
export async function facilitycreate(params?: any) {
  return request({
    url: '/facility/create',
    method: 'post',
    ifHandleOk: true,
    data: { ...params },
  });
}
export async function facilitydetail(params?: any) {
  return request({
    url: '/facility/detail',
    method: 'post',
    data: { ...params },
  });
}
export async function facilitydel(params?: any) {
  return request({
    url: '/facility/del',
    method: 'post',
    ifHandleOk: true,

    data: { ...params },
  });
}
export async function facilityedit(params?: any) {
  return request({
    url: '/facility/edit',
    method: 'post',
    ifHandleOk: true,
    data: { ...params },
  });
}
export async function facility_device(params?: any) {
  return request({
    url: '/facility_device',
    method: 'post',
    data: { ...params },
  });
}
export async function facility_device_del(params?: any) {
  return request({
    url: '/facility_device/del',
    method: 'post',
    ifHandleOk: true,
    data: { ...params },
  });
}
export async function facility_device_edit(params?: any) {
  return request({
    url: '/facility_device/edit',
    method: 'post',
    ifHandleOk: true,
    data: { ...params },
  });
}

export async function facility_device_create(params?: any) {
  return request({
    url: '/facility_device/create',
    method: 'post',
    ifHandleOk: true,
    data: { ...params },
  });
}
export async function server(params?: any) {
  return request({
    url: '/server',
    method: 'post',
    data: { ...params },
  });
}
export async function serverList(params?: any) {
  return request({
    url: '/server/list',
    method: 'post',
    data: { ...params },
  });
}

export async function serverCreate(params?: any) {
  return request({
    url: '/server/create',
    method: 'post',
    ifHandleOk: true,
    data: { ...params },
  });
}
export async function serverDetail(params?: any) {
  return request({
    url: '/server/detail',
    method: 'post',
    data: { ...params },
  });
}
export async function serverDel(params?: any) {
  return request({
    url: '/server/del',
    method: 'post',
    ifHandleOk: true,
    data: { ...params },
  });
}
export async function serverEdit(params?: any) {
  return request({
    url: '/server/edit',
    method: 'post',
    ifHandleOk: true,
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
    ifHandleOk: true,
    data: { ...params },
  });
}
export async function server_type_del(params?: any) {
  return request({
    url: '/server_type/del',
    method: 'post',
    ifHandleOk: true,
    data: { ...params },
  });
}
export async function server_type_edit(params?: any) {
  return request({
    url: '/server_type/edit',
    method: 'post',
    ifHandleOk: true,
    data: { ...params },
  });
}
