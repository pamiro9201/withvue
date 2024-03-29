import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HelloWorld from "@/components/HelloWorld.vue";
//import navBar from "./views/layout/navBar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
  router,
  store,
  HelloWorld,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
