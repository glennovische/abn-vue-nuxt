<template>
  <div class="tile" :class="tileClass">
    <div v-if="hasIcon" class="em-icon em-icon-size-9" :class="iconClass"></div>
    <span><slot /></span>
  </div>
</template>

<script>
export default {
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
@import '~/assets/_emerald_variables.scss';

.tile {
  width: 100%;
  height: auto;
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
  box-shadow: $em-box-shadow-tile;
  &:last-of-type {
    margin-right: 0;
  }

  &.square {
    max-width: 200px;
    height: 100%;
    flex-direction: column;
    &.small {
      max-width: 150px;
      height: 150px;
    }

    &.medium {
      max-width: 200px;
      height: 200px;
    }

    &.large {
      max-width: 250px;
      height: 250px;
    }
  }

  &.small {
    height: 150px;
  }

  &.medium {
    height: 200px;
  }

  &.large {
    height: 250px;
  }

  &.round {
    border-radius: 50%;
  }
}
</style>
