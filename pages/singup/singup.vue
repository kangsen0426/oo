<template>
	<view class="container">
		<view class="top">
			<i class="back iconfont icon-fanhui" @click="toLogin"></i>
			<i class="close iconfont icon-guanbi" @click="toLogin"></i>
		</view>
		<view class="logo">
			<view class="logobox"></view>
		</view>
		<view class="center">
			<h2>注册</h2>
			<text>注册OO,开启旅途！</text>
		</view>
		<view class="bottom">
			<view class="inputs">
				<view class="input_div">
					<input type="text" value="" placeholder="请输入用户名" @blur="validationUsername"/>
					<text v-if="isuser">用户名已存在</text>
					<i class="good iconfont icon-zhengque" v-if="isuserOk"></i>
				</view>
				<view class="input_div">
					<input type="text" value="" placeholder="请输入邮箱" @input="validationUseremail"/>
					<i class="good iconfont icon-zhengque" v-if="isemail"></i>
					<i class="err iconfont icon-guanbi" v-if="isemailOk"></i>
				</view>
				<view class="input_div">
					<input :type="type" value="" placeholder="请输入密码" @input="validationUserPsw"/>
					<i class="iconfont icon-yanjing-bi" v-if="!isshowpsw" @click="showPsw"></i>
					<i class="iconfont icon-yanjing-zheng" v-if="isshowpsw" @click="showPsw"></i>
				</view>
			</view>
			<!-- <view class="error">账号或密码错误！</view> -->

		</view>
		<view class="btn">
			<button @click="register" v-if="showBtn">注册</button>
			<button class="fake" v-else>注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'password',
				isuser:false, //用户名是否存在
				isuserOk:false, //用户名可用，显示正确图标
				isemail:false, // 邮箱可用
				isemailOk:false, //邮箱不可用
				isshowpsw:false, //是否显示密码
				showBtn:false, //是否开放注册按钮
				
				formData:{
					username:"",
					userEmail:"",
					userPsd:""
				}
				
			};
		},
		methods:{
			showBtnClick(){
				if(this.isuserOk && this.isemail && this.formData.userPsd != ""){
					this.showBtn = true;
				}else{
					this.showBtn = false
				}
			},
			showPsw(){
				this.isshowpsw = !this.isshowpsw
				
				if(this.isshowpsw){
					this.type = "text"
				}else{
					this.type = "password"
				}
				
			},
			validationUsername(e){
				let username = e.detail.value;
				this.formData.username = username;
				
				// 发送请求查询是否存在该用户名
				
				
				if(true){
					this.isuserOk = true
				}else{
					//用户名重复
					this.isuser =  false;
				}
				
				
				this.showBtnClick()
			},
			validationUseremail(e){
				let useremail = e.detail.value;
				this.formData.userEmail = useremail;
				
				let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
				
				let emailOk =  ePattern.test(useremail)
				
					
				if(emailOk){
					this.isemail = true;
					this.isemailOk = false
					
				}else{
					this.isemail = false
					this.isemailOk = true
				}
				
				this.showBtnClick()
			},
			validationUserPsw(e){
				let password = e.detail.value;
				if(!password){
					this.formData.userPsd = "";
				}else{
					this.formData.userPsd = password;
				}
				console.log(this.formData.userPsd)
				this.showBtnClick()
			},
			register(){
				console.log(this.formData)
				
				//发送请求
			},
			toLogin(){
				//返回登入页面
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="less">
	.container {

		height: 100vh;
		padding-top: var(--status-bar-height);
		// background-color: pink;

		.top {

			height: 80rpx;
			padding-top: 30rpx;
			text-align: center;
			padding-left: 30rpx;
			padding-right: 30rpx;
			// padding-top: var(--status-bar-height);
			// background-color: yellow;

			.back {
				float: left;
			}

			.close {
				float: right;
			}


		}

		.logo {
			width: 100%;
			height: 220rpx;

			// background-color: red;
			.logobox {
				width: 200rpx;
				height: 200rpx;
				margin: 0 auto;
				background: url(../../static/image/logo.png) no-repeat center;
				background-size: 350rpx 350rpx;


			}
		}

		.center {
			width: 100%;
			height: 120rpx;
			padding: 20rpx;
			padding-left: 50rpx;
			// background-color: yellow;

			text {
				color: #DCDCDC;
			}
		}

		.bottom {
			width: 100%;
			height: 450rpx;
			// background-color: yellow;

			.inputs {

				padding: 0 50rpx 50rpx;

				.input_div {
					position: relative;
			
					
					input {
						height: 90rpx;
						margin-bottom: 10rpx;
						border-bottom: 1rpx solid #DCDCDC;
						// background-color: green;

						&:last-child {
							margin-bottom: 0;
						}
					}
					text{
						position: absolute;
						right: 0;
						top: 30rpx;
						font-size: 16rpx;
						color: red;
					}
					
					i{
						position: absolute;
						right: 0;
						top: 30rpx;
						font-size: 42rpx;
						
						
					}
					
					.good{
						color: #32DB7F;
					}
					
						
					.err{
						color: red;
					}
				}


			}

			.error {
				// display: none;
				padding: 0 50rpx;
				color: red;
			}


		}

		.btn {
			padding: 0 30rpx;

			button {
				border-radius: 30rpx;
				background-color: #E9334A;
				color: white;

				&:active {
					background-color: #aa0000;
				}
			}
			
			.fake{
				background-color: #DCDCDC;
				&:active {
					background-color: #DCDCDC;
				}
			}
		}

	}
</style>
