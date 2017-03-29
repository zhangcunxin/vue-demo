import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import Once from "@/components/Once";
import Html from "@/components/Html";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/v-once',
      name: 'Once',
      component: Once
    },
    {
      path: '/html',
      name: 'Html',
      component: Html
    }
  ]
})
