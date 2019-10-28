<template>
  <nav>
    <ul
      class="container d-flex justify-content-between align-items-center h-100"
    >
      <li><nuxt-link to="/">Dashboard</nuxt-link></li>
      <li><nuxt-link to="/hza-woning">Over on</nuxt-link></li>
      <li><nuxt-link to="/hza-woning">Woning</nuxt-link></li>
      <li><nuxt-link to="/hza-woning">Situatie</nuxt-link></li>
      <li><nuxt-link to="/hza-woning">Hypotheek</nuxt-link></li>
      <li><nuxt-link to="/hza-woning">Documenten</nuxt-link></li>
      <li><nuxt-link to="/hza-woning">Historie</nuxt-link></li>
      <li><nuxt-link to="/hza-woning">Advies</nuxt-link></li>
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

.nuxt-link-active {
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
