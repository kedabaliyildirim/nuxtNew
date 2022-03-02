/* eslint-disable vue/multi-word-component-names */ // eslint-disable-next-line
vue/multi-word-component-names
<template>
  <div class="main-nuxt-class">
    <TheHeader />
    <Nuxt id="nuxt-main" style="height: 100%; min-height: 100%" />
    <TheFooter />
  </div>
</template>

<style scoped>
#nuxt-main {
  background-color: #0077b6;
  color: white;
  height: 100%;
  min-height: 100%;
}
</style>

<style>
html {
  height: 100%;
  min-height: 100%;
}
</style>
