<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <NuxtLink id="nuxt-navbar-brand-link" to="/"
        ><nuxt-img class="logo" src="/brandLogo.png"></nuxt-img>
      </NuxtLink>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-for="page in content.pages" :key="page.id">
          <NuxtLink id="nuxt-navbar-link" :to="page.path"
            >{{ page.title }}
          </NuxtLink>
          &nbsp; &nbsp;
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Menu" right>
            <!-- <ul>
              <li>
                <nuxt-link to="/">{{ content.index.title }}</nuxt-link>
              </li>
              <li v-for="page in content.pages" :key="page.id">
                <nuxt-link :to="page.path">{{ page.title }}</nuxt-link>
              </li>
            </ul> -->
            <b-dropdown-item
              v-for="page in content.pages"
              :key="page.id"
              :href="page.path"
              ><NuxtLink id="nuxt-navbar-dropdown-link" :to="page.path">{{
                page.title
              }}</NuxtLink></b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import conf from '../conf'

export default {
  data() {
    return { content: null }
  },
  async fetch() {
    this.content = await this.$content(conf.CONTENT).fetch()
  },
}
</script>

<style scoped>
.logo {
  height: 35px;
  width: 124px;
}
</style>
