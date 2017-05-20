import Vue from 'vue' /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import Home from '@/components/Home' /* 英文Hello.vue模版，并赋值给变量Hello,这里是“@”相当于“../” */
import content from '@/components/content/content.vue'
import login from '@/components/login/login.vue'
import register from '@/components/register/register.vue'
import toReset from '@/components/toreset/toReset.vue'



Vue.use(Router) /* 使用路由 */

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [ /* 进行路由配置，规定“/”引入到Hello组件 */ 
		{
			path: '/',
			name:'home',
			component: Home, /* 注册Hello组件 */
			children:[
				{
					path:'jcjn',
					component:content	
				},
				{
					path:'jjjn',
					component:content	
				},
				{
					path:'login',
					component:login
				},
				{
					path:'register',
					component:register	
				},
				{
					path:'toReset',
					component:toReset	
				}
			]
		}
	]
})