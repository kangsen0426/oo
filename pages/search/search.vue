<template>
	<view class="content">
		<view class="header">
			<input class="search" confirm-type="search" placeholder="搜索用户/群" type="text" v-model="searchInfo"
				@confirm="searchGo" @input="search" />
			<text class="nosearch" @click="backIndex">取消</text>
		</view>
		<view class="list">
			<view class="user_list">
				<text>用户</text>

				<view class="list_item" v-for="item in userdataArr" :key="item.id">

					<view class="left_pic">
						<navigator url="../userhome/userhome?id=aaa">
							<image :src="item.imgUrl"></image>
						</navigator>
					</view>
					<view class="right_info">
						<view class="username">
							<view class="top" v-html="item.name">

							</view>
							<view class="email" v-html="item.email"></view>
						</view>
						<view class="optionBtn" v-if="item.tip">发消息</view>
						<view class="optionBtn addfriend" v-else>加好友</view>
					</view>
				</view>



			</view>
			<view class="group_list">
				<text>群组</text>

				<view class="list_item">
					<view class="left_pic">
						<image src="../../static/image/person.jpg"></image>
					</view>
					<view class="right_info">
						<view class="username">
							<span>你还发货时封杀</span>
							撒大大
						</view>
						<view class="optionBtn">发消息</view>
						<!-- <view class="optionBtn addfriend">加群组</view> -->
					</view>
				</view>

				<view class="list_item">
					<view class="left_pic">
						<image src="../../static/image/person.jpg"></image>
					</view>
					<view class="right_info">
						<view class="username">
							<span>说的很多话</span>
							速度
						</view>
						<!-- <view class="optionBtn">发消息</view> -->
						<view class="optionBtn addfriend">加群组</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import datas from "../../common/js/data.js"

	export default {
		data() {
			return {
				searchInfo: "", //搜索框的内容,
				userdataArr: [], //搜索到的用户数据\
				dataArr: [],
				uid: ''
			};
		},
		onLoad(option) {
			uni.getStorage({
				key: "userInfo",
				success: (res) => {
					this.uid = res.data.id
				}
			})
		},
		methods: {
			backIndex() {

				uni.navigateBack({
					delta: 1
				})
			},
			searchGo() {

				console.log(this.searchInfo)

				//清空输入框
				this.searchInfo = ""

			},
			search(e) {
				//实时搜索
				this.searchUser(this.searchInfo)

			},
			getUserData(str) {

				uni.showLoading()

				//发送请求搜索
				uni.request({
					url: '/search/user',
					data: {
						name: this.searchInfo,
						email: this.searchInfo
					},
					method: "POST",
					success: (res) => {
						uni.hideLoading()
						console.log(res.data);
						this.dataArr = res.data.msg
						this.expStr(str);

					},
					fail: (e) => {
						uni.hideLoading()
						console.log(e)
					}
				});

			},
			searchUser(str) {

				//搜索匹配关键字

				this.userdataArr = []

				if (str == "") return;

				// let this.dataArr = datas.friends();
				//获取数据
				this.getUserData(str)


				//匹配规则

			},
			isfriend(user) {
				//发送请求搜索
				uni.request({
					url: '/search/isfriend',
					data: {
						uid: this.uid,
						fid: user._id
					},
					method: "POST",
					success: (res) => {
						console.log(res)
						if (res.data.status === 400) {
							//不是好友
							user.tip = 0
						} else {
							user.tip = 1
						}
					},
					fail: (e) => {

						console.log(e)
					}
				});
			},
			expStr(str) {
				let exp = eval("/" + str + "/g")

				for (let i = 0; i < this.dataArr.length; i++) {
					if (this.dataArr[i].name.search(str) != -1 || this.dataArr[i].email.search(str) != -1) {
						//有匹配项

						//判断是否为好友
						this.isfriend(this.dataArr[i]);

						this.dataArr[i].name = this.dataArr[i].name.replace(exp, "<span>" + str + "</span>")
						this.dataArr[i].email = this.dataArr[i].email.replace(exp, "<span>" + str + "</span>")

						console.log(this.dataArr[i].name)
						this.userdataArr.push(this.dataArr[i])
						
						
					}
				}
				console.log(this.userdataArr)
			}

		}
	}
</script>

<style lang="less">
	.content {
		padding-top: var(--status-bar-height);

		.header {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100rpx;
			border-bottom: 1rpx solid #F0F0F0;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			// background-color: pink;
			padding-top: var(--status-bar-height);

			.search {
				width: 600rpx;
				height: 70rpx;
				text-align: center;
				border-radius: 20rpx;
				background-color: #F3F4F6;
			}
		}

		.list {
			padding-top: 120rpx;
			padding-left: 20rpx;
			padding-right: 20rpx;
			color: #30313A;

			.user_list {
				margin-bottom: 40rpx;
			}


			.list_item {
				display: flex;
				align-items: center;
				height: 110rpx;
				margin-bottom: 20rpx;
				// background-color: pink;

				.left_pic {
					width: 90rpx;
					height: 90rpx;
					margin-right: 30rpx;

					// background-color: red;
					image {
						width: 90rpx;
						height: 90rpx;
						border-radius: 20rpx;
					}
				}

				.right_info {
					width: calc(100% - 130rpx);
					height: 90rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					// background-color: yellow;
					.username {

						span {
							color: #89C8FF;
						}

						.email {
							font-size: 18rpx;
						}
					}

					.optionBtn {
						width: 140rpx;
						height: 60rpx;
						text-align: center;
						line-height: 60rpx;
						border-radius: 30rpx;
						font-size: 28rpx;
						color: white;
						background-color: #e95a61;

					}

					.addfriend {
						background-color: #89C8FF;
						color: #EDF7FF;
					}
				}
			}
		}
	}
</style>
