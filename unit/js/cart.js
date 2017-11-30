var vm = new Vue({
	el:"#app",
	data:{
		productList:[],
		totalMoney:0,
		checkAllFlag:false,
		delFlag:false,
		curProduce:''
	},
	filters:{
		formatMoney:function(value){
			return "￥ " + value.toFixed(2);
		}

	},
	mounted:function(){
		this.$nextTick(function(){
			this.cartView();
		});
		
	},
	methods:{
		cartView: function(){
			var _this = this;
			 this.$http.get("data/cartData.json").then(function(res){
			 	_this.productList = res.data.result.list;
			 });
		},
		changeMoney: function(product, way){
			if(way>0){
				product.productQuantity++;
			}else{
				product.productQuantity--;
				if(product.productQuantity<1){
					product.productQuantity = 1;
				}
			}
			this.calcTotalPrice();
		},
		selectProduct:function(item){
			if(typeof item.checked == 'undefined'){
				Vue.set(item, 'checked', true);
			}else{
				item.checked = !item.checked;
			}
			this.calcTotalPrice();
		},
		checkAll:function(){
			this.checkAllFlag = !this.checkAllFlag;
			var _this = this;
			this.productList.forEach(function(item,index){
				if(typeof item.checked == 'undefined'){
					Vue.set(item, 'checked', true);
				}else{
					item.checked = _this.checkAllFlag;
				}
			});
			this.calcTotalPrice();
		},
		calcTotalPrice: function(){
			this.totalMoney = 0;
			var _this = this;
			this.productList.forEach(function(item,index){
				if(item.checked){
					_this.totalMoney += item.productPrice*item.productQuantity;
				}
			});
		},
		delConfirm:function(item){
			this.delFlag = true;
			this.curProduce = item;
			
		},
		delProduct:function(){
			var index = this.productList.indexOf(this.curProduce);
			this.productList.splice(index,1);
			this.delFlag = false;
		}
	}

})