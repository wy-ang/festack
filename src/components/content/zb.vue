<template>
	<div>
		<div class="panel-title">其他技能</div>
		<div class="panel-body">
			<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
					label: '设计模式',
					children: [{
						label: '工厂模式'
					}, {
						label: '单体模式'
					}, {
						label: '代理模式'
					}, {
						label: '模版模式'
					}, {
						label: '策略模式'
					}, {
						label: '适配器模式'
					}, {
						label: '观察者模式'
					}, {
						label: '组合模式'
					}]
				}, {
					label: '后端语言',
					children: [{
						label: 'node'
					},{
						label: 'java'
					},{
						label: 'php'
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			}
		}
	};
</script>

<style>

</style>