import Vue from "vue";
import App from "./components/app";

Vue.config.debug = true

new Vue({
    ...App,
    el: '#app'
})
