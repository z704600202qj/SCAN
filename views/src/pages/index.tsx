import React, { Component } from 'react';
import { StateModelStates, ConnectProps, history, connect, Dispatch } from 'umi';
import Layout from '@/layouts'
import Menus from '@/components/Menus'

import './index.less'
interface PageProps extends ConnectProps {
  loading: boolean;
  dispatch: Dispatch
}

class IndexPage extends Component<PageProps> {

  constructor(props: Readonly<PageProps>) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
  }

  render() {
    return <Layout >
      <div className='layout-warp'>
        <div className='layout-menu'><Menus /> </div>
        <div className='layout-content'>
          {this.props.children}
        </div>
      </div>
    </Layout>
  }


}

export default connect(({ global }: { global: StateModelStates }) => ({
  global,
}))(IndexPage);

