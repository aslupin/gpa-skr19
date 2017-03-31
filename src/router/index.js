  /* eslint-disable */
  import Vue from 'vue'
  import Router from 'vue-router'
  import appInput from '@/components/appInput'
  Vue.use(Router)

  export default new Router({
      routes: [{
          path: '/',
          name: 'appInput',
          component: appInput
      }]
  })