import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi'

const goBack = () => {
  history.push('/login')
}
const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="对不起，您访问的页面不存在！"
    extra={
      <Button type="primary" onClick={() => goBack() }>
       返回登录页面
      </Button>
    }
  ></Result>
);

export default NoFoundPage;
