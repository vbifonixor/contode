import Vue from 'vue';
import Router from 'vue-router';

// const Foo = resolve => require(['../views/hello.vue'], resolve);
// import hello from '../views/hello.vue';

import main from '../views/main.vue';
import scanner from '../views/scan.vue';
import contact from '../views/contact.vue';
import my from '../views/my.vue';
import edit from '../views/edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'home', path: '/', component: main },
    { name: 'scanner', path: '/scan', component: scanner },
    { name: 'contact', path: '/contact', component: contact },
    { name: 'my', path: '/my', component: my },
    { name: 'edit', path: '/edit', component: edit },
  ],
});
