<template>
  <section>
    <Home-page :firstArticleProp="content" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import conf from '../conf'
import HomePage from '~/components/Home-page.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { HomePage },
  transition: 'home',
  async asyncData({ $content }) {
    const content = await $content(conf.CONTENT).fetch()
    return { content }
  },
})
</script>

<style scoped>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
  transition: transform 0.2s;
}

.home-enter,
.home-leave-active {
  opacity: 0;
  transform: translate(50px, 50px);
}
</style>
