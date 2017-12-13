Vue.filter("formatMoney2", function(v,type){
	return "￥" + v.toFixed(2) + type;
});
var vm = new Vue({
	el: "#app",
	data: {
		totalMoney:0,
		productList:[],
		checkCount:0,
		checkAllFlag: false,
		delFlag:false,
		currentProduct:"",
		pindex:"",
	},
	filters: {
		formatMoney: function(v){
			return "￥" + v.toFixed(2);
		}
	},
	mounted: function(){
		this.$nextTick(function () {
	    	this.cartView();
	  })
		
	},
	methods: {
		cartView: function(){
			var _this=this;
			this.$http.get("data/cartData.json", {"id":123}).then(function(res){
				_this.productList = res.data.result.list;
			});
		},
		changeMoney: function(product, way){
			if(way>0){
				product.productQuantity++;
			}else{
				if(product.productQuantity>1){
					product.productQuantity--;
				}
			};
			this.calcTotalMoney();
		},
		selectedProduct: function(item){
			if(typeof item.check == 'undefined'){
				Vue.set(item,"check",true);
			}else{
				item.check = !item.check;
			};
			if(item.check){
				var _this = this;
				this.checkCount++;
				if(this.checkCount == this.productList.length){
					_this.checkAllFlag=true
				}
			}else{
				this.checkCount--;
				this.checkAllFlag=false;
			}
			this.calcTotalMoney();
		},
		checkAll: function(flag){
			if(flag){
				this.checkAllFlag = !this.checkAllFlag;
				var _this=this;
				if(this.checkAllFlag){
					_this.checkCount =_this.productList.length;
				}else{
					_this.checkCount = 0;
				}
			}else{
				this.checkCount=0;
				this.checkAllFlag = flag;
			};			
			var _this=this;
			this.productList.forEach(function(v,i){
				if(typeof v.check == 'undefined'){
					Vue.set(v,"check",_this.checkAllFlag);
				}else{
					v.check = _this.checkAllFlag;
				}
			});
			this.calcTotalMoney();

		},
		calcTotalMoney: function(){
			this.totalMoney = 0;
			var _this = this;
			this.productList.forEach(function(v,i){
				if(v.check){
					_this.totalMoney +=v.productQuantity*v.productPrice;
				}
			})
		},
		delConfirm: function(i){
			this.delFlag = true;
			this.currentProduct = i;
		},
		delProduct: function(){
			var index = this.productList.indexOf(this.currentProduct);
			this.productList.splice(index,1);
			this.delFlag = false;
		}
	}
});

