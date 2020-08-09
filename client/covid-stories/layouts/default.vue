<template>
  <div>
    <nav class="navbar sticky-top navbar-light border-bottom">
      <div class="container my-1">
        <span class="row align-items-center">
          <nuxt-link
            v-for="navItem in navItems"
            :key="navItem.route"
            :to="navItem.route"
            class="col"
          >
             <span class="navbar--link">
               {{ navItem.label }}
            </span>
          </nuxt-link>
        </span>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavItems } from '../types'

export default Vue.extend({
  data () {
    return {
      // Ordered
      navItems: [
        {
          label: 'Covid Stories',
          route: '/',
        },
        {
          label: 'About',
          route: '/About',
        },
      ] as NavItems
    }
  }
})
</script>

<style>
/* Global css is here */

:root {
  --off-black: #333;
  --white: hsla(0, 0%, 100%, 1);
  --middle-blue-green: hsla(165, 56%, 69%, 1);
  --aquamarine: hsla(153, 100%, 82%, 1);
  --melon: hsla(5, 100%, 81%, 1);
  --light-coral: hsla(359, 100%, 70%, 1);
}

nav {
  border-bottom: 2px solid LightGray;
  white-space: nowrap;
}

nav nuxt-link {
  font-size: 7rem;
  color: var(--off-black);
  display: inline-block;
  white-space: normal;

}

.nav-active,
.nav-exact-active {
  color: var(--light-coral);
}

.navbar--link {
  font-size: 0.8rem;
  color: var(--off-black);
  font-weight: bold;
}

.navbar--link:link,
.navbar--link:visited,
.navbar--link:hover,
.navbar--link:active {
  color: var(--off-black);
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 1rem;
  color: var(--black);
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
