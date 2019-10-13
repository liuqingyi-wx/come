import Vue from 'vue'
import router from '@/router'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Order from '@/components/Order'
import {store} from '@/store/store'
var stk = store;
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Order',
      name: 'Order',
   
      meta: {
        keepAlive : false,
        requireAuth: true
       },
      component: Order
    }
  ]
},

)

router.beforeEach((to,from,next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (stk.state.cks == "true") {  // 通过vuex state获取当前的token是否存在
        next();
    }
    else {
      alert("未登录")
        next({
            path: '/',
        })
    }
}
else {
    next();
}
})


