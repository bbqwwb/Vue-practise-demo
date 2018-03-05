<template>
    <ul class="topbars">
        <!-- <li><a href="javascript:void(0)" @click="changePwd"><span class="fa fa-unlock-alt"></span><span>修改密码</span></a></li> -->
        <li><a href="javascript:void(0)" ><span class="fa fa-power-off"></span><span>退出</span></a></li>
    </ul>
</template>

<script>
// import * as types from '@/store/mutation-types'
export default {
    name: 'topbars',
    // methods:{
    //     logout(){
    //         this.$store.commit(types.AUTH_LOGOUT);
    //     },
    //     changePwd(){
    //         this.$router.push({path:"/main/myPassword"})
    //     }
    // },
}
</script>
