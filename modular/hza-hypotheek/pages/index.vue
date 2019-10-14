<template>
  <div class="d-flex justify-content-center flex-column h-100">
    <div class="content">
      <h3 class="mb-4">Wat gaan we bespreken</h3>
      <div class="mb-5">
        <b-container>
          <b-row class="d-flex justify-content-center w-100">
            <Tile
              :has-icon="true"
              tile-class="col-4"
              icon-class="pr-money-capital"
            >
              Eigen middelen
            </Tile>
            <Tile
              :has-icon="true"
              tile-class="col-4"
              icon-class="pr-wallets-wallet"
            >
              Product vormen
            </Tile>
            <Tile
              :has-icon="true"
              tile-class="col-4"
              icon-class="pr-money-capital"
            >
              Maximale lening
            </Tile>
          </b-row>
        </b-container>
        <b-container class="bv-example-row">
          <b-row class="d-flex justify-content-center w-100">
            <Tile
              :has-icon="true"
              tile-class="col-4"
              icon-class="pr-money-capital"
            >
              Hypotheek vormen aflossen
            </Tile>
            <Tile
              :has-icon="true"
              tile-class="col-4"
              icon-class="pr-money-capital"
            >
              Rente
            </Tile>
            <Tile
              :has-icon="true"
              tile-class="col-4"
              icon-class="pr-money-capital"
            >
              Risicoklasse
            </Tile>
          </b-row>
        </b-container>
      </div>
      <div class="d-flex justify-content-center mb-4">
        <button class="btn btn-primary">
          Starten met de hypotheek samenstelling
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Tile from '../../../components/Tile.vue'
export default {
  name: 'Hypotheek',
  components: {
    Tile
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 660px;
  margin: 0 auto;
}
</style>
