<template>
  <div class="col-6">
    <div class="middle container no-bg">
      <h3>Uw situatie</h3>
      <hr />
      <Tile
        :has-icon="true"
        tile-class="justify-content-start"
        icon-class="mx-2 pr-education-study"
      >
        <nuxt-link to="hza-situatie/step1"
          >Ik weet hoeveel ik wil lenen</nuxt-link
        >
      </Tile>
      <Tile
        :has-icon="true"
        tile-class="justify-content-start"
        icon-class="mx-2 pr-education-study"
      >
        Ik wil zo weinig mogelijk eigen geld gebruiken
      </Tile>
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
    </div>
  </div>
</template>

<script>
import Tile from '~/components/tile'
export default {
  name: 'Situatie',
  components: {
    Tile
  }
}
</script>

<style lang="scss" scoped></style>
