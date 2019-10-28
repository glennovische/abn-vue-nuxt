<template>
  <div>
    <HeaderComponent />
    <SubHeader />
    <Menu />
    <nuxt />
  </div>
</template>

<script>
import HeaderComponent from '~/modular/hza-header/pages/index'
import Menu from '~/components/menu'
import SubHeader from '~/components/SubHeader'

export default {
  components: {
    HeaderComponent,
    Menu,
    SubHeader
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_emerald_variables.scss';
body {
  background-color: $gm-50;
}

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
    &.active {
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
      cursor: pointer;
      background-color: $g-300;
      position: relative;
      box-shadow: $em-box-shadow-well;
      span {
        color: $white;
      }
    }
  }
}

.middle {
  background-color: $white;
  box-shadow: $em-box-shadow-well;
  &.no-bg {
    background-color: transparent;
    box-shadow: none;
  }
}

.bonnetje {
  background-color: $white;
  padding: $grid-gutter-width;
  box-shadow: $em-box-shadow-well;
}
</style>
