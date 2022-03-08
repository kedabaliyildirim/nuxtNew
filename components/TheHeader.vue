<template>
  <section class="mainNav">
    <p style="color: white">{{ showDropdownMenu }}</p>
    <NuxtLink id="nuxt-navbar-brand-link" to="/"
      ><nuxt-img class="logo" src="/brandLogo.png"></nuxt-img>
    </NuxtLink>
    <div class="navbar-links" v-for="page in content.pages" :key="page.id">
      <NuxtLink id="nuxt-navbar-link" :to="page.path"
        >{{ page.title }}
      </NuxtLink>
    </div>
    <!-- <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <NuxtLink
          class="navbar-dropdown-menu-links"
          v-for="page in content.pages"
          :key="page.id"
          :to="page.path"
          >{{ page.title }}</NuxtLink
        >
      </div>
    </div> -->
    <div class="dropdown" @mouseleave="showDropdownMenu = false">
      <div
        class="animatedDropDownSigns"
        @mouseover="showDropdownMenu = true"
        :class="{
          activeDropDown: showDropdownMenu,
        }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="dropdown-content">
        <NuxtLink
          class="navbar-dropdown-menu-links"
          v-for="page in content.pages"
          :key="page.id"
          :to="page.path"
          >{{ page.title }}</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script>
import conf from '../conf'

export default {
  data() {
    return { content: null, showDropdownMenu: false }
  },
  async fetch() {
    this.content = await this.$content(conf.CONTENT).fetch()
  },
}
</script>
