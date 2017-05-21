<template>
	<div>
		<el-alert title="脚踏实地，切勿好高骛远" type="warning" close-text="知道了"></el-alert>
		<iview-content></iview-content>
	</div>
</template>

<script>
	import content from '../../page/content/content.vue'
	export default{
		data:function(){
			return {
				//items:[]
			}
		},
		components:{
			'iview-content':content
		},
		methods:{
			/*getDataLeft:function(){
				this.$http.get('/api/menu').then(res=>{
					this.items = res.body.data;
				});
			}*/
		}
	}
</script>

<style>
</style>