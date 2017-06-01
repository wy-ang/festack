<template>
	<div class="home">
		<iview-menu></iview-menu>
		<div class="main-content">
			<el-row>
				<el-col :span="24">
					<div class="content">
						<content-head></content-head>
						<div class="wrap">
							<div class="panel">
								<router-view></router-view>
							</div>
						</div>
						<content-foot></content-foot>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	import iviewMenu from './menu/menu.vue'
	import contentHead from './content/contentHead'
	import contentFoot from './content/contentFoot'
	
	export default {
		//		name: 'home',
		/* 这个name暂时不知道用啥用，根据官方文档说的是方便排错的 */
		components: {
			iviewMenu,
			contentHead,
			contentFoot
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	/*  scoped的意思是这里的样式只对当前页面有效不会影响其他页面，还有可以设置lang="scss"就是支持css预编译，也就是支持sass或者less  */
	
	body,
	dl,
	dd,
	ul,
	ol,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	fieldset,
	legend,
	input,
	button,
	textarea,
	p {
		margin: 0;
		padding: 0;
	}
	
	a {
		color: #bfcbd9;
		text-decoration: none;
	}
	body,html{
	    height: 100%;
    	background-color: #eff0f4;
	}
	.main-content {
		position: relative;
		margin-left: 220px;
		padding-top: 50px;
		overflow: hidden;
	}
	
	.main-content .wrap {
		padding: 15px
	}
	
	.main-content .panel {
		margin-bottom: 20px;
		background-color: #fff;
		border-radius: 4px;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .05)
	}
	
	.main-content .panel .panel-title {
		padding: 0 15px;
		color: #535351;
		height: 45px;
		line-height: 45px;
		font-size: 14px;
		font-weight: 700;
		text-transform: uppercase;
		border-bottom: 1px dotted rgba(0, 0, 0, .2)
	}
	
	.main-content .panel .panel-body {
		padding: 15px;
		overflow: hidden;
		font-weight: 400
	}
	
	.footer {
		background: #fff;
		padding: 15px;
		color: #7a7676;
		font-size: 12px;
		position: static;
		bottom: 0;
		width: 100%;
		border-top: 1px solid #eff0f4
	}
</style>