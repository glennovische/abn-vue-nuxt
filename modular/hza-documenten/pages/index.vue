<template>
  <div>
    <div class="container-fluid em-page-grid mt-5">
      <div class="row">
        <div class="sidebar left col-3">
          <span class="title">Intro</span>
          <ul>
            <li><span>Agenda</span></li>
            <li class="active"><span>Uw situatie</span></li>
          </ul>
          <span class="title">Hypotheek samenstellen</span>
          <ul>
            <li><span>Hypotheek bedrag</span></li>
            <li><span>Eigen middelen</span></li>
            <li><span>Productvormen</span></li>
            <li><span>Aflosvormen</span></li>
            <li><span>Hypotheek samenstellen</span></li>
          </ul>
          <span class="title">Mijn hypotheek</span>
          <ul>
            <li><span>Opgeslagen berekeningen</span></li>
          </ul>
        </div>
        <Situatie />
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
      </div>
    </div>
  </div>
</template>

<script>
import Situatie from '~/modular/hza-situatie/pages/index'

export default {
  layout: 'dashboard',
  components: {
    Situatie
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_emerald_variables.scss';
body {
  background-color: $gm-50;
}

span {
  &.title {
    color: #5a6f6f;
    font-weight: bold;
    display: block;
    margin-top: 32px;
    &:first-of-type {
      margin-top: 0;
    }
  }
}

ul {
  padding: 0;
  margin: 0;
  li {
    height: 40px;
    list-style: none;
    display: flex;
    color: $g-400;
    align-items: center;
    &.active {
      background-color: $white;
      position: relative;
      box-shadow: $em-box-shadow-well;
      &:before {
        content: '';
        height: 100%;
        width: 4px;
        background-color: $g-300;
      }
      span {
        font-weight: 500;
        color: $n-670;
      }
    }
    span {
      padding-left: 12px;
      color: $g-400;
    }
    &:hover {
      cursor: pointer;
      background-color: $g-300;
      position: relative;
      box-shadow: $em-box-shadow-well;
      span {
        color: $white;
      }
    }
  }
}

.middle {
  background-color: $white;
  box-shadow: $em-box-shadow-well;
  &.no-bg {
    background-color: transparent;
    box-shadow: none;
  }
}

.bonnetje {
  background-color: $white;
  padding: $grid-gutter-width;
  box-shadow: $em-box-shadow-well;
}
</style>
