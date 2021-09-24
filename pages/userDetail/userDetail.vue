<template>
	<view class="content">



		<view class="top">
			详情
			<i class="back iconfont icon-fanhui" @click="backUser"></i>
		</view>

		<view class="main">
			<view class="column heads" @click="toEdit('头像')">
				<view class="low head">
					<view class="cont">
						<view class="title">头像</view>
						<image :src="userData.imgUrl" mode="aspectFill"></image>
						<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
					</view>
					<i class="iconfont icon-arrow-right" v-if="userData.isMyself"></i>
				</view>
			</view>

			<view class="column" @click="toEdit('签名')">
				<view class="low">
					<view class="cont">
						<view class="title">签名</view>
						<text>{{userData.signature}}</text>
					</view>
					<i class="iconfont icon-arrow-right" v-if="userData.isMyself"></i>
				</view>
			</view>


			<view class="column" @click="toEdit('注册')">
				<view class="low">
					<view class="cont">
						<view class="title">注册</view>
						<text>{{userData.registerTime}}</text>
					</view>
					<!-- <i class="iconfont icon-arrow-right"></i> -->
				</view>
			</view>

			<view class="column" @click="toEdit('昵称')">
				<view class="low">
					<view class="cont">
						<view class="title">昵称</view>
						<text>{{userData.nickName}}</text>
					</view>
					<i class="iconfont icon-arrow-right" v-if="userData.isMyself"></i>
				</view>
			</view>

			<picker @change="bindPickerChange" :value="index" :range="array">
				<view class="column">
					<view class="low">
						<view class="cont">
							<view class="title">性别</view>
							<view class="uni-input">{{array[index]}}</view>
						</view>
						<i class="iconfont icon-arrow-right" v-if="userData.isMyself"></i>
					</view>
				</view>
			</picker>

			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="column" @click="toEdit('生日')">
					<view class="low">
						<view class="cont">
							<view class="title">生日</view>
							<view class="uni-input">{{date}}</view>
						</view>
						<i class="iconfont icon-arrow-right" v-if="userData.isMyself"></i>
					</view>
				</view>
			</picker>


			<view class="column" @click="toEdit('邮箱')">
				<view class="low">
					<view class="cont">
						<view class="title">邮箱</view>
						<text>{{userData.email}}</text>
					</view>
					<!-- <i class="iconfont icon-arrow-right" v-if="userData.isMyself"></i> -->
				</view>
			</view>

			<view class="column" @click="toEdit('电话')">
				<view class="low">
					<view class="cont">
						<view class="title">电话</view>
						<text>{{userData.phone}}</text>
					</view>
					<i class="iconfont icon-arrow-right" v-if="userData.isMyself"></i>
				</view>
			</view>

			<view class="column" @click="toEdit('密码')" v-if="userData.isMyself">
				<view class="low">
					<view class="cont">
						<view class="title">密码</view>
						<text>{{userData.password}}</text>
					</view>
					<i class="iconfont icon-arrow-right" v-if="userData.isMyself"></i>
				</view>
			</view>

		</view>


		<view class="btn" v-if="userData.isMyself">
			<button @click="BtnOption">退出登入</button>
		</view>


		<view v-if="showProp" :class="['propBox',showProp ? 'propBoxShow' : '']" >
			<view class="prop_header">
				<view class="prop_left" @click="cancelEdit">取消</view>
				<view class="prop_center">{{currentColumnText}}</view>
				<view class="prop_right" @click="editSing">确定</view>
			</view>
			
			<view class="meaasge_box">
				<textarea v-model="meaasge_text" class="textArea_box" />
			</view>
		</view>


	</view>
</template>

