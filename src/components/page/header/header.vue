<template>
	<div class="header">
		<div class="em-row">
			<div class="em-col">
				<div class="head-l">
					<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
						<el-menu-item index="0">
								<router-link to="/">首页</router-link>
						</el-menu-item>
						<el-submenu index="1">
							<template slot="title">专业技能</template>
							<el-menu-item index="1-1">
								<router-link to="basis">基础技能</router-link>
							</el-menu-item>
							<el-menu-item index="1-2">
								<router-link to="senior">进阶技能</router-link>
							</el-menu-item>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title">周边技能</template>
							<el-menu-item index="2-1">网络知识</el-menu-item>
							<el-menu-item index="2-2">性能优化</el-menu-item>
						</el-submenu>
					</el-menu>
				</div>
			</div>
			<div class="em-col">
				<div class="head-r">
					<router-link to="login">登录</router-link>
					<router-link to="register">注册</router-link>
				</div>
			</div>
		</div>
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

<style scoped="scoped">
	a{
		color: #bfcbd9;
		text-decoration: none;
	}
	.header {
		height: 60px;
		background-color: #324157;
	}
	
	.head-l {
		float: left;
	}
	
	.head-r {
		float: right;
	}
	
	.head-r a {
		display: inline-block;
		padding: 0 20px;
		height: 60px;
		line-height: 60px;
		color: #bfcbd9;
	}
</style>