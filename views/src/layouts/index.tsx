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
  const { children } = props
  const [activeKey, setActiveKey] = useState('1')
  const [panes, setPanes] = useState<any[]>([])

  useEffect(() => {
    let arr: { key: string, title: string, path: string }[] = JSON.parse(JSON.stringify(panes))
    let route = routes[1].routes
    let data: any = arr.find((item: any) => {
      if (item.path === history.location.pathname) {
        setActiveKey(item.key)
        return item
      }
    }) || []
    if (data.length === 0) {
      route.filter((item: any) => {
        if (item.path === history.location.pathname) {
          arr.push(item)
          setActiveKey(item.key)
          setPanes(arr)
          return item
        }
      })
    }
  }, [history.location.pathname])
  const edits = (e: string | React.MouseEvent<HTMLElement, MouseEvent>) => {
    let lastIndex: number = 0;
    let active;
    if (panes.length === 1) {
      return
    }
    panes.forEach((pane, i) => {
      if (pane.key === e) {
        lastIndex = i - 1;
      }
    });

    let arr = panes.filter(pane => pane.key !== e);
    if (arr.length && e === activeKey) {
      if (lastIndex >= 0) {
        active = arr[lastIndex].key;
        history.replace(arr[lastIndex].path)
      } else {
        active = arr[0].key;
        history.replace(arr[0].path)
      }
    } else {
      active = arr[0].key;
      history.replace(arr[0].path)
    }
    setActiveKey(active)
    setPanes(arr)
  }
  const onChange = (e: string) => {
    panes.forEach((pane, i) => {
      if (pane.key === e) {
        setActiveKey(pane.key)
        history.replace(pane.path)
      }
    });
  }

  return (
    <div className='layout'>
      <div className='layout-header'>
        <div className='header-content'>
          <div className='header-logo'>
            <SketchOutlined />
          </div>
          <div className='header-right' >
            <Tabs
              onEdit={(e) => edits(e)}
              onChange={(e) => onChange(e)}
              activeKey={activeKey}
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
        {children }
    </div>
  );
}
export default connect(({ global }: { global: GlobalModelType }) => ({
  global
}))(Layout);