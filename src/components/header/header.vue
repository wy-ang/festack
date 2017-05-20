<template>
	<div class="header">
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-submenu index="1">
				<template slot="title">专业技能</template>
				<el-menu-item index="1-1">
					<router-link to="jcjn">基础技能</router-link>
				</el-menu-item>
				<el-menu-item index="1-2">
					<router-link to="jjjn">进阶技能</router-link>
				</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
			</el-submenu>
			<el-menu-item index="3">
				<router-link to="login">登录</router-link>
				<router-link to="register">注册</router-link>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>

</style>