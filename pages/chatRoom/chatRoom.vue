<template>
	<view class="content">
		<view class="top">
			千北
			<i class="back iconfont icon-fanhui" @click="backList"></i>
			<view class="close">
				<image src="../../static/image/person.jpg" mode="aspectFill"></image>
			</view>
		</view>


		<scroll-view class="scroll_box" scroll-y="true"   scroll-with-animation :scroll-into-view="scrollToView"
			@scrolltoupper="scrollTop" >
			<!-- 
			@refresherrefresh="refershTrue" @refresherrestore="refershFalse"  refresher-enabled :refresher-triggered="isRefersh"
			 -->
			<view class="chat_main">
				<view :class="['loading',isRefersh ? 'loading_hidden' : '']" >
					<image src="../../static/image/loading.png" mode="aspectFill" :animation="animationData"></image>
				</view>
				
				
				<view class="chat_item" v-for="item in messageDataArr" :key="item.tip" :id="'msg'+item.tip">
					<view class="chat_time" v-if="item.time">{{dateTime(item.time)}}</view>
					<view :class="['msg',item.id === 'a' ? 'msg_right' : '']">
						<image class="userpic" :src="item.imgurl" mode="aspectFill"></image>
						<view class="message" v-if="item.type === 0">{{item.message}}</view>
						<view class="sendImg" v-if="item.type === 1">
							<image :src="item.message" mode="widthFix" @click="previewImg(item.message)"></image>
						</view>
						<view class="sendVideo" v-if="item.type === 2">
							<!-- 发送的视频 -->


						</view>
						<view class="message sendAudio" v-if="item.type === 3" @click="playVoice(item.message.voice)">
							<span>{{item.message.time}} "</span>
							<i class="iconfont icon-yuyin"></i>
						</view>
						<view class="message location" v-if="item.type === 4" @click="showMap(item.message)">
							<view class="title_box">
								<view class="title">{{item.message.locationName}}</view>
								<view class="title_msg">{{item.message.locationAddress}}</view>
							</view>
							<view class="pic">
								<image src="../../static/image/map.jpg" mode="aspectFill"></image>
								<!-- <map class="map" :latitude="item.message.latitude" :longitude="item.message.longitude"></map> -->
							</view>
						</view>
					</view>
				</view>
			</view>
			<view
				:class="['empty',changPadding.change && changPadding.type === 1 ? 'chat_main_change1' : '',changPadding.change && changPadding.type === 2 ? 'chat_main_change2' : '']">
			</view>
		</scroll-view>
		<submit @msgSend='messageSend' @EmoHeight="getEmoHeight"></submit>

	</view>

</template>

