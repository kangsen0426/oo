<template>
	<view>
		<view class="sunmit">
			<view class="left">
				<i class="iconfont icon-audio" @click="speakClick"></i>
			</view>
			<view class="center">
				<textarea v-if="!speak" confirm-type="send"  auto-height  v-model="message"   @confirm="sendMessage(0)" @focus="messageFocus" @blur="messageBlur" />
				<view v-else class="sound" @touchstart="Speaktouchstart" @touchend="Speaktouchend" @touchmove="speakMove">请按住说话</view>
			</view>
			<view class="right">
				<i class="iconfont icon-smile" @click="clickEmo"></i>
				<i :class="['iconfont', 'icon-plus-circle',showAddOption ? 'addRote' : ''] " @click="addClick"></i>

			</view>
			<view :class="['inner',showAddOption ? 'inner_show' : '']">
				<view class="item" @click="chooseIMG('album')">
					<i class="iconfont icon-tupian"></i>
				</view>
				<view class="item" @click="chooseIMG('camera')">
					<i class="iconfont icon-xiangji"></i>
				</view>
				<view class="item" @click="chooseLocation">
					<i class="iconfont icon-weizhi"></i>
				</view>
				<view class="item">
					<i class="iconfont icon-shipin"></i>
				</view>
				<view class="item">
					<i class="iconfont icon-wenjianjia"></i>
				</view>
				
			</view>
			
			<view :class="['emoji',showemo ? 'emoji_show' : '']" ref="emobox">
				<swiper class="slider">
				    <swiper-item v-for="(item, key) in emojiData" :key="key" class="slider-emoji" :class="[key==emojiData.length-1?'lastbox':'']">
				        <text v-for="(emoji, index) in item" :key="index" @click="selemoji(emoji)" class="slider-emoji-icon">{{ emoji }}</text>
				    </swiper-item>
				</swiper>
				<view :class="['emoOption',showemo ? '' : 'emoOptionHidden']">
					<view class="del" @click="delEmo"><i class="iconfont icon-24gl-delete"></i></view>
					<view class="send" @click="sendMessage(0)">发送</view>
				</view>
			</view>
		</view>
		<view class="voice_bg" v-if="showPropDel">
			<view class="voice_time_box">
				<view class="voice_time">
					{{voiceTime}} "
				</view>
				<view class="voice_time_mask" :style="{ width: changeWidth + 'rpx' }"></view>
			</view>
			<view class="voice_del">
				<view class="del_btn">
					<i :class="['iconfont', 'icon-shanchu',showDelIcon ? 'delLight' : '']"></i>
				</view>
			</view>
			<view class="del_text">
				<span>上滑取消录制</span>
			</view>
		</view>
		
	</view>
	
	
</template>

