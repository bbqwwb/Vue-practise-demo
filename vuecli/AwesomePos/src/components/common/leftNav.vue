<template>
  <div class="left-nav">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-goumai"></use>
        </svg>
        <p>收银</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangjia"></use>
        </svg>
        <p>店铺</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-canyin"></use>
        </svg>
        <p>商品</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-quan"></use>
        </svg>
        <p>会员</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tubiaofenxi"></use>
        </svg>
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
.icon {
    width: 3em; height: 3em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>

