<template>
  <div>
    <h1>Events</h1>
    <event-card
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'

export default {
  head() {
    return {
      title: 'Event Listing'
    }
  },
  components: {
    EventCard
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
