import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./firebase.js";
import "./assets/scss/app.scss";

Vue.config.productionTip = false;

let app; // Define the variable
auth.onAuthStateChanged((user) => {
  // Set firebase auth to check if user is signed in
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }

  if (user) {
    store.dispatch("fetchUserProfile", user); // dispatch an action on a page reload if a user is logged in
  }
});
