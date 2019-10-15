<template>
  <div>
    <HeaderComponent />
    <div class="dashboard">
      <b-card no-body>
        <b-tabs class="dashboard-tabs" vertical>
          <b-tab class="test" title="Dashboard" active>
            <b-container class="h-100 m-0">
              <b-row class="h-100">
                <b-col class="dashboard-summary">
                  <h3>Dashboard</h3>
                </b-col>
                <b-col class="p-4">
                  <b-card-text> </b-card-text>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Over ons">
            <b-container class="h-100 m-0">
              <b-row class="h-100">
                <b-col class="dashboard-summary">
                  <h3>Over Ons</h3>
                </b-col>
                <b-col class="p-4">
                  <OverOns />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Onze woning">
            <b-container class="h-100 m-0">
              <b-row class="h-100">
                <b-col class="dashboard-summary">
                  <h3>Onze woning</h3>
                </b-col>
                <b-col class="p-4">
                  <Woning />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Onze situatie">
            <b-container class="h-100 m-0">
              <b-row class="h-100">
                <b-col class="dashboard-summary">
                  <h3>Onze situatie</h3>
                </b-col>
                <b-col class="p-4">
                  <Situatie />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Onze hypotheek">
            <b-container class="h-100 m-0">
              <b-row class="h-100">
                <b-col class="dashboard-summary">
                  <h3>Onze hypotheek</h3>
                </b-col>
                <b-col class="p-4">
                  <Hypotheek />
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Documenten">
            <b-container class="h-100 m-0">
              <b-row class="h-100">
                <b-col class="dashboard-summary">
                  <h3>Documenten</h3>
                </b-col>
                <b-col class="p-4">
                  <b-card-text>
                    <Documenten />
                    <nuxt-link to="/documenten">Documenten</nuxt-link>
                  </b-card-text>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Dossier historie">
            <b-container class="h-100 m-0">
              <b-row class="h-100">
                <b-col class="dashboard-summary">
                  <h3>Dossier historie</h3>
                </b-col>
                <b-col class="p-4">
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
import Woning from '~/modular/hza-woning/pages/index'
import OverOns from '~/modular/hza-over-ons/pages/index'
import Situatie from '~/modular/hza-situatie/pages/index'
import Hypotheek from '~/modular/hza-hypotheek/pages/index'
import Historie from '~/modular/hza-historie/pages/index'
import HeaderComponent from '~/modular/hza-header/pages/index'
import Documenten from '~/modular/hza-documenten/pages/index'

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
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_emerald_variables.scss';

.dashboard {
  height: calc(100vh - 72px);
  &-summary {
    max-width: 300px;
    display: flex;
    align-items: center;
    padding: $grid-gutter-width;
    background-color: $gm-50;
    h3 {
      width: 100%;
      text-align: right;
    }
  }
  &-tabs {
    height: 100%;

    & /deep/ .nav {
      max-width: 110px;
      background-color: $g-300;
      height: 100%;
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
    /deep/ .col-auto {
      padding-right: 0;
    }
    /deep/ .tab-content {
      padding-left: 0;
      & > .active {
        height: 100%;
      }
    }
  }

  /deep/ .card {
    border: 0;
    height: 100%;
  }
}
</style>
