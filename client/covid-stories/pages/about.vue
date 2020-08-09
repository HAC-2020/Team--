<template>
  <div class="main">
    <Logo />
    <h1 class="title">
      Covid Stories
    </h1>
    <div class="links">
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="button--green"
      >
        Documentation
      </a>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        rel="noopener noreferrer"
        class="button--grey"
      >
        GitHub
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // @ts-ignore Issue with nuxt/vue-meta
  head () {
    return {
      title: 'About',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'About page.',
          name: 'About',
          content: 'Description of this website.'
        }
      ]
    }
  }
})
</script>

<style scoped>
.main {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

</style>
