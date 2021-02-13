import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

// createApp(App).mount('#app')

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app')
