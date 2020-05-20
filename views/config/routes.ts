let arr = [

    {
        path: '/',
        component: 'index',
        routes: [
            { path: '/', component: 'order', title: '订单列表' , parent: 'sub1' ,key:'1'},
            { path: '/order', component: 'order', title: '订单列表' , parent: 'sub1' ,key:'1'},
            { path: '/orderDetails', component: 'order/details', title: '订单详情', parent: 'sub1' },

            { path: '/merchants', component: 'merchants', title: '商戶管理', key:'17', parent: '' },
            { path: '/merchantsDetails', component: 'merchants/details', title: '商戶详情', key:'17', parent: '' },

            { path: '/stores', component: 'stores', title: '門店管理', key:'17', parent: '' },
            { path: '/storesDetails', component: 'stores/details', title: '門店詳情', key:'17', parent: '' },

            { path: '/goodsList', component: 'goods/goodsList', title: '商品列表', key:'17', parent: '' },
            { path: '/goodsListDetail', component: 'goods/goodsList/detail', title: '商品列表', key:'17', parent: '' },

            { path: '/typeList', component: 'goods/goodsType', title: '商品類型', key:'17', parent: '' },
            { path: '/typeDetail', component: 'goods/goodsType/detail', title: '商品類型', key:'17', parent: '' },
            { path: '/paramList', component: 'goods/param', title: '參數管理', key:'17', parent: '' },
            { path: '/paramDetail', component: 'goods/param/detail', title: '參數詳情', key:'17', parent: '' },

            { path: '/userList', component: 'userList', title: '用戶管理', key:'17', parent: '' },
            { path: '/userDetail', component: 'userList/detail', title: '用戶詳情', key:'17', parent: '' },
            { path: '/administrator', component: 'administrator', title: '管理員設置', key:'17', parent: '' },
            { component: '404' },
        ],
    },


]
export default arr