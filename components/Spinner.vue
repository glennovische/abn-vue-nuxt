<template>
  <div class="half-circle-spinner" :style="spinnerStyle">
    <div class="circle circle-1" :style="circle1Style"></div>
    <div class="circle circle-2" :style="circle2Style"></div>
    <div class="circle circle-3" :style="circle3Style"></div>
    <div class="circle circle-4" :style="circle3Style"></div>
  </div>
</template>

<script>
export default {
  name: 'HalfCircleSpinner',
  props: {
    animationDuration: {
      type: Number,
      default: 1000
    },
    size: {
      type: Number,
      default: 60
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    spinnerStyle() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`
      }
    },
    circleStyle() {
      return {
        borderWidth: `${this.size / 10}px`,
        animationDuration: `${this.animationDuration}ms`
      }
    },
    circle1Style() {
      return Object.assign(
        {
          borderTopColor: this.color
        },
        this.circleStyle
      )
    },
    circle2Style() {
      return Object.assign(
        {
          borderBottomColor: this.color
        },
        this.circleStyle
      )
    },
    circle3Style() {
      return Object.assign(
        {
          borderBottomColor: this.color
        },
        this.circleStyle
      )
    },
    circle4Style() {
      return Object.assign(
        {
          borderBottomColor: this.color
        },
        this.circleStyle
      )
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/_emerald_variables.scss';

.half-circle-spinner,
.half-circle-spinner * {
  box-sizing: border-box;
}
.half-circle-spinner {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: relative;
}
.half-circle-spinner .circle {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(60px / 10) solid transparent;
}
.half-circle-spinner .circle.circle-1 {
  border-top-color: $g-75;
  animation: half-circle-spinner-animation 1s infinite;
}
.half-circle-spinner .circle.circle-2 {
  border-bottom-color: $g-75;
  animation: half-circle-spinner-animation 1s infinite;
}
.half-circle-spinner .circle.circle-3 {
  border-right-color: $g-100;
  animation: half-circle-spinner-animation 1s infinite;
}
.half-circle-spinner .circle.circle-4 {
  border-left-color: $y-300;
  animation: half-circle-spinner-animation 1s infinite;
}
@keyframes half-circle-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
