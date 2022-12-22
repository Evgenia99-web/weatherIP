import {createApp} from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

// Vue.use(VueAxios, axios)
// Vue.use(router)
//
// new Vue({
//     render: h => h(App),
//     router,
//     axios
// }).$mount('#app')

createApp(App).use(store).use(router).mount('#app')
