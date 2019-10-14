<template>
  <div class="tile" :class="tileClass" v-bind="$attrs" v-on="$listeners">
    <div v-if="hasIcon" class="em-icon em-icon-size-9" :class="iconClass"></div>
    <span><slot /></span>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    tileClass: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    },
    hasIcon: {
      type: Boolean
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_emerald_variables.scss';

.tile {
  max-width: 200px;
  height: 200px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
  box-shadow: $em-box-shadow-tile;
  &:last-of-type {
    margin-right: 0;
  }
}
</style>
