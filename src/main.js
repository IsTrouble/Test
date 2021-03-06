// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import iView from 'iview';
import base64url from 'base64url';
import api from './api'
import moment from 'moment'
import _ from 'lodash'
import { format } from 'date-fns'
import "printthis";
// import vuescroll from 'vuescroll';
// import 'vuescroll/dist/vuescroll.css';
import VueResource from 'vue-resource';
import 'font-awesome/scss/font-awesome.scss';
import ElementUI from 'element-ui';
import './assets/variables.scss'
import echarts from 'echarts';
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'babel-polyfill';
import Icon from 'vue2-svg-icon/Icon.vue';
import './lib/jquery-vender.js';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import 'admin-lte';
// import 'admin-lte/dist/css/AdminLTE.min.css';
// import 'admin-lte/dist/css/skins/_all-skins.min.css';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import '@/assets/public.scss';    // 使用 CSS
import 'swiper/dist/css/swiper.css';
import VueI18n from 'vue-i18n';
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';
import app_zh from './language/zh-CN.json';
import app_en from './language/en-US.json';
import global from './global'

Vue.use(VueI18n);
Vue.prototype.global = global
Vue.component('icon', Icon);
Vue.component('v-chart', ECharts);
Vue.use(ElementUI, { size: 'small' });
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.config.productionTip = false;
Vue.use(iView).use(VueCookie);
Vue.use(iView,{
	i18n: (key, value) => i18n.t(key, value)
});

window.$cookie = VueCookie
window._ = _
window.moment = moment;
window.base64url = base64url;
window.format = (val, type) => val ? format(val, type) : null;

Vue.prototype.$api = api
Vue.prototype.$format = window.format
Vue.prototype.$echarts = echarts
router.beforeEach((to, from, next) => {
	// console.log(this.global.usernmae)
	if(to.name=='login'||to.name=='register'||window.localStorage.getItem("username")){
		next()
	}else {
		next({name:'login'})
	}
})
/* eslint-disable no-new */
Vue.locale = () => {};
const i18n = new VueI18n({
  locale: window.localStorage.getItem("language") || 'zh-CN',    // 语言标识
  messages: {
    'zh-CN': Object.assign(zh,app_zh),   // 中文语言包
    'en-US': Object.assign(en,app_en)    // 英文语言包
  },
})

new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
