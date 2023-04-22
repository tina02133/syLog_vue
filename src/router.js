import { createWebHistory, createRouter } from "vue-router";
import MyList from './components/MyList.vue'
import MyHome from './components/MyHome.vue'
import MyDetail from './components/MyDetail.vue'
const routes = [
  {
    path: "/list",
    component: MyList,
  },
  {
    path : "/",
    component : MyHome,
  },
  {
    // /detail/아무문자나 들어오면 이라는 뜻
    // 숫자만 들어오도록 하는 정규식
    path : '/detail/:id(\\d+)',
    component : MyDetail,
  },
  {
    // 404페이지도 이런식으로 설정할 수 있음
    path : '/:asfddfasdf',
    component : MyHome,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 