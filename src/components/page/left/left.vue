<template>
	<el-col :span="2">
		<div class="left">
			<el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened="true">
				<el-submenu :index="index" v-for="(item,index) in items">
					<template slot="title">{{item.parentName}}</template>
					<el-menu-item :index="index" v-for="(item,index) in item.majorList">
						<router-link to="/content">{{item.name}}</router-link>
					</el-menu-item>
				</el-submenu>
			</el-menu>
		</div>
	</el-col>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'second'
			};
		},
		props: ['items'],
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>

<style>
</style>