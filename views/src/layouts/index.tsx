import React, { useState, useEffect } from 'react';
import { GlobalModelType, connect, Dispatch, history } from 'umi';
import { Tabs } from 'antd';
import { SketchOutlined } from '@ant-design/icons';
import routes from '../../config/routes'
import './index.less'
const { TabPane } = Tabs;
interface propsType {
  children: React.ReactNode;
  dispatch: Dispatch,
  global: GlobalModelType,
}

const Layout = (props: propsType) => {
  const [activeKey, setActiveKey] = useState()
  const [panes, setPanes] = useState<any[]>([])

  useEffect(() => {
    let arr: { key: string, title: string, path: string }[] = JSON.parse(JSON.stringify(panes))
    routes[0].routes.filter((item: any) => {
      if (item.path === history.location.pathname) {
        arr.push(item)
        setPanes(arr)
        return item
      }
    })
  }, [history.location.pathname])


  const { children } = props
  console.log(123, panes)

  return (
    <div className='layout'>
      <div className='layout-header'>
        <div className='header-content'>
          <div className='header-logo'>
            <SketchOutlined />
          </div>
          <div className='header-right' >
            <Tabs
              hideAdd
              type="editable-card"
            >
              {panes.map(pane => (
                <TabPane tab={pane.title} key={pane.key} />

              ))}
            </Tabs>
          </div>
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
export default connect(({ global }: { global: GlobalModelType }) => ({
  global
}))(Layout);