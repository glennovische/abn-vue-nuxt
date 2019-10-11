<template>
  <header id="header" class="em-header-wrapper">
    <div class="em-header system bg-white">
      <div class="container-fluid em-page-grid">
        <div class="row">
          <div class="col-12">
            <div class="em-brand-wrapper mt-2">
              <nuxt-link to="/"><span class="em-brand"></span></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
.em-header-menu {
  background-image: linear-gradient(45deg, #005e5d, #00857a);
  background-color: #f2f7f7;

  .em-header-menu-item {
    flex-grow: 0 !important;

    .em-header-menu-link {
      color: #fff;
      padding: 12px 16px !important;
      font-weight: 400 !important;
      font-size: 1em;
      line-height: 1.5rem;
      white-space: nowrap;
      background: transparent;
    }
  }
}
</style>
