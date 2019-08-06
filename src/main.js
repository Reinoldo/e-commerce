import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("priceNumber", valor => {
  valor = Number(valor);
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
