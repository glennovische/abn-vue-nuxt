<template>
  <div id="app">
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s - Glenn Dutrieux',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Where you can find all the events taking place in your neighborhood'
        }
      ]
    }
  },
  components: {}
}
</script>

<style></style>
