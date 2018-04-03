import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import my from '@/components/my'
import nofound from '@/components/404'
import work from '@/views/work'
import study from '@/views/study'
import hobby from '@/views/hobby'
import slider from '@/views/slider'
import user from '@/components/user'
Vue.use(Router)
let router = new Router({
  mode: 'history',
  linkActiveClass: "actived",
  scrollBehavior(to, from, savePosition) { //点击浏览器的前进后退或切换导航触发
    // //要进入的目标路由对象 去那脸
    // console.log(from) //离开的目标路由对象 从哪里来
    // console.log(savePosition) //记录滚动条的坐标 点击前进后退的时候记录值
    /*
    if (savePosition) {
      return savePosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
    */
    // 利用哈希值判断
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [{
      path: '/',
      component: home,
      meta: {
        index: 1,
        login: true,
        title: '首页'
      },
      beforeEnter(to,from,next) {
        console.log('执行了');
        next();
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: home
    },
    {
      path: '/about',
      name: 'About',
      // 两个并排
      components: {
        default: about,
        slider: slider
      },
      meta: {
        index: 2,
        login: true,
        title: '关于'
      }
    },
    {
      path: '/my',
      component: my,
      // 如果有子路由的话就不要name的属性 将name 属性给children下的默认子路由
      children: [{
          // 默认的子路由
          path: '',
          component: work,
          name: 'My',
          meta: {
            index: 3,
            login: false,
            title: '我的'
          }
        },
        {
          path: 'study',
          component: study,
          name: 'Study',
        },
        {
          path: 'hobby',
          component: hobby,
          name: 'Hobby',
        },
      ]
    },
    {
      path: "/user/:type?/:userId?",
      component: user,
      meta: {
        index: 4,
        login: true,
        title: 'user'
      }
    },
    {
      path: '*',
      // component: nofound
      // 重定向 可以为字符串
      // redirect:'/home'
      // 重定向 也可以为对象
      // redirect: {
      //   path: '/home'
      // }
      // 重定向 也可以为对象（用name）
      // redirect: {
      //   name: "Home"
      // }
      //动态设置 目标路由对象 就是访问的路径的路由信息
      redirect: (to) => {
        console.log(to.path)
        if (to.path == '/123') {
          return '/my'
        } else if (to.path == '/456') {
          return '/about'
        } else {
          return '/home'
        }
      }
    }
  ]
})
// 全局的钩子函数 route全局 进入前
/*
router.beforeEach((to, from, next) => {
  // 执行一下才会走 next(false) 取消导航
  next();
  console.log(123);
  // 判断 重定向
  if (to.meta.login) {
    next();
  } else {
    next('./');
  }
})
*/
// 改变title 进入后 因为进入了就不用考虑next了 所以只需要传入两个参数即可
/*
router.beforeEach((to, from) => {
  if (to.meta.title) {
    window.document.title = to.meta.title;
  } else {
    window.document.title = '悦高软件';
  }
})
*/
export default router;
