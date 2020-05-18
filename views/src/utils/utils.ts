//utils.js /^((\+)?86|((\+)?86)?)0?1[1234567890]\d{9}$/
export const idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
export const phoneReg = /^((\+)?86|((\+)?86)?)0?1[1234567890]\d{9}$/;

export function checkStatus(response: any) {
  const status = response.status || -1000; // -1000 自己定义，连接错误的status
  if ((status >= 200 && status < 300) || status === 304) {
    // 如果http状态码正常，则直接返回数据
    return response.data;
  } else {
    let errorInfo = '';
    switch (status) {
      case -1:
        errorInfo = '远程服务响应失败,请稍后重试';
        break;
      case 400:
        errorInfo = '400：错误请求';
        break;
      case 401:
        errorInfo = '401：访问令牌无效或已过期';
        break;
      case 403:
        errorInfo = '403：拒绝访问';
        break;
      case 404:
        errorInfo = '404：资源不存在';
        break;
      case 405:
        errorInfo = '405：请求方法未允许'
        break;
      case 408:
        errorInfo = '408：请求超时'
        break;
      case 500:
        errorInfo = '500：访问服务失败';
        break;
      case 501:
        errorInfo = '501：未实现';
        break;
      case 502:
        errorInfo = '502：无效网关';
        break;
      case 503:
        errorInfo = '503：服务不可用'
        break;
      default:
        errorInfo = `连接错误`
    }
    return {
      status,
      msg: errorInfo
    }
  }
}
export const fmoney = function (s: string, n: number | undefined) {
  n = n > 0 && n <= 20 ? n : 2;
  s = `${parseFloat((`${s}`).replace(/[^\d\.-]/g, '')).toFixed(n)}`;
  const l = s.split('.')[0].split('').reverse(); const
    r = s.split('.')[1];
  let t = '';
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '');
  }
  return `${t.split('').reverse().join('')}.${r}`;
}
export const GetDateDiff = function (startTime: any, endTime: any, diffType: any) {
  // 将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
  startTime = startTime.replace(/\-/g, '/');
  endTime = endTime.replace(/\-/g, '/');

  // 将计算间隔类性字符转换为小写
  diffType = diffType.toLowerCase();
  const sTime = new Date(startTime); // 开始时间
  const eTime = new Date(endTime); // 结束时间
  // 作为除数的数字
  let divNum = 1;
  switch (diffType) {
    case 'second':
      divNum = 1000;
      break;
    case 'minute':
      divNum = 1000 * 60;
      break;
    case 'hour':
      divNum = 1000 * 3600;
      break;
    case 'day':
      divNum = 1000 * 3600 * 24;
      break;
    default:
      break;
  }
  // eslint-disable-next-line radix
  return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum));
}