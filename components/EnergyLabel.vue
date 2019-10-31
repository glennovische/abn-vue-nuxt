<template>
  <div>
    <div class="energy-label">
      <slot />
      <span class="triangle"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnergyLabel'
}
</script>

<style lang="scss" scoped>
@import '~/assets/_emerald_variables.scss';

.energy-label {
  max-width: 110px;
  min-height: 20px;
  text-align: left;
  margin: 0 auto;
  padding: 0 5px;
  position: relative;
  background-color: #78a343;

  .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 11px 0 10px 10px;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-right-color: transparent;

    position: absolute;
    right: -10px;
    top: 0;
    bottom: 0;
    border-left-color: #78a343;
  }
}
</style>
