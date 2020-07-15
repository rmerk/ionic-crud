import Ionic, { IonicVueRouter } from '@ionic/vue';
import Vue from 'vue';
import App from './App.vue';
import store from './store';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/]

Vue.use(Ionic);
Vue.use(IonicVueRouter);

const router = new IonicVueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName: 'home' */ '@/components/HomePage'),
        },
        {
            path: '/new-item',
            name: 'new-item',
            component: () => import(/* webpackChunkName: 'new-item' */ '@/components/NewItemPage'),
        },
    ],
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
