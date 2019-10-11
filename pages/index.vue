<template>
  <div>
    <HeaderComponent />
    <div class="dashboard">
      <b-card no-body>
        <b-tabs vertical>
          <b-tab title="Dashboard" active>
            <b-container class="m-0">
              <b-row>
                <b-col class="dashboard-summary">
                  <h3>Dashboard</h3>
                </b-col>
                <b-col>
                  <b-card-text> </b-card-text>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Over ons">
            <b-container class="m-0">
              <b-row>
                <b-col class="dashboard-summary">
                  <h3>Over Ons</h3>
                </b-col>
                <b-col>
                  <OverOns />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Onze woning">
            <b-container class="m-0">
              <b-row>
                <b-col class="dashboard-summary">
                  <h3>Onze woning</h3>
                </b-col>
                <b-col>
                  <Woning />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Onze situatie">
            <b-container class="m-0">
              <b-row>
                <b-col class="dashboard-summary">
                  <h3>Onze situatie</h3>
                </b-col>
                <b-col>
                  <Situatie />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Onze hypotheek">
            <b-container class="m-0">
              <b-row>
                <b-col class="dashboard-summary">
                  <h3>Onze hypotheek</h3>
                </b-col>
                <b-col>
                  <Hypotheek />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Documenten">
            <b-container class="m-0">
              <b-row>
                <b-col class="dashboard-summary">
                  <h3>Documenten</h3>
                </b-col>
                <b-col>
                  <b-card-text>
                    <Documenten />
                    <nuxt-link to="/documenten">Documenten</nuxt-link>
                  </b-card-text>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Dossier historie">
            <b-container class="m-0">
              <b-row>
                <b-col class="dashboard-summary">
                  <h3>Dossier historie</h3>
                </b-col>
                <b-col>
                  <Historie />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Documenten from '../modular/hza-documenten/pages/index'
import Woning from '../modular/hza-woning/pages/index'
import OverOns from '../modular/hza-over-ons/pages/index'
import Situatie from '../modular/hza-situatie/pages/index'
import Hypotheek from '../modular/hza-hypotheek/pages/index'
import Historie from '../modular/hza-historie/pages/index'
import HeaderComponent from '../modular/hza-header/pages/index'

export default {
  head() {
    return {
      title: 'HZA Dashboard'
    }
  },
  components: {
    HeaderComponent,
    Documenten,
    Woning,
    OverOns,
    Situatie,
    Hypotheek,
    Historie
  },
  computed: mapState({
    events: (state) => state.events.events
  }),
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Op dit moment niet beschikbaar, probeer later opnieuw'
      })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/_emerald_variables.scss';

.card {
  border: 0;
}

.nav {
  max-width: 110px;
  background-color: $g-300;
  &-tabs {
    .nav-item {
      width: 100%;
      height: 80px;
      display: flex;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: $white;
      &:first-of-type {
        border-top: 0;
      }
    }
    .nav-link {
      color: $white;
      height: 100%;
      width: 100%;
      display: flex;
      padding: 0;
      border-radius: 0;
      text-align: center;
      justify-content: center;
      align-items: center;
      &.active {
        background-color: $g-100;
        color: $white;
      }
    }
  }
}

.dashboard {
  &-summary {
    max-width: 300px;
    display: flex;
    align-items: center;
    padding: $grid-gutter-width;
    background-color: $gm-50;
  }
}

.col-auto {
  padding-right: 0;
}

.tab-content {
  padding-left: 0;
  & > .active,
  .row,
  .container {
    height: 100%;
  }
}
</style>
