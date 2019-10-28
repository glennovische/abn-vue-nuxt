<template>
  <div>
    <div class="header sub">
      <div class="container-fluid em-page-grid">
        <div class="em-cutout"></div>
      </div>
      <div class="container-fluid em-page-grid h-100">
        <div
          class="row d-flex justify-content-between align-items-center h-100"
        >
          <div class="text-white">
            <span>Uw Hypotheekaanvraag</span>
            <h2 class="text-white">Foppingadreef 22 Amsterdam</h2>
          </div>
          <AdvisorCard class="d-flex align-items-end">
            <template v-slot:function>
              Uw adviseur
            </template>
            <template v-slot:advisor>
              Pascal Koops
            </template>
          </AdvisorCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdvisorCard from '~/components/AdvisorCard'
export default {
  components: {
    AdvisorCard
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_emerald_variables.scss';
.header {
  height: 136px;
  background: linear-gradient(173.67deg, #00716b 18.63%, #00857a 98.19%);
}

.em-cutout {
  background-image: url('../assets/em-cutout.svg');
  background-repeat: no-repeat;
  background-position: 0 -1px;
  width: 86px;
  height: 16px;
  position: absolute;
}
</style>
