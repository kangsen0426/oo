<template>
	<view class="content">

		<view class="top">
			好友请求
			<i class="back iconfont icon-fanhui" @click="backUser"></i>
		</view>

		<view class="main">
			
			
			 <transition-group name="slide-fade">
			   
					<view class="friend_item" v-for="item in friendInfo" :key="item.id">
						<view class="item_top">
							<view class="leftBtn">
								<view class="btn" @click="refuse(item.id)">拒绝</view>
							</view>
							<view class="centerImg">
								<image :src="item.imgUrl" mode="aspectFill"></image>
							</view>
							<view class="rightBtn">
								<view class="btn" @click="agree(item.id)">接受</view>
							</view>
						</view>
						<view class="center">
							<view class="username">{{item.userName}}</view>
							<view class="time">{{item.time}}</view>
						</view>
						<view class="bottom">
							<view class="textArea">
								留言：{{item.requestMessage}}
							</view>
						</view>
					</view>
			   
			 </transition-group>
			
			
			<view class="empty" v-if="listempty">
				什么都没有~
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listempty:false,
				friendInfo:[
					{
						id:1,
						imgUrl:'../../static/image/person.jpg',
						userName:'大牛牛',
						time:"2021-9-24 16:46",
						requestMessage:"你好，想请求加为好友。谢谢你的通过。"
					},
					{
						id:2,
						imgUrl:'../../static/image/person.jpg',
						userName:'大牛牛2',
						time:"2021-9-24 16:46",
						requestMessage:"你好，谢谢你的通过。"
					},
					{
						id:3,
						imgUrl:'../../static/image/person.jpg',
						userName:'大牛牛3',
						time:"2021-9-24 16:46",
						requestMessage:"你好，谢谢你的通过。"
					},
					{
						id:4,
						imgUrl:'../../static/image/person.jpg',
						userName:'大牛牛4',
						time:"2021-9-24 16:46",
						requestMessage:"你好，谢谢你的通过。"
					}
				]
			};
		},
		methods:{
			backUser(){
				uni.navigateBack({
					delta:1
				})
			},
			refuse(id){
				console.log(id)
				
				uni.showLoading({
				    title: '加载中'
				});	
				
				//发送请求
					
				setTimeout(function () {
				    uni.hideLoading();
				}, 500);
				
				this.removeList(id)
				
				
			},
			agree(id){
				
				console.log(id)
				uni.showLoading({
				    title: '加载中'
				});	
				
				
				//发送请求
				
					
				setTimeout(function () {
				    uni.hideLoading();
				}, 500);
				
				this.removeList(id)
			},
			removeList(id){
				let index =  this.friendInfo.findIndex(item =>{
					if(item.id === id){
						return true
					}
				})
				
				console.log(this.friendInfo[index].id)
				
				this.friendInfo.splice(index, 1);
				
				if(!this.friendInfo.length){
					this.listempty = true;
				}
			}
		}
	}
</script>

<style lang="less">
	.content {
		padding-top: var(--status-bar-height);
		background-color: #FFFFFF;

		.top {
			line-height: 80rpx;
			height: 80rpx;
			// padding-top: 30rpx;
			text-align: center;
			padding-left: 30rpx;
			padding-right: 30rpx;
			padding-top: var(--status-bar-height);
			background-color: white;
			z-index: 888;
			border-bottom: 1rpx solid #F0F0F0;
			
			position: fixed;
			top: 0;
			left: 0;
			right: 0;

			.back {
				float: left;
			}

		}
		
		.main{
			padding: 20rpx;
			padding-left: 40rpx;
			padding-right: 40rpx;
			padding-top: 100rpx;
			transition: all 1s;
			background-color: #FFFFFF;
			
			.empty{
				height: 500rpx;
				text-align: center;
				line-height: 500rpx;
				color: #bebebe;
				position: fixed;
				left: 0;
				right: 0;
				// background-color: yellow;
			}
			
			.friend_item{
				height: 430rpx;
				border-radius: 30rpx;
				margin-bottom: 40rpx;
				background: linear-gradient(145deg, #f5f5f5, #ffffff);
				box-shadow:  10px 10px 46px #bebebe,
				             -10px -10px 46px #ffffff;
							 
				
							 
				.item_top{
					height: 160rpx;
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					// background-color: yellow;
					
					.leftBtn{
						width: 120rpx;
						height: 100%;
						display: flex;
						justify-content: space-evenly;
						align-items: flex-end;
						// background-color: red;
						
						.btn{
							width: 120rpx;
							height: 60rpx;
							line-height: 60rpx;
							border-radius: 30rpx;
							text-align: center;
							background-color: #feb7bb;
							color: #d82739;
						}
					}
					
					
					.centerImg{
						width: 200rpx;
						height: 100%;
						display: flex;
						justify-content: space-evenly;
						align-items: center;
						// background-color: red;
						image{
							width: 160rpx;
							height: 160rpx;
							border-radius: 50%;
						}
					}
					
					.rightBtn{
						width: 120rpx;
						height: 100%;
						display: flex;
						justify-content: space-evenly;
						align-items: flex-end;
						// background-color: red;
						
						.btn{
							width: 120rpx;
							height: 60rpx;
							line-height: 60rpx;
							border-radius: 30rpx;
							text-align: center;
							background-color: #aaff7f;
							color: #2e863c;
						}
					}
				}
				
				.center{
					height: 90rpx;
					padding-top: 20rpx;
					text-align: center;
					// background-color: yellow;
					.username{
						font-size: 38rpx;
						font-weight: bold;
					}
					
					.time{
						padding-top: 5rpx;
						font-size: 24rpx;
						color: #d0d0d0;
					}
				}
				
				.bottom{
					height: 140rpx;
					padding: 5rpx 30rpx 5rpx 30rpx;
					box-sizing: border-box;
					// background-color: yellow;
					.textArea{
						width: 100%;
						height: 100%;
						padding: 10rpx;
						box-sizing: border-box;
						border-radius: 20rpx;
						font-size: 26rpx;
						background-color: #e9ecec;
						
						color: #818282;
					}
				}
			}
			
			.friend_item:nth-of-type(2n){
				box-shadow:  -10px 10px 46px #bebebe,
				             10px -10px 46px #ffffff;
			}
			
			
		}
		
		
		.slide-fade-enter-active {
		  transition: all .5s ease;
		}
		.slide-fade-leave-active {
		  transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
		.slide-fade-enter, .slide-fade-leave-to
		/* .slide-fade-leave-active for below version 2.1.8 */ {
		  transform: translateX(480rpx);
		  opacity: 0;
		}
	}
</style>
