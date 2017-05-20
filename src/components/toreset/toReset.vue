<template>
	<div class="reset">
		<el-row>
			<el-col :span="5" :offset="9">
				<el-form label-width="100px" class="demo-ruleForm">
					<el-form-item label="" prop="pass">
						<el-input type="text" placeholder="请输入注册时使用的手机号" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="" prop="checkPass">
						<el-row>
							<el-col :span="15">
								<el-input type="text" placeholder="请输入短信验证码" auto-complete="off"></el-input>
							</el-col>
							<el-col :span="8">
								<el-button type="primary" class="code">获取验证码</el-button>
							</el-col>
						</el-row>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" class="toReset">找回密码</el-button>
					</el-form-item>
					<el-form-item label="" prop="type" class="to-reset">
						<router-link to="login" class="login">返回登陆</router-link>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
</script>

<style scoped>
	.reset{
		padding-top: 50px;
	}
	.toReset{
		width: 297px;
	}
	.to-reset{
		text-align: right;
	}
	.to-reset .register{
		padding-right: 24px;
		color: cornflowerblue;
	}
	.code{
		margin-left: 10px;
	}
	.login{
		color: cornflowerblue;
	}
</style>