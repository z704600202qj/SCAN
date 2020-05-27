import request from '@/utils/request';

export async function facility(params?: any) {
  return request({
    url: '/facility',
    method: 'get',
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
