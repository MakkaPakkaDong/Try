import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Swipe, SwipeItem, Popup } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Popup);

// createApp(App).mount('#app')

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
	router: router,
	store,
	render: h => h(App)
}).$mount('#app')
