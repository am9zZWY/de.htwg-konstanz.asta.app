<template>
  <nav class="nav">
    <router-link to="Home" class="big-link important-text">ÜBERSICHT</router-link>
  </nav>
  <keep-alive>
    <router-view />
  </keep-alive>
</template>

<style src="./styles/main.scss" lang="scss" />
