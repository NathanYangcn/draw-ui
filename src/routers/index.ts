import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc}
  ]
})

// 相关知识：导出/导入
export { router }
