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
                <template slot-scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
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
      <el-col :span="17">产品栏</el-col>
    </el-row>
  </div>
</template>
<script>

export default {
  name:'Pos',
  data(){
    return{
      activeName: 'first',
      tableData:[
        {
          goodsName:"可口可乐",
          count:100,
          price:3
        },{
          goodsName:"香辣鸡腿堡",
          count:90,
          price:12.5
        },{
          goodsName:"爱心薯条",
          count:190,
          price:8
        },{
          goodsName:"甜筒",
          count:60,
          price:4
        },
      ]
    }
  },
  // mounted:function(){
  //   var orderHeight = document.body.clientHeight;
  //   document.getElementById("order-list").style.height = orderHeight+"px";
  // }
}
</script>
<style>
.pos-layout{height: 100%;}
.pos-layout .el-row{height: 100%;}
.pos-order{ background: #f9fafc; border-right: 1px solid #c0ccda;height: 100%;}
#tab-first{margin-left: 20px;}
.el-tabs__active-bar{left:20px;}
.div-btn{margin-top: 10px;}
</style>


