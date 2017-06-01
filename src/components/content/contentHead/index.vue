<template>
	<div class="header-section">
		<div class="search">
			<form>
				<el-input icon="search" v-model="input2" :on-icon-click="handleIconClick" placeholder="搜索"></el-input>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input2: ''
			}
		},
		methods: {
			handleIconClick(ev) {
				console.log(ev);
			}
		}
	}
</script>

<style scoped>
	.header-section {
		position: fixed;
		top: 0;
		left: inherit;
		width: 100%;
		height: 50px;
		background-color: #fff;
		border-bottom: 1px solid #eff0f4;
		z-index: 100;
	}
	
	.search {
		margin: 6.5px 10px;
		float: left;
		width: 220px;
		height: 35px;
		font-size: 14px;
	}
</style>