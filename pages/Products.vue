<template>
  <Product-Page :productProps="content"></Product-Page>
</template>

<script>
import conf from '../conf'
export default {
  transition: 'products',
  async asyncData({ $content }) {
    const content = await $content(conf.PRODUCTCONTENT).fetch()
    return { content }
  },
}
</script>

<style scoped>
.products-enter-active,
.products-leave-active {
  transition: opacity 0.5s;
  transition: transform 0.2s;
}

.products-enter,
.products-leave-active {
  opacity: 0;
  transform: translate(50px, 50px);
}
</style>
