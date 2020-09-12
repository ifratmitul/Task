import { Meteor } from "meteor/meteor";
import Vue from "vue";
import VueMeteorTracker from "vue-meteor-tracker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "../imports/router/index";

Vue.use(VueMeteorTracker);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import App from "../imports/ui/App.vue";
Vue.config.productionTip = false;
Meteor.startup(() => {
  new Vue({
    el: "#app",
    router,
    ...App,
  });
});
