<template>
  <div>
    <h1>Wat gaan we bespreken</h1>
    <Logo />
    <div class="tile">
      <div class="em-icon em-icon-size-5 pr-wallets-wallet"></div>
      Eigen middelen
    </div>
    <button class="btn btn-primary">
      Starten met de hypotheek samenstelling
    </button>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
export default {
  name: 'Hypotheek',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/_emerald_variables.scss';

.tile {
  box-shadow: $em-box-shadow-tile;
}
</style>
