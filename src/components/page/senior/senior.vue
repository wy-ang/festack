<template>
	<div>
		<el-alert title="你离神只差一步" type="warning" close-text="知道了"></el-alert>
		<iview-content></iview-content>
	</div>
</template>

<script>
	import content from '../../page/content/content.vue'
	export default{
		components:{
			'iview-content':content
		}
	}
</script>

<style>
</style>