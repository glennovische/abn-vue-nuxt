<template>
  <header id="header" class="em-header-wrapper">
    <div class="em-header system bg-white">
      <div class="container-fluid em-page-grid">
        <div class="row">
          <div class="col-12">
            <div class="em-brand-wrapper mt-2">
              <span class="em-brand"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar p-0 em-header-menu">
      <div class="container-fluid em-page-grid">
        <div class="em-cutout d-none d-lg-block"></div>
        <ul class="col navbar-nav em-header-menu-container d-none d-md-flex">
          <li class="nav-item em-header-menu-item text-center">
            <router-link
              class="nav-link em-header-menu-link d-flex flex-column flex-md-row"
              to="/"
            >
              Overzicht
            </router-link>
          </li>
          <li class="nav-item em-header-menu-item text-center">
            <router-link
              class="nav-link em-header-menu-link d-flex flex-column flex-md-row"
              to="/over-ons"
            >
              Over ons
            </router-link>
          </li>
          <li class="nav-item em-header-menu-item text-center">
            <a
              class="nav-link em-header-menu-link d-flex flex-column flex-md-row"
              href="/"
            >
              <span class="em-header-link-text">Nieuwe woning</span>
            </a>
          </li>
          <li class="nav-item em-header-menu-item text-center">
            <a
              class="nav-link em-header-menu-link d-flex flex-column flex-md-row"
              href="/"
            >
              <span class="em-header-link-text">Mijn situatie</span>
            </a>
          </li>
          <li class="nav-item em-header-menu-item text-center">
            <router-link
              class="nav-link em-header-menu-link d-flex flex-column flex-md-row"
              to="/hypotheek-samenstellen"
            >
              Mijn hypotheek keuze
            </router-link>
          </li>
          <li class="nav-item em-header-menu-item text-center">
            <a
              class="nav-link em-header-menu-link d-flex flex-column flex-md-row"
              href="/"
            >
              <span class="em-header-link-text">Documenten</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header-component'
};
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
