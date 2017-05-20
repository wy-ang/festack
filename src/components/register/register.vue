<template>
	<div class="register">
		<el-row>
			<el-col :span="4" :offset="10">
				<el-form label-width="100px" class="demo-ruleForm">
					<el-form-item label="" prop="pass">
						<el-input type="text" placeholder="请输入手机号或邮箱" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="" prop="pass">
						<el-input type="text" placeholder="请输入用户名" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="" prop="checkPass">
						<el-input type="password" placeholder="请输入密码" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="" prop="checkPass">
						<el-input type="password" placeholder="请再次输入密码" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="" prop="type">
						<el-checkbox v-model="checked" label="我已阅读并同意 《用户协议》" name="type"></el-checkbox>
					</el-form-item>
					<el-form-item>
						<el-button type="primary">注册</el-button>
					</el-form-item>
					<el-form-item label="" prop="type" class="to-login">
						已有账号?<router-link to="login" class="login">去登录</router-link>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked: false
			};
		}
	};
</script>

<style scoped>
	.register{
		padding-top: 50px;
	}
	.el-button{
		width: 218px;
	}
	.to-login{
		text-align: right;
	}
	.login{
		color: #6495ED;
	}
</style>