<script>
	import emoji from "../../utils/m-emoji/m-emoji_2.0.0/emoji.js"
	
	//录音
	const recorderManager = uni.getRecorderManager();
	
	
	export default {
		name:"submit",
		data() {
			return {
				
				message:'', //输入框的信息
				showAddOption:false, //是否展示弹出内容
				speak:false, //展示说话图标
				showemo:false, //展示表情
				emojiData:[], //表情数组
				timer:'', // 控制语音发送
				voiceTime:'',//语音时长
				changeWidth:0,//遮罩的动态宽度
				showPropDel:false,//删除录音的弹出层
				showDelIcon:false, //删除区域
			};
		},
		mounted(){
		
			//表情
			this.spliceEMO()
			
		},
		methods:{
			chooseIMG(type){
				let count;
				if(type === 'album'){
					count = 9
				}else{
					count = 1
				}
				
				console.log(type)
				
				//点击选择图片
				uni.chooseImage({
				    count: count, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: [type], //从相册选择或者拍摄相片
				    success:(res) => {
				        const filePath = res.tempFilePaths;
						
						for(let i = 0; i < filePath.length;i++){
							this.message = filePath[i];
							console.log(this.message)
							this.sendMessage(1);
						}
				    },
					fail:function(err){
						console.log(err)
					}
				});
			},
			Speaktouchstart(){
				
				console.log('录音start')
				this.showPropDel = true
				this.showDelIcon = false;
				
				//录音
				recorderManager.start()
				
				
				let i = 0;
				this.timer = setInterval(()=>{
					i++;
					this.voiceTime = i;
					this.changeWidth = (400 / 60)*i
					console.log(i)
					if(i > 59){
						//结束计时
						clearInterval(this.timer);
						this.Speaktouchend()
					}
				},1000)
				
				
			},
			Speaktouchend(){
				console.log("录音end")
				this.showPropDel = false
				this.changeWidth = 0;
				
				
				
				clearInterval(this.timer);
				recorderManager.stop();
				
				
			
				
				recorderManager.onStop((res) => {
				    // console.log('recorder stop' + JSON.stringify(res));
					// self.voicePath = res.tempFilePath;
					let data = {
						voice:res.tempFilePath,
						time:this.voiceTime
					}
					
					//结束后发送语音
					if(this.showDelIcon){
						//取消发送
						this.showDelIcon = false;
						this.voiceTime = 0
						console.log("取消发送")
						return
					}
					console.log("aaa")
					this.showDelIcon = false;
					this.voiceTime = 0
					this.message = data;
					this.sendMessage(3);
					
				});
			},
			speakMove(e){
				let w = 0;
				let h = 0;
				uni.getSystemInfo({
				    success: function (res) {
				      
				      w = res.windowWidth*0.38
				      h = res.windowHeight*0.65
				       
				    }
				});
				
				// console.log(e.changedTouches['0'].clientX)
				// console.log(e.changedTouches['0'].clientY)
				if(e.changedTouches['0'].clientX > w && e.changedTouches['0'].clientX < w*1.6 && e.changedTouches['0'].clientY < h && e.changedTouches['0'].clientY > h*0.8){
					this.showDelIcon = true
				}else{
					this.showDelIcon = false;
				}
				
				// console.log()
			},
			chooseLocation(){
				//获取位置
				uni.chooseLocation({
				    success:(res)=> {
						
						let data = {
							locationName:res.name,
							locationAddress:res.address,
							locationLatitude:res.latitude,
							locationLongitude:res.longitude
						}
						//发送位置信息
				        this.message = data;
				        this.sendMessage(4);
				    }
				});
				
			},
			messageFocus(){
				//关闭 加号点击弹起
				// this.closeAddOpt()
				
				if(this.showemo){
					//如果打开了表情，先关闭
					this.showemo = false
				}
				if(this.showAddOption){
					//如果打开了加号，先关闭
					this.closeAddOpt()
				}
				this.heightChange(this.speak,2)
				
				
			},
			messageBlur(){
				
			},
			closeAddOpt(){
				this.showAddOption = false
			},
			addOptChange(){
				this.showAddOption = !this.showAddOption;
			},
			addClick(){
				
				if(this.showemo){
					//如果打开了表情，先关闭
					this.showemo = false
				}
				
				
				this.addOptChange()
				
				this.heightChange(this.showAddOption,2)
			},
			speakClick(){
				if(this.showemo){
					//如果打开了表情，先关闭
					this.showemo = false
				}
				if(this.showAddOption){
					//如果打开了加号，先关闭
					this.showAddOption = false
				}
				this.speak = !this.speak
				this.heightChange(this.showemo,2)
			},
			
			clickEmo(){
				//点击表情
					
				if(this.speak){
					//如果打开了说话，先关闭
					this.speak = false;
				}
				
				if(this.showAddOption){
					//如果打开了加号，先关闭.
					this.showAddOption = false
				}
				
				this.showemo = !this.showemo
				
				this.heightChange(this.showemo,1)
				// this.$nextTick(function(){
				// 	this.getElementHeight();
				// })
				
			},
			heightChange(which,type){
				//获取高度
				this.$emit('EmoHeight',{
					change:which,
					type
				});
			},
			sendMessage(type){
				console.log(this.message)
				
				if(this.message === '') return
				
				
				
				let msgObj = {
						id: 'a', //用户 id
						imgurl: '../../static/image/person.jpg',
						message: this.message, //信息，可以是图片链接，视频链接等等
						type, //消息的类型  0 文字  1 图片  2 视频
						tip: 11, //第几条消息
						time: new Date()
					}
				
				
				this.$emit('msgSend',msgObj)
				
				this.message = ''
			},
			delEmo(){
				if(this.message === '') return
				//删除字符
				let tempArr = []
				tempArr = [...this.message]
				tempArr.pop()
				
				this.message = tempArr.join('')
			},
			spliceEMO(){
			
			
			
				//分解成二维数组-方便显示
				let page = Math.ceil(emoji.length/21);
				    for (let i = 0; i < page; i++) {
				    this.emojiData[i] = [];
				    for (let k = 0; k < 24; k++) {
				        emoji[i*21+k]?this.emojiData[i].push(
				        emoji[i*21+k]
				        ):''
				    }
				} 
				
				// console.log( this.emojiData)
				
			},
			selemoji(m) {
				//点击表情的回调
			    console.log(m);
				this.message += m
				
			}
			// getElementHeight(){
			// 	const query = uni.createSelectorQuery().in(this);
			// 	query.select('.emoji').boundingClientRect(data =>{
			// 		console.log(data.height)
			// 		this.$emit('EmoHeight',data.height);
			// 	}).exec(function(){
					
			// 	})
				
			// }
		}
	}
</script>

