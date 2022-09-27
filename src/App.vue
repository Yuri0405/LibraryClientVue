<script setup>
import MainPage from "./components/MainPage.vue"
</script>

<template>
  <div class="libraryheader">
    <h1>Library</h1>
    <div class="topnav">
      <router-link to="/" class="topnav-elem">Home</router-link>
      <router-link to="/books" class="topnav-elem">Books</router-link>
      <router-link to="/about" class="topnav-elem">About</router-link>
      <div style="float:right;">
        <router-link to="/login" class="topnav-elem">Login</router-link>|
        <router-link to="/signin" class="topnav-elem">SignIn</router-link>
      </div>
    </div>
  </div>
  <router-view />
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
.topnav-elem {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
</style>
