<template>
  <div>
    <HeaderComponent />
    <SubHeader />
    <MainMenu />
    <div class="container-fluid em-page-grid mt-5">
      <div class="row">
        <Menu />
        <nuxt />
        <Output />
      </div>
    </div>
  </div>
</template>

<script>
// Modulars
import HeaderComponent from '~/modular/hza-header/pages/index'
import Menu from '~/modular/hza-situatie/pages/menu/index'
import Output from '~/modular/hza-situatie/pages/output/index'

// Components
import SubHeader from '~/components/SubHeader'
import MainMenu from '~/components/menu'

export default {
  name: 'Situatie',
  components: {
    Menu,
    MainMenu,
    Output,
    HeaderComponent,
    SubHeader
  }
}
</script>

<style lang="scss" scoped></style>