<style lang="less">
	.sunmit{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-wrap: wrap;
		background-color: #FFFFFF;
		border-top: 1rpx solid #F0F0F0;
		
		i{
			font-size: 62rpx;
		}
		
		.left{
			width: 100rpx;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			// background-color: pink;
			
			i{
				font-size: 52rpx;
			}
			
			
		}
		
		.center{
			width: calc(100% - 280rpx);
			min-height: 100rpx;
			padding-top: 10rpx;
			padding-bottom: 10rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			
			textarea{
				width: 100%;
				min-height: 70rpx;
				max-height: 170rpx;
				border-radius: 20rpx;
				padding: 10rpx;
				box-sizing: border-box;
				background-color: #F4F4F4;
			}
			
			.sound{
				width: 100%;
				height: 70rpx;
				line-height: 50rpx;
				text-align: center;
				border-radius: 20rpx;
				padding: 10rpx;
				box-sizing: border-box;
				background-color: #F4F4F4;
				color: #b3b3b3;
			}
		}
		
		.right{
			width: 180rpx;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			// background-color: pink;
			
			i{
				transition: all 1s;
			}
			
			.addRote{
				transform: rotateZ(45deg);
				color: red;
			}
			
			.sendBtn{
				height: 50rpx;
				// font-size: 24rpx;
				padding: 5rpx;
				border-radius: 10rpx;
				background-color: #F4F4F4;
			}
		}
		
		.inner{
			width: 100%;
			height: 0;
			padding: 0;
			background-color: #F4F4F4;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex-wrap: wrap;
			overflow: hidden;
		
			transition: all 0.6s;
			
			.item{
				width: 80rpx;
				height: 80rpx;
				padding: 20rpx;
				// margin-bottom: 20rpx;
				// margin-right: 20rpx;
				text-align: center;
				line-height: 80rpx;
				background-color: #FFFFFF;
				border-radius: 20rpx;
				
				i{
					font-size: 88rpx;
				}
			}
		}
		
		.inner_show{
			padding: 20rpx;
			height: 140rpx;
		}
		
		.emoji{
			position: relative;
			width: 100%;
			height: 0;
			padding: 0;
			background-color: #F4F4F4;
			overflow: hidden;
			transition: all 0.6s;
			
			.emoOption{
				position: absolute;
				display: flex;
				justify-content: space-between;
				right: 30rpx;
				bottom: 30rpx;
				width: 260rpx;
				height: 80rpx;
				opacity: 1;
				transition: all 0.3s;
				.del{
					width: 45%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					// background-color: pink;
				}
				
				.send{
					width: 45%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 20rpx;
					background-color: #FFFFFF;
				}
			}
			.emoOptionHidden{
				opacity: 0;
			}
			
			.slider {
			    // width: 375;
			    height: 400rpx;
				font-size: 48rpx;
			    &-emoji {
			       width: 100%;
					display: flex;
			        flex-direction: row;
			        flex-wrap: wrap;
			        justify-content:space-evenly;
					
					// background-color: pink;
					
			        &-icon {
			            width: 15%;
			            text-align: center;
			            // padding: 10.5 0;
						padding: 5rpx;
			        }
			    }
			}
			//<!-- 设置最后一列左靠齐 -->
			.lastbox{
			    justify-content: center;
			}
		}
		
		.emoji_show{
			padding: 20rpx;
			height: 460rpx;
		}
		
		
	}
	.voice_bg{
		position: fixed;
		top: 0;
		bottom: 100rpx;
		left: 0;
		right: 0;
		z-index: 1001;
		background-color: rgba(0,0,0,0.3);
		
		
		.voice_time_box{
			height: 50%;
			display: flex;
			position: relative;
			align-items: flex-end;
			justify-content: center;
			.voice_time{
				width: 400rpx;
				height: 90rpx;
				text-align: center;
				line-height: 90rpx;
				border-radius: 50rpx;
				color: white;
				z-index: 1001;
				background-color: rgba(0,0,0,0.4);
			}
			.voice_time_mask{
				position: absolute;
				width: 0rpx;
				height: 90rpx;
				border-radius: 50rpx;
				transition: all 0.8s;
				background-color: #00ffff;
			}
		}
		
		.voice_del{
			height: 25%;
			display: flex;
			justify-content: center;
			align-items: center;
			// background-color: yellow;
			.del_btn{
				width: 150rpx;
				height: 150rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				
				background-color: rgba(0,0,0,0.4);
				
				i{
					color: white;
					font-size: 72rpx;
				}
				
				.delLight{
					color: red;
				}
			}
		}
		
		.del_text{
			height: 25%;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			// background-color: pink;
			color: white;
			
			span{
				padding-bottom: 20rpx;
			}
		}
	}
</style>
