<template>
	<div>
		<div class="panel-title">基本技能</div>
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
					label: '数据类型',
					children: [{
						label: '基本类型'
					}, {
						label: '引用类型'
					}]
				}, {
					label: '表达式',
					children: [{
						label: '算术表达式'
					},{
						label: '关系表达式'
					},{
						label: '逻辑表达式'
					}]
				}, {
					label: '控制语句',
					children: [{
						label: '循环语句'
					}, {
						label: '条件语句'
					}]
				}, {
					label: '对象',
					children: [{
						label: '类型'
					}, {
						label: '属性'
					}, {
						label: '模式'
					}, {
						label: '继承'
					}]
				}, {
					label: '函数',
					children: [{
						label: 'this'
					}, {
						label: '闭包'
					}, {
						label: '递归'
					}, {
						label: '作用域链'
					}, {
						label: '私有变量'
					}, {
						label: '参数'
					}]
				}, {
					label: '操作',
					children: [{
						label: '字符串操作'
					}, {
						label: '数组操作'
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