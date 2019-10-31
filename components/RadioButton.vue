<template>
  <div class="d-flex justify-content-between">
    <b-form-radio
      v-for="(mortgage, index) in mortgages"
      :key="index"
      v-model="selected"
      :value="mortgage.id"
      class="abn-radio"
    >
      <div
        v-if="hasIcon"
        class="em-icon em-icon-size-9"
        :class="mortgage.icon"
      ></div>
      <h4>{{ mortgage.title }}</h4>
      <ul v-if="hasUsps" class="usps">
        <li v-for="(usp, id) in mortgage.usps" :key="id">
          {{ usp }}
        </li>
      </ul>
    </b-form-radio>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
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

.abn {
  &-radio {
    border-radius: 2px;
    background-color: $white;
    box-shadow: $em-box-shadow-tile;
    &:hover {
      cursor: pointer;
    }

    /deep/.custom-control {
      &-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $n-670;
        height: 100%;
        &:before,
        &:after {
          left: 1rem;
          top: 1rem;
        }

        h4 {
          color: $g-400;
          margin-bottom: 24px;
        }
      }
    }

    &.custom-control {
      padding-left: 0;
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
}

/deep/.custom-control-input {
  &:checked {
    ~ .custom-control-label {
      border: 2px solid $g-300;
      border-radius: 2px;
      .usps {
        width: 100%;
      }
    }
  }
  ~ .custom-control-label {
    border: 2px solid transparent;
  }
}

.em-icon {
  margin-top: 16px;
}

.usps {
  margin: 0;
  padding: 0;
  list-style: none;
  width: calc(100% + 4px);
  li {
    padding: 10px;
    text-align: center;
    &:nth-of-type(odd) {
      background-color: #f9f9f9;
    }
    &:nth-last-of-type(1) {
      margin-bottom: 30px;
    }
  }
}
</style>
