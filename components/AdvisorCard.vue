<template>
  <div>
    <b-card
      img-src="https://placedog.net/40/40"
      img-alt="Card image"
      img-left
      class=""
    >
      <b-card-text>
        <span><slot name="function"></slot></span>
        <div class="title d-flex align-items-center">
          <slot name="advisor"></slot>
          <div class="livestatus online"></div>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/_emerald_variables.scss';
.card {
  max-height: 60px;
  padding: 8px;
  padding-right: 50px;
  box-shadow: $em-box-shadow-well;
  &-img {
    &-left {
      border-radius: 2px;
      margin-right: 8px;
    }
  }
  &-body {
    padding: 0;
  }
  &-text {
    span {
      color: $gm-400;
    }
  }
  .livestatus {
    margin-left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    &.offline {
      background: $abn-negative-500;
    }
    &.online {
      background: #65a120;
    }
  }
}
</style>
