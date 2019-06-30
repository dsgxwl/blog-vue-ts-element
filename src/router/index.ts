import Vue from 'vue'
import Router from 'vue-router'
// import demoRouterConfig from './demo'
Vue.use(Router)

let routes: any[] = []
// const routes: any[] = [ ...demoRouterConfig ]

const routerContext = require.context('./', true, /index\.ts$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.ts 不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  /**
   * 兼容 import export 何 require module.export 两种规范
   */
  routes = [ ...routes, ...(routerModule.default || routerModule) ]
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
