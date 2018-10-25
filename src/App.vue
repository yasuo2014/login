<template>
  <el-container>
    <el-header class="header" height="100px">
      <h3>My Host</h3>
      <p>vue考试题</p>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .header{
    background-color: rgb(64, 255, 121);
    color: black;
  }
  h3{
    text-align: center
  }
  p{
    text-align: center
  }
</style>