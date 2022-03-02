<template>
  <section id="main-about-page">
    <About-page :aboutArticleProp="content" />
  </section>
</template>

<script>
import conf from '../conf'
export default {
  transition: 'about',

  head() {
    return { title: this.content.title }
  },
  async asyncData({ $content }) {
    const content = await $content(conf.ABOUTCONTENT).fetch()
    return { content }
  },
}
</script>
<style scoped>
.main-test {
  display: flex;
}

#main-about-page {
  height: 100%;
  min-height: 100%;
}

.about-enter-active,
.about-leave-active {
  transition: opacity 0.5s;
  transition: transform 0.2s;
}

.about-enter,
.about-leave-active {
  opacity: 0;
  transform: translate(50px, 50px);
}
</style>
