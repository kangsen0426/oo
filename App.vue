<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
	
	uni.addInterceptor('request', {
	  invoke(args) {
	    // request 触发前拼接 url 
	    // args.url = 'http://192.168.0.101'+args.url
	    args.url = 'http://q4f3349258.zicp.vip'+args.url
		
		// console.log(args)
	  },
	  success(args) {
	    // 请求成功后，修改code值为1
	   // console.log("111")
	   // console.log(args);
	   if(args.data.status === 500){
			uni.showToast({
				icon:"error",
				title:"请求出错"
			})
	   }
	  }, 
	  fail(err) {
	    // console.log('interceptor-fail',err)
	  }, 
	  complete(res) {
	    // console.log('interceptor-complete',res)
	  }
	})
</script>

<style>
	/*每个页面公共css */
	@import "./common/iconfont/iconfont.css";
</style>
