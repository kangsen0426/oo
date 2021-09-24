<template>
	<view class="content">
		<view class="header">
			<view class="h_left">
				<navigator class="image" url="../userhome/userhome?id=aaa"></navigator>
				<!-- <view class="image" @click="toUserInfo"></view> -->
				<view class="user">
					<view class="username">千北</view>
					<view class="state">
						<view class="point"></view>
						在线
					</view>
				</view>
			</view>
			<view class="h_right">
				<view class="search" @click="toSearch">
					<i class="iconfont icon-sousuo"></i>
				</view>
				<view class="add">
					<i class="iconfont icon-jiahao1"></i>
				</view>
			</view>
		</view>

		<view class="message_list">

			<view class="list_item">
				<view class="item_left request">
					<i class="iconfont icon-addpeople"></i>
				</view>
				<view class="item_right">
					<view class="item_top">
						<text class="name">好友请求</text>
						<text class="time">9:29</text>
					</view>
					<view class="item_bottom">
						<text class="message">又有新朋友啦~</text>
						<text class="count requestcount">2</text>
					</view>
				</view>
			</view>




			<view class="list_item" v-for="(item,index) in friends" :key="index">
				<view class="item_left">
					<image src="../../static/image/person.jpg"></image>
				</view>
				<view class="item_right">
					<view class="item_top">
						<text class="name">{{item.name}}</text>
						<text class="time">{{changeTime(item.time)}}</text>
					</view>
					<view class="item_bottom">
						<text class="message">{{item.message}}</text>
						<text class="count">{{item.count}}</text>
					</view>
				</view>
			</view>






		</view>
	</view>
</template>

<script>
	import datas from "../../common/js/data.js"
	import dateTime from "../../utils/date.js"

	export default {
		data() {
			return {
				friends:[],
			}
		},
		onLoad() {
			this.getFriends()
		},
		methods: {
			changeTime(date){
				return dateTime.dateTime(date);
			},
			getFriends(){
				this.friends = datas.friends()
				console.log(this.friends)
			},
			toSearch(){
				
				uni.navigateTo({
					url:"../search/search"
				})
			},
			// toUserInfo(){
			// 	//跳转至个人信息
			// 	uni.navigateTo({
			// 		url:"../userhome/userhome"
			// 	})
			// }
		}
	}
</script>

<style lang="less">
	
	  
	.content {
		width: 100%;
		height: 100%;
		padding-top: var(--status-bar-height);
		padding-bottom: 80rpx;
		// background-color: #3F536E;


		.header {
			width: 100%;
			height: 90rpx;
			background-color: #F4F4F4;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			padding-top: var(--status-bar-height);
		


			.h_left {
				width: 30%;
				height: 100%;
				// background-color: ;
				display: flex;
				align-items: center;
				padding-left: 10rpx;

				.image {
					width: 80rpx;
					height: 80rpx;
					background: url(../../static/image/person.jpg) no-repeat;
					background-size: cover;
					border-radius: 10rpx;
				}

				.user {
					width: 100rpx;
					height: 80rpx;
					// background-color: red;
					margin-left: 10rpx;
					text-align: center;

					.username {
						font-size: 16px;
					}


					.state {
						font-size: 12px;
						display: flex;
						justify-content: space-evenly;
						align-items: center;

						.point {
							width: 20rpx;
							height: 20rpx;
							border-radius: 50%;
							background-color: #32DB7F;
						}
					}
				}
			}

			.h_right {
				width: 30%;
				height: 100%;
				// background-color: yellow;
				display: flex;
				align-items: center;
				justify-content: space-evenly;

				.search {
					width: 80rpx;
					height: 80rpx;
					// background-color: red;
					text-align: center;
					line-height: 80rpx;
				}

				.add {
					width: 80rpx;
					height: 80rpx;
					// background-color: red;
					text-align: center;
					line-height: 80rpx;

				}

			}



		}



		.message_list {
			width: 100%;
			padding-top: 20rpx;
			margin-top: 90rpx;

			// background-color: pink;

			.list_item {
				width: 100%;
				height: 130rpx;
				display: flex;
				align-items: center;
				padding-left: 20rpx;
				padding-right: 20rpx;
				// background-color: yellow;
				
				&:active{
					background-color: #F5F5F5;
				}
				


				.item_left {
					width: 90rpx;
					height: 90rpx;
					margin-right: 20rpx;
					// background: url(../../static/image/person.jpg) no-repeat;
					// background-size: cover;
					border-radius: 20rpx;
					overflow: hidden;
					image{
						width: 90rpx;
						height: 90rpx;
					}
				}

				.request {
					text-align: center;
					background: #55aaff;

					i {
						font-size: 88rpx;
						color: white;
					}
				}

				.item_right {
					width: calc(100vw - 150rpx);
					height: 80rpx;
					// background-color: green;

					.item_top {
						display: flex;
						justify-content: space-between;

						.name {}

						.time {
							font-size: 12rpx;
							line-height: 40rpx;
							color: #DCDCDC;
						}
					}

					.item_bottom {
						display: flex;
						justify-content: space-between;
						font-size: 12rpx;

						.message {
							max-width: 400rpx;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							color: #C0C0C0;

						}

						.count {
							text-align: center;
							min-width: 50rpx;
							height: 30rpx;
							line-height: 30rpx;
							border-radius: 20rpx;
							color: white;
							background-color: #CCCCCC;
						}

						.requestcount {
							background-color: red;
						}
					}
				}
			}
		}
	}
</style>
