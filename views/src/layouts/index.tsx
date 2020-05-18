import React, { useState, useEffect } from 'react';
import Icon from '@ant-design/icons';
import { GlobalModelType, connect, Dispatch, history } from 'umi';
import { Row, Col, Button } from 'antd';


interface propsType {
  children: React.ReactNode;
  dispatch: Dispatch,
  global: GlobalModelType,
}

const Layout = (props: propsType) => {

  const logout = () => {
    localStorage.removeItem('userInfo')
    history.push('/login')
  }
  const { children  } = props
  return (
    <div className='layout'>
      <div className='layout-header'>
        <div className='header-content'>
          {/* <Icon component={Logo} className='logo' /> */}
          {
           <div style={{ marginRight: 20 }}>
              你好 
              <Button type="link" onClick={() => { history.push('/wallet') }}>充值</Button>
              <Button type="link" onClick={() => logout()}>退出登录</Button>
            </div>
          }
        </div>
      </div>
      <div  >
       {
         children
       }
      </div>
  

    </div>
  );
}
export default connect(({ global }: {  global: GlobalModelType }) => ({
  global
}))(Layout);