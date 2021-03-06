export default [{
    path: '/',
    name: 'HelloWorld',
    component: resolve => require(['@/components/mobile/HelloWorld'], resolve),
    meta: {
        title: ''
    }
},{
    path: '/index',
    name: 'index',
    component: resolve => require(['@/components/mobile/views/index'], resolve),
    meta: {
        title: ''
    }
}]
