<template>
	<view class="content">
		<view class="header">
			<i class="back iconfont icon-fanhui" @click="backBefore"></i>
			<i class="close iconfont icon-shenglvehao" @click="toUserDetail"></i>
		</view>
		
		<view class="bg">
			<view :class="['mask',isMove ? 'mask_move' : '']"></view>
			<image src="../../static/image/person.jpg" mode="aspectFill"></image>
		</view>
		
		<view class="main">
			<view class="pic">
				<image src="../../static/image/person.jpg" mode="aspectFill" :class="isMove ? 'move' : ''"></image>
				<view :class="['icon',isMove ? 'showicon' : '']">
					<i class="iconfont icon-xingbienan man" v-if="userInfo.sex === 0"></i>
					<i class="iconfont icon-xingbienv woman" v-else-if="userInfo.sex  === 1"></i>
					<i class="iconfont icon-xingbie" v-else></i>
				</view>
			</view>
			<view class="Info">
				<view class="username">{{userInfo.name}}</view>
				<view class="nickName">昵称：{{userInfo.nickName}}</view>
				<view class="message">{{userInfo.message}}</view>
			</view>
			<view class="btn">
				<button @click="friendOption">{{userInfo.isFriend ? "发消息" : "加好友"}}</button>
			</view>
			
			<view :class="['add_misg',isMove ? 'add_move' : '']">
				<view class="name">{{userInfo.name}}</view>
				<textarea :value="myname + '请求加为好友~'" maxlength="120" class="textArea" />
			</view>
			
			<view :class="['bottomBtn',isMove ? '' : 'showBottomBtn']">
				<button class="err" @click="backUser">取消</button>
				<button class="send" @click="senRequest">发送</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isMove:false, //是否移动
				myname:"kang",
				userInfo:{
					name:"千北",
					nickName:"牛牛",
					message:"华强卖瓜买挂买一个大西瓜瓜瓜该哼哼很嘿嘿嘿，受打击很大，打法很费解啊。",
					sex:0,
					isFriend:false
				}
			};
		},
		onLoad(option){
			console.log(option)
		},
		methods:{
			backBefore(){
				
				uni.navigateBack({
					delta:1
				})
				
			},
			toUserDetail(){
				
				uni.navigateTo({
					url:"../userDetail/userDetail"
				})
				
			},
			friendOption(){
				this.isMove = true
			},
			senRequest(){
				//发送好友请求
				
			},
			backUser(){
				this.isMove = false
			}
		}
	}
</script>

<style lang="less">
	.content {
		
		
		padding-top: var(--status-bar-height);
		// background-color: pink;
	
		.header {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			height: 80rpx;
			padding-top: 30rpx;
			text-align: center;
			padding-left: 30rpx;
			padding-right: 30rpx;
			z-index: 666;
			padding-top: var(--status-bar-height);
			// background-color: yellow;
	
			.back {
				float: left;
			}
	
			.close {
				float: right;
				font-size: 46rpx;
			}
	
		}
		
		.bg{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		
			
			.mask{
				position: fixed;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
	
				background-color: #E9334A;
				z-index: 67;
				opacity: 0;
				transition: all 1s;
			}
			.mask_move{
				// z-index: 67;
				opacity: 1;
			}
			
			image{
				width: 100%;
				height: 100%;
				opacity: 0.6;
				z-index: 66;
				filter: blur(16px);
				
			}
		}
		
		.main{
			padding-top: 200rpx;
			
			.pic{
				height: 400rpx;
				text-align: center;
				position: relative;
				// background-color: red;
				
				
				image{
					width: 400rpx;
					height: 400rpx;
				
					border-radius: 40rpx;
					border: 6rpx solid rgba(255,255,255,1);
					z-index: 88;
					transition: all 1s;
					// background-color: yellow;
				}
				
				.move{
				
					width: 200rpx;
					height: 200rpx;
					border-radius: 50%;
				}
				
				.icon{
					position: absolute;
					bottom: 5rpx;
					left: 500rpx;
					width: 80rpx;
					height: 80rpx;
					text-align: center;
					line-height: 80rpx;
					z-index: 89;
					transition: all 1s;
					opacity: 1;
					// background-color: yellow;
					
					i{
						font-size: 68rpx;
						color: orange;
					}
					
					.man{
						color: #1296db;
					}
					.woman{
						color: #d4237a;
					}
				}
				
				.showicon{
					opacity: 0;
				}
			}
			
			.Info{
				height: 500rpx;
				padding-top: 60rpx;
				text-align: center;
				padding-left: 60rpx;
				padding-right: 60rpx;
				// background-color: yellow;
				
				.username{
					font-size: 68rpx;
					color: #000000;
					padding-bottom: 20rpx;
					
				}
				.nickName{
					color: #333333;
					padding-bottom: 20rpx;
				}
			}
			
			
			.btn{
				position: fixed;
				bottom: 50rpx;
				left: 0;
				right: 0;
				padding: 0 40rpx;
				button {
					border-radius: 30rpx;
					background-color: #E9334A;
					color: white;
				
					&:active {
						background-color: #cc0000;
					}
				}
			}
			
			
			
			.add_misg{
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
				height: 0;
				background-color: rgba(255,255,255,1);
				border-radius: 40rpx 40rpx 0 0;
				padding: 0 56rpx;
				overflow: hidden;
				box-sizing: border-box;
				transition: all 1s;
				
				.name{
					text-align: center;
					padding-top: 100rpx;
					font-size: 52rpx;
					line-height: 74rpx;
					box-sizing: border-box;
					padding-bottom: 40rpx;
					// background-color: red;
				}
				
				.textArea{
					width: 100%;
					height: 400rpx;
					box-sizing: border-box;
					border-radius: 30rpx;
					padding: 20rpx;
					background-color: #F1F3F4;
				}
			}
			.add_move{
				height: calc(100vh - 360rpx);
				// height: 700rpx;
			}
			
			.bottomBtn{
				position: fixed;
				left: 0;
				right: 0;
				bottom: 30rpx;
				height: 100rpx;
				padding: 0 20rpx;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-evenly;
				transition: all 1s;
				opacity: 1;
				// background-color: yellow;
				
			
				
				.err{
					width: 25%;
					background-color: #E9E9EA;
					
					&:active{
						background-color: #cacacb;
						color: white;
					}
				}
				.send{
					color: white;
					width: 60%;
					background-color: #E9334A;
					&:active {
						background-color: #cc0000;
					}
				}
			}
			
			.showBottomBtn{
				opacity: 0;
				bottom: -60rpx;
			}
		}
	}
</style>
