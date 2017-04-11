import Vue from "vue";
import app from "./components/app";

Vue.config.debug = true
window.app = new Vue(app)