<template>
  <div>
    <Header />
    <side-bar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SideBar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'

export default {
  head() {
    return {
      title: 'Event Listing'
    }
  },
  components: {
    SideBar,
    Header
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

<style lang="scss" scoped></style>
