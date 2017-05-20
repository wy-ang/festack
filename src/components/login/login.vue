<template>
	<div class="login">
		<el-row>
			<el-col :span="4" :offset="10">
				<el-form label-width="100px" class="demo-ruleForm">
					<el-form-item label="" prop="pass">
						<el-input type="text" placeholder="请输入手机号或邮箱" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="" prop="checkPass">
						<el-input type="password" placeholder="请输入密码" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary">登录</el-button>
					</el-form-item>
					<el-form-item label="" prop="type" class="to-reset">
						还没有帐号？<router-link to="register" class="register">去注册</router-link>
						<router-link to="toReset">忘记密码?</router-link>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style scoped>
	.login{
		padding-top: 50px;
	}
	.el-button{
		width: 218px;
	}
	.to-reset{
		text-align: right;
	}
	.to-reset a{
		color: #ccc;
	}
	.to-reset .register{
		padding-right: 24px;
		color: cornflowerblue;
	}
</style>