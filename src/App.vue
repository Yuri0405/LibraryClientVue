<script setup>
import MainPage from "./components/MainPage.vue"
</script>

<template>
  <div class="libraryheader">
    <h1>Library</h1>
  </div>
  <MainPage/>
</template>

<style scoped>
.libraryheader
{
  height: 100px;
  width: 100%;
  background-color: aqua;
}
.topnav {
  background-color: #333;
  overflow: hidden;
}
.topnav span {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
</style>
