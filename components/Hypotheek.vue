<template>
  <div>
    <div
      v-for="(mortgage, index) in mortgages"
      :key="index"
      class="card mortgage-outcome"
      :value="mortgage.id"
    >
      <div class="card-header">
        <div class="edit em-icon em-icon-size-4 sy-tools-pencil"></div>
        <div
          v-if="hasIcon"
          class="icon em-icon em-icon-size-9"
          :class="mortgage.icon"
        ></div>
        <div class="title color-white">
          {{ mortgage.title }}
        </div>
        <div class="color-white">
          <span class="interest">
            10 jaar vast
          </span>
          |
          <span>
            1,68%
          </span>
        </div>
      </div>
      <div class="card-body">
        <energy-label>Budget - 0,1%</energy-label>
        <a href="#" class="w-100 btn btn-primary">Hypotheek aanvragen</a>
      </div>
    </div>
  </div>
</template>

<script>
import EnergyLabel from '~/components/EnergyLabel'

export default {
  name: 'Hypotheek',
  components: {
    EnergyLabel
  },
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
    hasUsps: {
      type: Boolean
    },
    link: {
      type: String,
      default: ''
    },
    mortgages: {
      type: Array,
      default() {}
    }
  },
  data() {
    return {
      selected: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_emerald_variables.scss';

.card {
  &-header {
    height: 112px;
    background: linear-gradient(20.47deg, #005e5d 0%, #00857a 100%);
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    text-align: center;
    .icon {
      margin-top: calc(-46px);
    }
    .edit {
      position: absolute;
      right: 12px;
      top: 12px;
    }
  }

  &:first-child {
    &:nth-last-child(2),
    &:nth-last-child(2) ~ div {
      width: calc(50% - 0.8rem);
    }

    &:nth-last-child(3),
    &:nth-last-child(3) ~ div {
      width: calc(33.333333% - 0.8rem);
    }
    &:nth-last-child(4),
    &:nth-last-child(4) ~ div {
      width: calc(25% - 0.8rem);
    }
    &:nth-last-child(5),
    &:nth-last-child(5) ~ div {
      width: calc(20% - 0.8rem);
    }
  }
}

.color {
  &-white {
    color: $white;
  }
}
</style>
