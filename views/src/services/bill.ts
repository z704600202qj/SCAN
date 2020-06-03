import request from '@/utils/request';

export async function userTemplateList(params?: any) {
    return request({
        url: '/user_template/list',
        method: 'post',
        data: { ...params },
    });
}