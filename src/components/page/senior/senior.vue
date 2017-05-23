<template>
	<div>
		<el-alert title="你离神只差一步" type="warning" close-text="知道了"></el-alert>
		<iview-left :items="items"></iview-left>
		<router-view></router-view>
	</div>
</template>

<script>
	import left from '../../page/left/left.vue'
	export default{
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
				this.$http.get('/api/senior').then(data=>{
					console.log(data.body.data);
					this.items = data.body.data;
				});
			}
		}
	}
</script>

<style>
</style>