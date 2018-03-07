<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="iconfont icon-goumai"></i>
        <p>收银</p>
      </li>
      <li>
        <i class="iconfont icon-shangjia"></i>
        <p>店铺</p>
      </li>
      <li>
        <i class="iconfont icon-canyin"></i>
        <p>商品</p>
      </li>
      <li>
        <i class="iconfont icon-quan"></i>
        <p>会员</p>
      </li>
      <li>
        <i class="iconfont icon-tubiaofenxi"></i>
        <p>统计</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'leftNav'
}
</script>
<style>
.left-nav{
  color: #fff;
  font-size: 10px;
  height: 100%;
  width: 5%;
  float: left;
  background: #1D8ce0;
}
.iconfont{
  font-size: 24px;
}
.left-nav ul{
padding:0;
margin:0;
}
.left-nav li{
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding:10px;
}
</style>

