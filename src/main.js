import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import G6 from "@antv/g6";
import gsap from "gsap";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(G6);
Vue.use(axios);
Vue.use(gsap);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
