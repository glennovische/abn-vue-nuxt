<template>
  <nav>
    <ul
      class="container d-flex justify-content-between align-items-center h-100"
    >
      <li><nuxt-link to="/">Dashboard</nuxt-link></li>
      <li><nuxt-link to="/hza-over-ons">Over ons</nuxt-link></li>
      <li><nuxt-link to="/hza-woning">Woning</nuxt-link></li>
      <li><nuxt-link to="/hza-situatie">Situatie</nuxt-link></li>
      <li><nuxt-link to="/hza-hypotheek">Hypotheek</nuxt-link></li>
      <li><nuxt-link to="/hza-documenten">Documenten</nuxt-link></li>
      <li><nuxt-link to="/hza-historie">Historie</nuxt-link></li>
      <li><nuxt-link to="/hza-advies">Advies</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/_emerald_variables.scss';

nav {
  box-shadow: $em-box-shadow-well;
  background-color: $gm-50;
  height: 48px;
}

.nuxt-link-exact-active {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  &:after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 2px solid $g-300;
  }
}

li {
  list-style: none;
  color: $g-300;
  height: 100%;
  display: flex;
  padding: 0 16px;
  align-items: center;
}
</style>
