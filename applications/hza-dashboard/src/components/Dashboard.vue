<template>
  <div class="dashboard container-fluid em-page-grid">
    <div class="mt-2">
      <h2>Overzicht</h2>
    </div>
    <div class="row no-gutters mt-2 justify-content-start">
      <div class="col-6 em-shadow-tile p-3 mb-3 mr-3 bg-white">
        <router-link to="/over-ons">Over ons</router-link>
      </div>
      <div class="col em-shadow-tile p-3 mb-3 mr-3 bg-white">
        Mijn nieuwe woning
      </div>
    </div>
    <div class="row no-gutters mt-2 justify-content-start">
      <div class="col-6 em-shadow-tile p-3 mb-3 mr-3 bg-white">
        Mijn situatie
      </div>
      <div class="col em-shadow-tile p-3 mb-3 mr-3 bg-white">
        <router-link to="/hypotheek-samenstellen">
          Mijn hypotheek keuze
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
