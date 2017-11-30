new Vue({
	el:'.container',
	data:{
		addressList:[],
		limitNum:3,
		currentIndex:0,
		shipValue:1,
	},
	mounted: function(){
		this.$nextTick(function(){
			this.getAddressList();
		});
	},
	computed:{
		limitAddressList:function(){
				return this.addressList.slice(0, this.limitNum);
			}
	},
	methods: {
		getAddressList:function(){
			var _this = this;
			this.$http.get("data/address.json").then(function(res){
				if(res.data.status =="0"){
					_this.addressList = res.data.result;
				}
			});
		},
		setDefault:function(addressid){
			this.addressList.forEach(function(item, index){
				if(item.addressId == addressid){
					item.isDefault = true;
				}else{
					item.isDefault = false;
				}
			});
		}
	},
});