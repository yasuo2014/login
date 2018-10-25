<template>
    <div id="hh">
        <h1>Welcome</h1>
        <span v-if="user">
            <el-button type="warning" @click="logout">注销</el-button>
        </span>
        <el-button v-else id="bs" type="primary"  @click="login">点击登录</el-button>
        
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$router.replace('/login')
            },
            logout(){
                this.$store.dispatch('logout').then(()=>{
                    this.$router.replace('/login')
                })
            }
        },
        computed:{
            user(){
                return this.$store.state.user
            }
        }
    }
</script>
<style>
div h1{
    text-align: center  
}
#bs {
    margin-left:46%;
}
#hh{
    background-color: #4ac1df
}
</style>