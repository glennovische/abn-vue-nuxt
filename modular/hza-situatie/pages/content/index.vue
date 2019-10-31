<template>
  <div class="col-6">
    <div class="middle container no-bg">
      <h3>Uw situatie</h3>
      <hr />
      <nuxt-link to="/hza-situatie/steps/one">
        <Tile
          :has-icon="true"
          tile-class="justify-content-start"
          icon-class="mx-2 pr-education-study"
        >
          Ik weet hoeveel ik wil lenen
        </Tile>
      </nuxt-link>
      <nuxt-link to="/hza-situatie/steps/two">
        <Tile
          :has-icon="true"
          tile-class="justify-content-start"
          icon-class="mx-2 pr-education-study"
        >
          Ik wil zo weinig mogelijk eigen geld gebruiken
        </Tile>
      </nuxt-link>
      <nuxt-link to="/hza-situatie/steps/three">
        <Tile
          :has-icon="true"
          tile-class="justify-content-start"
          icon-class="mx-2 pr-education-study"
        >
          Ik weet hoeveel eigen geld ik wil gebruiken
        </Tile>
        <a href="#" class="d-flex align-items-center"
          >Vrije invoer
          <div class="em-icon em-icon-size-2 sy-arrow-chevron-right"></div
        ></a>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Tile from '~/components/Tile'
export default {
  components: {
    Tile
  }
}
</script>

<style lang="scss" scoped></style>
