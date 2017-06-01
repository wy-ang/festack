<template>
	<div class="menu-side">
		<!--<el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened="true" theme="dark">
			<el-submenu :index="index" v-for="(item,index) in items">
				<template slot="title">{{item.parentName}}</template>
				<el-menu-item :index="index" v-for="(item,index) in item.majorList">
					<router-link to="/home/content">{{item.name}}</router-link>
				</el-menu-item>
			</el-submenu>
		</el-menu>-->
		<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
			<el-menu-item index="1">
				<router-link to="/home/basics">基础技能</router-link>
			</el-menu-item>
			<el-menu-item index="2">
				<router-link to="/home/advanced">进阶技能</router-link>
			</el-menu-item>
			<el-menu-item index="3">
				<router-link to="/home/periphery">其他技能</router-link>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				items: []
			}
		},
		created: function() {
			this.getDataLeft();
		},
		methods: {
			getDataLeft: function() {
				this.$http.get('/api/basis').then(data => {
					console.log(data.body.data);
					this.items = data.body.data;
				});
			}
		}
	}
</script>

<style scoped>
	.menu-side {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 220px;
		height: 100%;
		overflow-y: auto;
		background-color: #424f63
	}
</style>