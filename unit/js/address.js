new Vue({
	el:".address",
	data:{
		limitNum:3,
		addressList:[],
		currentControl:false,
		currentItem:0,
		delFlag:false,
		delCurrentItem:0,
		shippingFlag:1
	},
	mounted:function(){
		this.$nextTick(function(){
			this.getAddress();
		})
	},
	computed:{
		addressLimit:function(){
			return this.addressList.slice(0, this.limitNum);
		}
	},
	methods:{
		getAddress:function(){
			var _this = this;
			this.$http.get('data/address.json').then(function(response){
				var res = response.data;
				if(res.status == 0){
					_this.addressList = res.result;	
				}
			})
		},
		checkCurrent:function(index){
			if(this.currentControl==false){
				this.currentItem=index;
			}else{
				this.currentControl=false;
			}
		},
		setDefault:function(item){
			var index=0;
			this.addressList.forEach(function(v,i){
				if(item.addressId===v.addressId){
					v.isDefault=true;
					index=i;
				}else{
					v.isDefault=false;
				}
			})
			var checkItem=this.addressList.slice(index,index+1);//保存当前点击的地址
			this.addressList.splice(index,1);//删除当前点击的地址
			this.addressList.splice(0,0,checkItem[0]);//把保存下来的地址插入到addressList首位
			this.currentControl=true;//给setDefault方法运行后加一个标识（因为点击删除的同时点击了外层的div，所以还会执行checkCurrent）
			this.currentItem=0;//控制选中首位
		},
		delConfirm:function(i){
			this.delFlag=true;
			this.delCurrentItem=i;
		},
		deleteAddress:function(){
			this.addressList.splice(this.delCurrentItem,1);
			this.delFlag=false;
		},
	}
});