<script>
	import timeFn from "../../utils/date.js"
	import submit from "../../components/submit/submit.vue"
	import dataFn from "../../common/js/data.js"

	const innerAudioContext = uni.createInnerAudioContext();

	export default {
		components: {
			submit
		},
		data() {
			return {
				scrollToView: '', //跳转到哪一条信息
				imgMsg: [], //聊天图片的数组
				oldTime: new Date(),
				changPadding: {},
				animationData: {},
				nowPage:1,
				isRefersh:false,//是否下拉刷新
				loading:"",
				messageDataArr: []
			};
		},
		onLoad(option) {

			this.getMsg(this.nowPage) //测试
			this.loadingOnshow()
			console.log(option.id);
		},
		methods: {
			//预览图片
			previewImg(imgrul) {
				// 预览图片
				let index = 0;

				for (let i = 0; i < this.imgMsg.length; i++) {
					index = this.imgMsg.indexOf(imgrul)
				}

				console.log(index)


				uni.previewImage({
					current: index,
					urls: this.imgMsg,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片'],
						success: function(data) {

							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			getMsg(page) {
				//获取聊天数据
				let temp = dataFn.chatMessage()
				let j = temp.length - 15*page
				let count = 15*page
				if(count >= temp.length){
					count = temp.length
				}
				if(j < 0){
					j = 0
				}
				for(let i = 0; i < count;i++,j++){
					
					this.messageDataArr[i] = temp[j];
				}
				
				this.nowPage++
				
				clearInterval(this.loading)
			
				
				this.isRefersh = false;

				//设置第一条数据的时间
				this.oldTime = this.messageDataArr[0].time

				for (let i = 0; i < this.messageDataArr.length; i++) {

					//时间间隔
					this.spaceTime(this.messageDataArr[i].time, i);

				}

				//图片预览
				this.setPreviewArr()


				//设置跳转到哪一条消息
				this.goToView()



			},
			setPreviewArr() {
				//清空原来的数组
				this.imgMsg = []

				for (let i = 0; i < this.messageDataArr.length; i++) {

					if (this.messageDataArr[i].type === 1) {
						this.imgMsg.push(this.messageDataArr[i].message)
					}
				}

			},
			goToView() {

				//设置跳转到哪一条消息
				this.$nextTick(function() {

					this.scrollToView = 'msg' + this.messageDataArr[this.messageDataArr.length - 1].tip


					console.log(this.scrollToView)

				})

			},
			showMap(e) {
				//展示地图
				// console.log(e)
				uni.openLocation({
					latitude: e.locationLatitude,
					longitude: e.locationLongitude,
					name: e.locationName,
					address: e.locationAddress,
					success: function() {
						console.log('success');
					}
				})
			},
			scrollTop() {
				console.log("到达顶部")
				this.loadingOnshow();
				
			},
			refershTrue(){
				console.log("触发下拉")
			},
			refershFalse(){
				
				console.log("下拉结束")
				this.isRefersh = false
			},
			 loadingOnshow(){
				 this.isRefersh = true
				 if(this.loading){
					 clearInterval(this.loading)
				 }
			    var animation = uni.createAnimation({
					duration: 1000,
			        timingFunction: 'step-start',
			    })
			
			    this.animation = animation
			
			    animation.scale(2,2).rotate(45).step()
			
			    this.animationData = animation.export()
				let i = 1;
			    this.loading = setInterval(function() {
			      animation.rotate(i*30).step()
			      this.animationData = animation.export()
				  i++
				  if(i > 20){
					  console.log("kkk")
					  this.getMsg(this.nowPage);
				  }
			    }.bind(this), 100)
				
				
			  },
			messageSend(msg) {

				console.log(msg)

				msg.tip = this.messageDataArr.length + 1;


				//更新数组
				this.messageDataArr.push(msg)

				//时间间隔
				this.spaceTime(msg.time, this.messageDataArr.length - 1);

				//图片预览更新
				this.setPreviewArr()

				//更新位置
				this.goToView()

			},
			playVoice(src) {
				console.log('播放录音');

				if (src) {
					innerAudioContext.src = src;
					innerAudioContext.play();
				}
			},
			getEmoHeight(e) {
				this.changPadding = e
				console.log('emo高度变高：' + e.type)
			},
			backList() {
				uni.navigateBack({
					delta: 1
				})
			},
			dateTime(date) {
				return timeFn.dateTime(date)
			},
			spaceTime(now, index) {
				//时间间隔处理
				let messageTime = this.messageDataArr[index].time

				if ((this.oldTime + 1000 * 60 * 5) < messageTime) {
					console.log(this.dateTime(messageTime))
				} else {
					if (index != 0)
						this.messageDataArr[index].time = false
				}
				// console.log(this.dateTime(this.oldTime)+'**')
				this.oldTime = messageTime

			}
		}
	}
</script>

<style lang="less">
	page {
		height: 100%;
	}

	.content {
		padding-top: var(--status-bar-height);
		height: 100%;
		overflow-y: hidden;
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

			.close {
				height: 100%;
				display: flex;
				align-items: center;
				float: right;

				image {
					width: 60rpx;
					height: 60rpx;
					border-radius: 20rpx;
				}
			}

		}

		.scroll_box {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			padding-bottom: 120rpx;
			// margin-bottom: 200rpx;
			background-color: #F4F4F4;
			// background-color: pink;



			.chat_main {

				padding-left: 32rpx;
				padding-right: 32rpx;
				padding-top: 110rpx;

				.loading {
					padding-top: 0;
					height: 0;
					margin-bottom: 50rpx;
					text-align: center;
					transition: all 0.5s;
					overflow: hidden;
					// background-color: red;

					image {
						width: 20rpx;
						height: 20rpx;


					}
				}
				.loading_hidden{
					padding-top: 40rpx;
					height: 60rpx;
				}

				.chat_item {
					width: 100%;
					margin-bottom: 20rpx;
					// background-color: red;

					.chat_time {
						height: 60rpx;
						text-align: center;
						color: #818282;
						font-size: 26rpx;
						// background-color: red;

					}

					.msg {
						display: flex;
						align-items: flex-start;


						.userpic {
							width: 80rpx;
							height: 80rpx;
							border-radius: 20rpx;
							margin-right: 20rpx;
						}



						.message {
							max-width: 440rpx;
							min-height: 44rpx;
							padding: 15rpx;
							border-radius: 20rpx;
							font-size: 30rpx;
							background-color: #FFFFFF;

						}

						.location {
							width: 450rpx;
							height: 300rpx;
							background-color: #FFFFFF;

							.title_box {
								height: 90rpx;

								// background-color: red;
								.title {
									font-size: 36rpx;
									color: #000000;
								}

								.title_msg {
									max-width: 430rpx;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									font-size: 26rpx;
									color: #717171;
								}
							}

							.pic {
								height: 210rpx;
								background-color: yellow;

								.map {
									width: 100%;
									height: 210rpx;
								}

								image {
									max-width: 100%;
									max-height: 210rpx;
								}
							}
						}


						.sendImg {
							width: 400rpx;
							// height: 400rpx;


							image {
								max-width: 400rpx;
								// height: 400rpx;
								border-radius: 30rpx;
							}

						}

						.sendAudio {
							display: flex;
							align-items: center;

							i {
								padding-left: 10rpx;
								font-size: 48rpx;
							}
						}



					}

					.msg_left {}

					.msg_right {
						flex-direction: row-reverse;

						.userpic {
							margin-right: 0;
							margin-left: 20rpx;
						}

						.message {
							background-color: #12B7F5;
							color: white;
						}

						.location {

							background-color: #FFFFFF;
						}
					}
				}



			}

			.empty {
				height: 0;
				transition: all 1s;
			}

			.chat_main_change1 {
				height: 500rpx;
			}

			.chat_main_change2 {
				height: 200rpx;
			}
		}




	}
</style>
