<script setup>
</script>

<template>
  <div>
    <router-link to="/my-vue-app/foods">Foods</router-link> | 
    <router-link to="/my-vue-app/profile">Profile</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>