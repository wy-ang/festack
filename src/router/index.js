import Vue from 'vue' /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import Home from '@/components/Home.vue' /* 英文Home.vue模版，并赋值给变量Home,这里是“@”相当于“../” */
import Content from '@/components/content/index.vue'
import Jj from '@/components/content/jj.vue'
import Zb from '@/components/content/zb.vue'
/*import login from '@/components/user/login/login.vue'
import register from '@/components/user/register/register.vue'
import toReset from '@/components/user/toreset/toReset.vue'*/

Vue.use(Router) /* 使用路由 */

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [ /* 进行路由配置，规定“/”引入到Home组件 */ 
		{
			path: '/',
			redirect: '/home', //重定向
		},
		{
			path: '/home',
			component: Home,
			children:[
				{
					path: 'basics',
					component:Content
				},
				{
					path: 'advanced',
					component:Jj
				},
				{
					path: 'periphery',
					component:Zb
				}
			]
		}
	]
})