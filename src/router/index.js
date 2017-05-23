import Vue from 'vue' /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import Home from '@/components/Home' /* 英文Home.vue模版，并赋值给变量Home,这里是“@”相当于“../” */
import left from '@/components/page/left/left.vue'
import content from '@/components/page/content/content.vue'
import login from '@/components/user/login/login.vue'
import register from '@/components/user/register/register.vue'
import toReset from '@/components/user/toreset/toReset.vue'
import index from '@/components/page/index/index.vue'
import basis from '@/components/page/basis/basis.vue'
import senior from '@/components/page/senior/senior.vue'

Vue.use(Router) /* 使用路由 */

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [ /* 进行路由配置，规定“/”引入到Home组件 */ {
		path: '/',
		redirect: '/index', //重定向
		name: 'home',
		component: Home,
		/* 注册Hello组件 */
		children: [{
				path: '/index',
				alias: '/', //别名
				component: index
			},
			{
				path: 'login',
				component: login
			},
			{
				path: 'register',
				component: register
			},
			{
				path: 'toReset',
				component: toReset
			},
			{
				path: 'basis',
				component: basis,
				children: [{
					path: '/content',
					component: content
				}]
			},
			{
				path: 'senior',
				component: senior
			}
		]
	}]
})