<template>
	<view class="container">
		<view class="top">
			<text @click="toRegister">注册</text>
		</view>
		<view class="logo">
			<view class="logobox"></view>
		</view>
		<view class="center">
			<h2>登入</h2>
			<text>登入OO,开启旅途！</text>
		</view>
		<view class="bottom">
			<view class="inputs">
				<input type="text" value="" placeholder="请输入用户名/邮箱" @blur="validationUSername"/>
				<input type="password" value="" placeholder="请输入密码" @blur="validationUSerPsd"/>
			</view>
			<view class="error" v-if="!isRight">账号或密码错误！</view>
			
		</view>
		<view class="btn">
			<button @click="login">登入</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isRight:true,
				userInfo:{
					userName:"",
					userPsd:""
				}
			};
		},
		methods:{
			validationUSername(e){
				let username = e.detail.value;
				this.userInfo.userName = username;
				
				
			},
			validationUSerPsd(e){
				let userPsd = e.detail.value;
				this.userInfo.userPsd = userPsd;
			},
			login(){
				
				//发送请求
				
				
				console.log(this.userInfo)
			},
			toRegister(){
				//跳转到登入页面
				uni.navigateTo({
					url:"../singup/singup"
				})
			}
		}
	}
</script>

<style lang="less">
	.container{
		width: 100%;
		height: 100vh;
		// background-color: pink;
		
		.top{
			width: 100%;
			height: 80rpx;
			padding-top: 30rpx;
			text-align: center;
			// background-color: yellow;
			
			text{
				float: right;
				margin-right: 30rpx;
				
			}
			
			
		}
		.logo{
			width: 100%;
			height: 220rpx;
			
			// background-color: red;
			.logobox{
				width: 200rpx;
				height: 200rpx;
				margin: 0 auto;
				background: url(../../static/image/logo.png) no-repeat center;
				background-size: 350rpx 350rpx;
			
				
			}
		}
		.center{
			width: 100%;
			height: 120rpx;
			padding: 20rpx;
			padding-left: 50rpx;
			// background-color: yellow;
			
			text{
				color: #DCDCDC;
			}
		}
		.bottom{
			width: 100%;
			height: 350rpx;
			// background-color: yellow;
			
			.inputs{
				
				padding: 0 50rpx 50rpx;
				
				input{
					height: 90rpx;
					margin-bottom: 10rpx;
					border-bottom: 1rpx solid #DCDCDC;
					// background-color: green;
					
					&:last-child{
						margin-bottom: 0;
					}
				}
			}
			
			.error{
				// display: none;
				padding: 0 50rpx;
				color: red;
			}
			
			
		}
		.btn{
			padding: 0 30rpx;
			
			button{
				border-radius: 30rpx;
				background-color: #E9334A;
				color: white;
				
				&:active{
					background-color: #aa0000;
				}
			}
		}
		
	}
</style>
