<template>
	<div class="content">
		<el-row>
			<el-col :span="2">
				<el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened="true">
					<el-submenu :index="index"  v-for="(item,index) in items">
						<template slot="title">{{item.parentName}}</template>
						<el-menu-item :index="index" v-for="(item,index) in item.majorList">{{item.name}}</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="22">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
					<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
					<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
					<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
				</el-tabs>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'second',
				items:[]
			};
		},
		created:function(){
			this.getDataLeft();
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			getDataLeft:function(){
				this.$http.get('/api/left').then(data=>{
					console.log(data.body.data);
					this.items = data.body.data;
				});
			}
		}
	}
</script>

<style>
	.festack {
		padding-top: 250px;
		text-align: center;
		font-size: 50px;
		color: #666;
	}
</style>