<script>
	import ImageCropper from "../../components/invinbg-image-cropper/invinbg-image-cropper.vue";


	export default {
		components: {
			ImageCropper
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
			    tempFilePath: '', //图片的临时路径
				cropFilePath: '', //图片裁切后的路径
				array: ['男', '女', '未知'],
				index: 0,
				date: currentDate,
				meaasge_text:'',//修改信息
				currentColumn:"",//当前正在编辑的栏目
				currentColumnText:"",
				showProp:false, // 是否展示编辑弹出岑
				userData: {
					imgUrl: '../../static/image/person.jpg',
					signature: "啊是多久啊富爸爸饭卡上吧播放将发布JFK八九开办费节哀顺变",
					registerTime: "2021-9-23 19:26",
					nickName: "千北",
					sex: "男",
					birthday: "2001-04-26",
					email: "2983973848@qq.com",
					phone: "18296701966",
					password: "123456",
					isMyself: true
				}
			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			backUser() {
				uni.navigateBack({
					delta: 1
				})
			},
			BtnOption() {
				//退出登入
				uni.redirectTo({
					url: "../login/login"
				})

			},
			cancelEdit(){
				//取消编辑
				this.showProp = false
				
			},
			editSing(){
				//确认编辑
				
				if(this.meaasge_text === "" && this.currentColumn === "password"){
					
					
					console.log("kong")
					return
				}else if(this.meaasge_text === ""){
					this.meaasge_text = "未填写"
					console.log("未填写")
				}
				
				
				
				this.userData[this.currentColumn] = this.meaasge_text
				
				//关闭
				this.showProp = false
				
			},
			toEdit(str) {
				
				
				if (str === "头像") {
					this.upload();
					console.log("头像")
				} else if (str === "签名") {
					this.meaasge_text = this.userData.signature
					this.showProp = true
					this.currentColumnText = "签名"
					this.currentColumn = 'signature'
					
					
					console.log("签名")
				} else if (str === "注册") {

					console.log("注册")
				} else if (str === "昵称") {
					this.meaasge_text = this.userData.nickName
					this.showProp = true
					this.currentColumnText = "昵称"
					this.currentColumn = 'nickName'
					console.log("昵称")
				} else if (str === "性别") {

					console.log("性别")
				} else if (str === "生日") {

					console.log("生日")
				} else if (str === "邮箱") {
					
					
					console.log("邮箱")
				} else if (str === "电话") {
					this.meaasge_text = this.userData.phone
					this.showProp = true
					this.currentColumnText = "电话"
					this.currentColumn = 'phone'	
					console.log("电话")
				} else if (str === "密码") {
					this.meaasge_text = this.userData.password
					this.showProp = true
					this.currentColumnText = "密码"
					this.currentColumn = 'password'
				}
			},
			upload() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: (res) => {
						this.tempFilePath = res.tempFilePaths.shift()
					}
				});
			},
			confirm(e) {
				this.tempFilePath = ''
				this.cropFilePath = e.detail.tempFilePath
				this.userData.imgUrl = this.cropFilePath;
			},
			cancel() {
				console.log('canceled')
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}


		}
	}
</script>

<style lang="less">
	.content {
		padding-top: var(--status-bar-height);
		// background-color: pink;

		.top {
			line-height: 80rpx;
			height: 80rpx;
			// padding-top: 30rpx;
			text-align: center;
			padding-left: 30rpx;
			padding-right: 30rpx;
			// padding-top: var(--status-bar-height);
			// background-color: yellow;
			border-bottom: 1rpx solid #F0F0F0;

			.back {
				float: left;
			}



		}

		.main {

			padding-top: 20rpx;

			.column {
				height: 110rpx;
				// background-color: pink;
				padding: 10rpx 20rpx;
				box-sizing: border-box;

				&:active {
					background-color: #F0F0F0;
				}

				.low {
					height: 100%;
					display: flex;
					align-items: center;
					// background-color: yellow;

					i {
						float: right;
					}

					.cont {
						display: flex;
						align-items: center;
						width: 100%;
						// background-color: green;

						.title {
							width: 80rpx;
							height: 80rpx;
							line-height: 80rpx;
							margin-right: 20rpx;
						}



						image {
							width: 100rpx;
							height: 100rpx;
							border-radius: 20rpx;
						}

						text {
							max-width: 470rpx;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							color: #c5c5c5;
						}

						.uni-input {
							color: #c5c5c5;
						}
					}


				}

			}

			.heads {
				height: 130rpx;
			}
		}

	
		.btn {
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
		
		
		
		.propBox{
			position: fixed;
			height: 100%;
			top: -1400rpx;
			left: 0;
			right: 0;
			padding-top: var(--status-bar-height);
			background-color: #FFF;
			z-index: 1000;
			transition: all 1s;
			
			
			.prop_header{
				height: 100rpx;
				// padding-top: 30rpx;
				padding-left: 30rpx;
				padding-right: 30rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				// padding-top: var(--status-bar-height);
				// background-color: yellow;
				border-bottom: 1rpx solid #F0F0F0;
				
				
				.prop_left{
					color: #C0C0C0;
				}
				.prop_center{
					font-size: 32rpx;
				}
				.prop_right{
					color: #96CEFF;
				}
			}
			
			.meaasge_box{
				padding: 10rpx;
				height: 600rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				// background-color: yellow;
				.textArea_box{
					padding: 10rpx;
					height: 400rpx;
					border-radius: 20rpx;
					background-color: #F1F3F4;
					
				}
			}
			
		}
		
		.propBoxShow{
			top: 0;
		}
			
	}
</style>
