<template>
  <div class="d-flex justify-content-center flex-column h-100">
    <div class="content">
      <h3 class="mb-4">Wat gaan we bespreken</h3>
      <div class="mb-5">
        <b-container>
          <b-row class="d-flex justify-content-center w-100">
            <Tile
              :has-icon="true"
              tile-class="mr-0 justify-content-start"
              icon-class="pr-education-study"
            >
              <nuxt-link to="/documenten">Eigen middelen</nuxt-link>
            </Tile>
            <Tile
              :has-icon="true"
              tile-class="small square"
              icon-class="pr-education-study"
            >
              Eigen middelen
            </Tile>
            <Tile
              :has-icon="true"
              tile-class="medium square"
              icon-class="pr-wallets-wallet"
            >
              Product vormen
            </Tile>
            <Tile
              :has-icon="true"
              tile-class="large square"
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
              tile-class="medium square"
              icon-class="pr-files-file-verified"
            >
              Hypotheek vormen aflossen
            </Tile>
            <Tile
              :has-icon="true"
              tile-class="medium square"
              icon-class="pr-building-villa"
            >
              Rente
            </Tile>
            <Tile
              :has-icon="true"
              tile-class="medium square"
              icon-class="pr-wearables-watch"
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

    <span>{{ 351.9983 | toFixed(2) | toEURO }}</span>
    <span>{{ name | Upper }}</span>
    <span>{{ name | Lower }}</span>
    <span>{{ text | readMore(20, '...') }}</span>
    <span>{{ user | json }}</span>
    <span>{{ users | pluck('id') }}</span>
    <span>{{ users | pluck('first_name') }}</span>
    <span>{{ users | pluck('last_name') }}</span>
    <span>{{ users | pluck('age') | min }}</span>
    <span>{{ users | pluck('age') | max }}</span>
    <span>{{ users | first }}</span>
    <span>{{ users | last }}</span>
    <span>{{ colors | without('Rood') }}</span>
    <span>{{ colors | unique }}</span>
    <span>{{ name | prepend(' Wereld!') }}</span>
    <span>{{ name | repeat(3) }}</span>
  </div>
</template>

<script>
import Tile from '~/components/Tile.vue'
export default {
  name: 'Hypotheek',
  components: {
    Tile
  },
  data() {
    return {
      name: 'Hallo',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab modi repellendus labore facere, fugiat ipsam quae accusantium commodi voluptas nesciunt dolor similique ipsum accusamus earum eligendi suscipit laborum quod.',
      colors: [
        'Rood',
        'Blauw',
        'Geel',
        'Groen',
        'Rood',
        'Paars',
        'Geel',
        'Geel',
        'Roze'
      ],
      user: {
        username: 'Glenn Dutrieux',
        email: 'glenn@newestindustry.nl',
        birthday: '04-04-1990',
        countryCode: 'NL'
      },
      users: [
        {
          id: 1,
          first_name: 'Glenn',
          last_name: 'Dutrieux',
          age: 29
        },
        {
          id: 2,
          first_name: 'Jurgen',
          last_name: 'Heeffer',
          age: 25
        },
        {
          id: 3,
          first_name: 'Jules',
          last_name: 'Wijt',
          age: 16
        },
        {
          id: 4,
          first_name: 'Roel',
          last_name: 'Hugens',
          age: 32
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 660px;
  margin: 0 auto;
}
</style>
