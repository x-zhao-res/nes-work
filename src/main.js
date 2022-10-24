import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import G6 from "@antv/g6";
import axios from "axios";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
Vue.use(G6);
Vue.use(axios);
