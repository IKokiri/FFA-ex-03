import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import UsersList from "./components/UsersList";
import UserDetail from "./components/UserDetail";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/users", component: UsersList },
    { path: "/users/:id", component: UserDetail, name: "userD" }
  ]
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
