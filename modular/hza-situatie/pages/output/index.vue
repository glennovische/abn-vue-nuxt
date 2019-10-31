<template>
  <div class="sidebar right col-3">
    <div class="bonnetje">
      <h4>Berekening</h4>
      <div class="mt-5">
        <div class="row-group">
          <div class="row">
            <span class="col-8 color-white">Koopsom</span>
            <div class="col-4 text-right price">
              <span>{{ 360000 | toFixed(0) | toThousand | toEURO }}</span>
            </div>
          </div>

          <div class="row">
            <span class="col-8 color-white">Kosten koper</span>
            <div class="col-4 text-right price">
              <span>{{ 360000 | toFixed(0) | toThousand | toEURO }}</span>
            </div>
          </div>

          <div class="row">
            <span class="col-8 color-white">Bonnetje regel drie</span>
            <div class="col-4 text-right price">
              <span>{{ 360000 | toFixed(0) | toThousand | toEURO }}</span>
            </div>
          </div>
          <hr />

          <div class="row">
            <span class="col-8 color-white">Wat je nodig hebt</span>
            <div class="col-4 text-right price">
              <span>{{ 360000 | toFixed(0) | toThousand | toEURO }}</span>
            </div>
          </div>

          <div class="row">
            <span class="col-8 color-white">En wat je zelf betaalt</span>
            <div class="col-4 text-right price">
              <span>{{ 360000 | toFixed(0) | toThousand | toEURO }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/_emerald_variables.scss';

.bonnetje {
  background-color: $white;
  padding: $grid-gutter-width;
  box-shadow: $em-box-shadow-well;
}
</style>
