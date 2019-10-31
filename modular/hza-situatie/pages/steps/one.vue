<template>
  <div class="col-6">
    <div class="middle container no-bg">
      <h3>Ik weet hoeveel ik wil lenen</h3>
      <hr />
      Uw weet precies hoeveel u wilt lenen.
      <div class="container bg-white">
        Vul hier in hoeveel u wilt lenen
        <div class="d-flex justify-content-between">
          <span class="gm-100">Minimaal</span>
          <span class="g-200">65%</span>
          <span class="g-200">85%</span>
        </div>
        <VueSlider v-model="value" :marks="marks" v-bind="options"></VueSlider>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  layout: 'situation',
  name: 'Situatie',
  components: {
    VueSlider
  },
  data() {
    return {
      value: '',
      marks: [0, 20, 40, 60, 80, 100],
      options: {
        dotSize: 28,
        height: 8,
        tooltip: 'none',
        stepActiveStyle: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/components/VueSlider/default';
@import '~/assets/_emerald_variables.scss';

.gm-100 {
  color: $gm-100;
}

.g-200 {
  color: $g-200;
}
</style>
