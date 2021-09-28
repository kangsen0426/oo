export default {
	friends:function(){
		let friendArr = [
			{
				id:2,
				imgUrl:'https://cn.bing.com/images/search?view=detailV2&ccid=Rmz40Cx%2b&id=1748F129F96E19879ADCDDF1C56971C7A4618015&thid=OIP.Rmz40Cx-4F1O8rTCGr_rUgHaFj&mediaurl=https%3a%2f%2ftse1-mm.cn.bing.net%2fth%2fid%2fR-C.466cf8d02c7ee05d4ef2b4c21abfeb52%3frik%3dFYBhpMdxacXx3Q%26riu%3dhttp%253a%252f%252fimg.1ppt.com%252fuploads%252fallimg%252f1604%252f4_160414100056_1.jpg%26ehk%3dB84Y%252bfuWdApXD52TUNUTHPB8d7BWM0psWgwU3pznutE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=495&expw=660&q=%e5%9b%be%e7%89%87&simid=608033284677400882&FORM=IRPRST&ck=D1B04261272CA6404AB05DF69F5112EF&selectedIndex=43&qpvt=%e5%9b%be%e7%89%87',
				name:'小张',
				count:4,
				message:"今天天气不错",
				email:"2983973848@qq.com",
				time:new Date()
			},
			{
				id:3,
				imgUrl:'https://cn.bing.com/images/search?view=detailV2&ccid=u6R%2f0eZN&id=04246A876B8349DF4F4FA5BF7D4E30BBA035C9B8&thid=OIP.u6R_0eZNCgPaI6o9v35RZgHaE0&mediaurl=https%3a%2f%2ftse1-mm.cn.bing.net%2fth%2fid%2fR-C.bba47fd1e64d0a03da23aa3dbf7e5166%3frik%3duMk1oLswTn2%252fpQ%26riu%3dhttp%253a%252f%252ffile06.16sucai.com%252f2018%252f0829%252f7486341020358d748ad617ba22e25615.jpg%26ehk%3dvpxzA8cvXF%252fla7Sb7MpyRO5q17vu1t1VToobSMNdI9E%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=715&expw=1100&q=%e5%9b%be%e7%89%87&simid=608028285333341898&FORM=IRPRST&ck=1A687E1D06AE1DED1F9BAD91F1929481&selectedIndex=51&qpvt=%e5%9b%be%e7%89%87',
				name:'小刘',
				count:9,
				message:"发哈警方哈吉",
				email:"2983973848@qq.com",
				time:new Date()
			},
			{
				id:4,
				imgUrl:'https://cn.bing.com/images/search?view=detailV2&ccid=sznTOkKd&id=DE40A9AF4DDFE022E869DA79D2E7E75F8ACE3678&thid=OIP.sznTOkKd1cz2oHS9XAaZqQHaDt&mediaurl=https%3a%2f%2fimg95.699pic.com%2fphoto%2f40010%2f7374.jpg_wh860.jpg&exph=430&expw=860&q=%e5%9b%be%e7%89%87&simid=608011161297645414&FORM=IRPRST&ck=E46EF903EED3FE03FC776EB6D19E192D&selectedIndex=92',
				name:'小王',
				count:1,
				message:"你感觉呢各级青年",
				email:"2983973848@qq.com",
				time:new Date()
			},
			{
				id:5,
				imgUrl:'https://cn.bing.com/images/search?view=detailV2&ccid=9QBzdYQ7&id=932C8B624CB4ADB844272304AE2CB65CF6232F4C&thid=OIP.9QBzdYQ78peaTObUNzrjswHaFj&mediaurl=https%3a%2f%2ftse1-mm.cn.bing.net%2fth%2fid%2fR-C.f5007375843bf2979a4ce6d4373ae3b3%3frik%3dTC8j9ly2LK4EIw%26riu%3dhttp%253a%252f%252fwww.pp3.cn%252fuploads%252f20120501lw%252f43.jpg%26ehk%3dt7htwT9NhDY7H2dulWNpVsD2Pspvq6SLB3BggL0bOuY%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1600&q=%e5%9b%be%e7%89%87&simid=608029732738592608&FORM=IRPRST&ck=297DCA95BB92EFCE28F6CE39A2C642F8&selectedIndex=131',
				name:'小美',
				count:8,
				message:"给oh琼海发过去吧",
				email:"2983973848@qq.com",
				time:new Date()
			},
			{
				id:6,
				imgUrl:'https://cn.bing.com/images/search?view=detailV2&ccid=Rmz40Cx%2b&id=1748F129F96E19879ADCDDF1C56971C7A4618015&thid=OIP.Rmz40Cx-4F1O8rTCGr_rUgHaFj&mediaurl=https%3a%2f%2ftse1-mm.cn.bing.net%2fth%2fid%2fR-C.466cf8d02c7ee05d4ef2b4c21abfeb52%3frik%3dFYBhpMdxacXx3Q%26riu%3dhttp%253a%252f%252fimg.1ppt.com%252fuploads%252fallimg%252f1604%252f4_160414100056_1.jpg%26ehk%3dB84Y%252bfuWdApXD52TUNUTHPB8d7BWM0psWgwU3pznutE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=495&expw=660&q=%e5%9b%be%e7%89%87&simid=608033284677400882&FORM=IRPRST&ck=D1B04261272CA6404AB05DF69F5112EF&selectedIndex=43&qpvt=%e5%9b%be%e7%89%87',
				name:'小六',
				count:4,
				message:"今天天气不错",
				email:"2983973848@qq.com",
				time:new Date()
			},
			
			
			
		];
		
		return friendArr;
	},
	//好友关系表
	isFriend:function(){
		let isfriend = [
			{
				userid:1,
				friend:2
			},
			{
				userid:1,
				friend:3
			},
			{
				userid:1,
				friend:5
			},
		]
		
		return isfriend
	},
	
	//聊天记录
	chatMessage:function(){
		let message = [
			{
					id: 'a', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '近似的和好的办法似乎很嗲还不能覅汉诺夫卡你发你覅发', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频
					tip: 1, //第几条消息
					time: new Date() - 1000 * 60 * 60
				},
				{
					id: 'b', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: 'sdasdsa速度', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频
					tip: 2, //第几条消息
					time: new Date() - 1000 * 60 * 57
				},
				{
					id: 'a', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '不是那你发', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频
					tip: 3, //第几条消息
					time: new Date() - 1000 * 60 * 43
				},
				{
					id: 'a', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '../../static/image/person.jpg', //信息，可以是图片链接，视频链接等等
					type: 1, //消息的类型  0 文字  1 图片  2 视频
					tip: 4, //第几条消息
					time: new Date() - 1000 * 60 * 42
				},
				{
					id: 'b', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '方法发发发嘎嘎叫', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频
					tip: 5, //第几条消息
					time: new Date() - 1000 * 60 * 42
				},
				{
					id: 'a', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '啊啊的发', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频
					tip: 6, //第几条消
					time: new Date() - 1000 * 60 * 40
				},
				{
					id: 'b', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '../../static/image/logo.png', //信息，可以是图片链接，视频链接等等
					type: 1, //消息的类型  0 文字  1 图片  2 视频
					tip: 7, //第几条消息
					time: new Date() - 1000 * 60 * 30
				},
				{
					id: 'a', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '近似的和好的办法似乎很嗲还不能覅汉诺夫卡你发你覅发', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频
					tip: 8, //第几条消息
					time: new Date() - 1000 * 60 * 25
				},
				{
					id: 'b', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '阿斯顿发哈法国帮帮', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频
					tip: 9, //第几条消息
					time: new Date() - 1000 * 60 * 22
				},
				{
					id: 'a', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '给你上帝宾馆附近', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 10, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
				{
					id: 'b', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: 'adadgfggg', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 11, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
				{
					id: 'b', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '案说法户籍卡是否', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 12, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
				{
					id: 'b', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: 'adadgfggg', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 13, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
				{
					id: 'a', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '安抚那就阿富汗', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 14, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
				{
					id: 'b', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '啊发发给', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 15, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
				{
					id: 'a', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: '给我行家给你发几个你', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 16, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
				{
					id: 'b', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: 'afamask的功能', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 17, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
				{
					id: 'a', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: 'fgajshgjas', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 18, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
				{
					id: 'b', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: 'afamask按返回键啊', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 19, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
				{
					id: 'a', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: 'asfhj 阿法狗那就看', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 20, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
				{
					id: 'b', //用户 id
					imgurl: '../../static/image/person.jpg',
					message: 'afamaskfak反感基本覆盖把大部分国家打包价格吧啊不过看吧等级不够按点击空白官方尽快把十点半进口报关金卡戴珊不过就按表达式公开八十八给金卡打不过卡不卡给把科比喀巴空军给把科比个卡比开噶包括给把科比给吧', //信息，可以是图片链接，视频链接等等
					type: 0, //消息的类型  0 文字  1 图片  2 视频 3 音频 4 位置
					tip: 21, //第几条消息
					time: new Date() - 1000 * 60 * 10
				},
			
		]
		
		return message;
	}
}