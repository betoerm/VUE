import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import UsersRoute from "./components/UsersRoute";
import UserDetail from "./components/UserDetail";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/user",
      component: UsersRoute
    },
    {
      path: "/user/:id",
      component: UserDetail
    }
  ]
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
