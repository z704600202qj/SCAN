interface types {
    path: string,
    component: string,
    title: string,
    key: string,
    parent?: string,
    routes?: any[],
}
let arr = [
    { path: '/login', component: 'login', title: '管理後台', key: '17', parent: '' },

    {
        path: '/',
        component: 'index',
        routes: [
            { path: '/', component: 'order', title: '订单列表', parent: 'sub1', key: '1' },
            { path: '/order', component: 'order', title: '订单列表', parent: 'sub1', key: '1' },
            { path: '/orderDetails', component: 'order/details', title: '订单详情', parent: 'sub1', key: '1-1' },

            { path: '/merchants', component: 'merchants', title: '商戶管理', key: '2', parent: 'sub2' },
            { path: '/merchantsDetails', component: 'merchants/details', title: '商戶详情', key: '2-1', parent: 'sub2' },

            { path: '/stores', component: 'stores', title: '門店管理', key: '3', parent: 'sub2' },
            { path: '/storesDetails', component: 'stores/details', title: '門店詳情', key: '3-1', parent: 'sub2' },

            { path: '/goodsList', component: 'goods/goodsList', title: '商品列表', key: '4', parent: 'sub3' },
            { path: '/goodsListDetail', component: 'goods/goodsList/detail', title: '商品详情', key: '4-1', parent: 'sub3' },
            { path: '/typeList', component: 'goods/goodsType', title: '服务類型', key: '5', parent: 'sub3' },
            { path: '/typeDetail', component: 'goods/goodsType/detail', title: '服务類型', key: '5-1', parent: 'sub3' },
            { path: '/paramList', component: 'goods/param', title: '設備管理', key: '6', parent: 'sub3' },
            { path: '/paramDetail', component: 'goods/param/detail', title: '設備詳情', key: '6-1', parent: 'sub3' },

            { path: '/coupons', component: 'coupons', title: '優惠券設置', key: '7', parent: '' },
            { path: '/couponsDetail', component: 'coupons/detail', title: '優惠券設置', key: '7-1', parent: '' },

            { path: '/adMg', component: 'operation/adMg/detail', title: '廣告詳情管理', key: '8', parent: 'sub4' },
            { path: '/notice', component: 'operation/notice', title: '公告管理', key: '9', parent: 'sub4' },
            { path: '/noticeDetail', component: 'operation/notice/create', title: '新建公告', key: '9-1', parent: 'sub4' },

            { path: '/qa', component: 'operation/adMg/qa', title: '運營管理設置', key: '11', parent: 'sub4' },
            // { path: '/price', component: 'operation/price', title: '價格設置', key: '10', parent: 'sub4' },
            // { path: '/priceDetail', component: 'operation/price/details', title: '价格詳情', key: '11-1', parent: 'sub4' },

            { path: '/userList', component: 'userList', title: '用戶管理', key: '12', parent: '' },
            { path: '/userDetail', component: 'userList/detail', title: '用戶詳情', key: '12-1', parent: '' },
            { path: '/administrator', component: 'administrator', title: '管理員設置', key: '13', parent: '' },
            { component: '404', title: '404', key: '' },
        ],
    },


]
export default arr