<template>
	<div class="home">
		<iview-header></iview-header>
		<router-view></router-view>
	</div>
</template>
<script>
	import Header from './page/header/header.vue'
	export default {
		name: 'home',
		/* 这个name暂时不知道用啥用，根据官方文档说的是方便排错的 */
		components: {
			'iview-header': Header
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*  scoped的意思是这里的样式只对当前页面有效不会影响其他页面，还有可以设置lang="scss"就是支持css预编译，也就是支持sass或者less  */
</style>