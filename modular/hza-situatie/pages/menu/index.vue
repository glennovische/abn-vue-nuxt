<template>
  <div class="sidebar left col-3">
    <span class="title">Intro</span>
    <ul>
      <li>
        <nuxt-link to="/agenda"><span>Agenda</span></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/hza-situatie"><span>Uw situatie</span></nuxt-link>
      </li>
    </ul>
    <span class="title">Hypotheek samenstellen</span>
    <ul>
      <li>
        <nuxt-link to="/hypotheek-samenstellen/hypotheek-bedrag">
          <span>Hypotheek bedrag</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/hypotheek-samenstellen/eigen-middelen">
          <span>Eigen middelen</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/hza-hypotheek/samenstellen/productvormen">
          <span>Productvormen</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/hza-hypotheek/samenstellen/aflosvormen">
          <span>Aflosvormen</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/hypotheek-samenstellen/hypotheek-samenstellen">
          <span>Hypotheek samenstellen</span>
        </nuxt-link>
      </li>
    </ul>
    <span class="title">Mijn hypotheek</span>
    <ul>
      <li>
        <nuxt-link to="/hza-hypotheek/berekeningen/opgeslagen-berekeningen">
          <span>Opgeslagen berekeningen</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/_emerald_variables.scss';

span {
  &.title {
    color: #5a6f6f;
    font-weight: bold;
    display: block;
    margin-top: 32px;
    &:first-of-type {
      margin-top: 0;
    }
  }
}

ul {
  padding: 0;
  margin: 0;
  li {
    height: 40px;
    list-style: none;
    display: flex;
    color: $g-400;
    align-items: center;
    a {
      width: 100%;
      height: 40px;
      list-style: none;
      display: flex;
      color: $g-400;
      align-items: center;
      &.nuxt-link-exact-active {
        background-color: $white;
        position: relative;
        box-shadow: $em-box-shadow-well;
        &:before {
          content: '';
          height: 100%;
          width: 4px;
          background-color: $g-300;
        }
        span {
          font-weight: 500;
          color: $n-670;
        }
      }
      span {
        padding-left: 12px;
        color: $g-400;
      }
      &:hover {
        background-color: $g-300;
        position: relative;
        box-shadow: $em-box-shadow-well;
        span {
          color: $white;
        }
      }
    }
  }
}
</style>
