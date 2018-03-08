<template>
  <div class="pos-layout">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs v-model="activeName" >
          <el-tab-pane label="点餐" name="first" >
            <el-table :data="tableData" border>
              <el-table-column prop="goodsName" label="商品" align="center"></el-table-column>
              <el-table-column prop="count" label="数量" align="center" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" align="center" width="70"></el-table-column>
              <el-table-column  label="操作" align="center" width="120" fixed="right">
                <template slot-scope="scope"><!-- scope是element的固定写法 是模板作用域 用scope.row相当于把当前行的数据传入-->
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="total">数量：{{totalCount}} 总金额：{{totalMoney}}</div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单" name="second">挂单</el-tab-pane>
          <el-tab-pane label="外卖" name="third">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="title">常用商品</div>
        <div class="often-goods-list">
          <ul>
            <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
              <span>{{goods.goodsName}}</span>
              <span class="o-price">￥{{goods.price}}元</span>
            </li>
          </ul>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class='cookList'>
                <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class='cookList'>
                <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class='cookList'>
                <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class='cookList'>
                <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                  <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                  <span class="foodName">{{goods.goodsName}}</span>
                  <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from 'axios' //哪里需要用 就在哪里引入
export default {
  name:'Pos',
  data(){
    return{
      activeName: 'first',
      tableData:[
        // {
        //   goodsName:"可口可乐",
        //   count:100,
        //   price:3
        // }
      ],
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      totalCount:0,
      totalMoney:0


    }
  },
  created:function(){
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    .then(response=>{
      this.oftenGoods = response.data;
    })
    .catch(error=>{
      console.log('网络错误 无法访问')
    });
    axios.get('http://jspang.com/DemoApi/typeGoods.php')
    .then(response=>{
      this.type0Goods = response.data[0];
      this.type1Goods = response.data[1];
      this.type2Goods = response.data[2];
      this.type3Goods = response.data[3];
    })
    .catch(error=>{
      console.log('网络错误 无法访问')
    });
  },
  methods:{
    //添加订单列表的方法
    addOrderList(goods){
      this.totalCount=0;
      this.totalMoney=0;
      let isHave = false;
      //console.log(goods);
      //判断这个商品是否已经存在于订单列表
      for(let i=0; i<this.tableData.length; i++){
        if(this.tableData[i].goodsId==goods.goodsId){
          isHave = true;
        }
      }
      //根据isHave的值判断订单列表中是否已经有此商品
      if(isHave){
        //存在就进行数量添加
        let arr = this.tableData.filter(v=>v.goodsId==goods.goodsId)  //把存在的这个商品过滤出来
        arr[0].count++;  //对它的count值进行++
      }else{
        //不存在就推入数组
        let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
        this.tableData.push(newGoods);
      }
      //进行数量和价格的汇总计算
      this.tableData.forEach(v=>{
        this.totalCount+=v.count;
        this.totalMoney+=v.count*v.price;
      })
    }
  }
  // mounted:function(){
  //   var orderHeight = document.body.clientHeight;
  //   document.getElementById("order-list").style.height = orderHeight+"px";
  // }
}
</script>
<style>
.pos-layout{height: 100%;}
.pos-layout .el-row{height: 100%;}
.pos-order{ background: #f9fafc; border-right: 1px solid #c0ccda;height: 100%; min-height: 658px;}
#tab-first{margin-left: 20px;}
.el-tabs__active-bar{left:20px;}
.div-btn{margin-top: 10px;}
.title{
      height: 20px;
      border-bottom:1px solid #D3DCE6;
      background-color: #F9FAFC;
      padding:10px;
  }
.often-goods-list ul li{
  list-style: none;
  float:left;
  border:1px solid #E5E9F2;
  padding:10px;
  margin:5px;
  background-color:#fff;
  cursor: pointer;
}
.o-price{
    color:#58B7FF;
  }
.goods-type{
  clear: both;
}
#tab-0{margin-left: 20px;}
.cookList{
  padding: 20px 4%;
  float: left;
  width: 92%;
}
.cookList li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 5px;
    cursor: pointer;

}
.cookList li span{

    display: block;
    float:left;
}
.foodImg{
    width: 40%;
}
.foodName{
    font-size: 18px;
    color:brown;
    padding-top:5px;
    width: 56%;
    margin-left: 4%;
    text-align: left;
}
.foodPrice{
    font-size: 16px;
    padding-top:10px;
    width: 56%;
    margin-left: 4%;
    text-align: left;
}
.total{
  background: #fff;
  padding:20px 0;
  border-bottom: 1px solid #ebeef5;
}
</style>


