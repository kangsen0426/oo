<template>
	<view class="content">
		<view class="header">
			<view class="h_left">
				<view class="image"></view>
				<view class="user">
					<view class="username">千北</view>
					<view class="state">
						<view class="point"></view>
						在线
					</view>
				</view>
			</view>
			<view class="h_right">
				<view class="search">
					<i class="iconfont icon-sousuo"></i>
				</view>
				<view class="add">
					<i class="iconfont icon-jiahao1"></i>
				</view>
			</view>
		</view>
	
		<view class="message_list">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	.content {
		width: 100%;
		height: 100%;
		background-color: #3F536E;

		.header {
			width: 100%;
			height: 90rpx;
			background-color: #F4F4F4;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.h_left {
				width: 30%;
				height: 100%;
				// background-color: ;
				display: flex;
				align-items: center;
				padding-left: 10rpx;
				.image{
					width: 80rpx;
					height: 80rpx;
					background: url(../../static/image/person.jpg) no-repeat;
					background-size: cover;
					border-radius: 10rpx;
				}
					
				.user{
					width: 100rpx;
					height: 80rpx;
					// background-color: red;
					margin-left: 10rpx;
					text-align: center;
					
					.username{
						font-size: 16px;
					}
					
						
					.state{
						font-size: 12px;
						display: flex;	
						justify-content: space-evenly;
						align-items: center;
						.point{
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
					
				.search{
					width: 80rpx;
					height: 80rpx;
					// background-color: red;
					text-align: center;
					line-height: 80rpx;
				}
				.add{
					width: 80rpx;
					height: 80rpx;
					// background-color: red;
					text-align: center;
					line-height: 80rpx;
					
				}
				
			}
			
				
		
		}
	}
</style>
