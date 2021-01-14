import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

// constantRouterMap：主要是通用部分，每个用户都有的页面
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/ticket',
    children: [{
      path: 'ticket',
      name: '票务处理',
      component: () => import('@/views/ticket/index'),
      meta: { title: '票务处理', icon: 'dashboard' }
    }]
  },
  {
    path: '/query',
    component: Layout,
    redirect: '/query/table',
    name: '航班查询',
    meta: { title: '航班查询', icon: 'example' },
    children: [
      {
        path: 'domestic',
        name: '国内航班',
        component: () => import('@/views/domestic/index'),
        meta: { title: '国内航班', icon: 'table' }
      },
      {
        path: 'abroad',
        name: '国外航班',
        component: () => import('@/views/abroad/index'),
        meta: { title: '国外航班', icon: 'tree' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    name: 'order',
    meta: {
      title: '订单详情',
      icon: 'nested'
    },
    children: [
      {
        path: 'index',
        name: 'order',
        component: () => import('@/views/order/index'),
        meta: { title: '订单管理', icon: 'eye' }
      }
    ]
  },
  {
    path: '/personalCenter',
    component: Layout,
    redirect: '/personalCenter',
    children: [{
      path: 'personalCenter',
      name: '个人信息',
      component: () => import('@/views/personalCenter/index'),
      meta: { title: '个人信息', icon: 'nested' }
    }]
   },
  // {
  //   path: '/personalCenter',
  //   component: Layout,
  //   name: 'personalCenter',
  //   meta: {
  //     title: '个人信息',
  //     icon: 'nested'
  //   }
  // },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

// asyncRouterMap：需要进行权限过滤的页面
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'tree',
      roles: ['admin','editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
