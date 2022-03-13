import Vue from 'vue'
import App from './App.vue'
import TableList from '../packages/index'
Vue.use(TableList)

Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
