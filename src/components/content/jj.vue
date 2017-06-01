<template>
	<div>
		<div class="panel-title">进阶技能</div>
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
						label: '性能优化',
						children: [{
							label: '基础认知'
						}, {
							label: '网络环境'
						}, {
							label: '加载顺序'
						}, {
							label: '本地存储'
						}, {
							label: 'DNS'
						}, {
							label: 'SDK'
						}]
					}, {
						label: '自动化构建工具',
						children: [{
							label: 'gulp'
						}, {
							label: 'webpack'
						}]
					}, {
						label: 'mvvm框架',
						children: [{
							label: 'vue'
						}, {
							label: 'react'
						}, {
							label: 'angular'
						}]
					}, {
						label: 'UI框架',
						children: [{
							label: 'bootstrap'
						}, {
							label: 'elementUI'
						}, {
							label: 'iviewUI'
						}, {
							label: 'weUI'
						}]
					}, {
						label: 'http协议',
						children: [{
							label: 'http基础'
						}, {
							label: 'http方法'
						}, {
							label: 'code码'
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