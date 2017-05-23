<template>
	<div>
		<el-alert title="脚踏实地，切勿好高骛远" type="warning" close-text="知道了"></el-alert>
		<iview-left :items="items"></iview-left>
		<router-view></router-view>
	</div>
</template>

<script>
	import left from '../../page/left/left.vue'
	import content from '../../page/content/content.vue'
	export default {
		data: function() {
			return {
				items:[]
			}
		},
		created:function(){
			this.getDataLeft();
		},
		components: {
			'iview-left': left
		},
		methods: {
			getDataLeft:function(){
				this.$http.get('/api/basis').then(data=>{
					console.log(data.body.data);
					this.items = data.body.data;
				});
			}
		}
	}
</script>

<style>

</style>