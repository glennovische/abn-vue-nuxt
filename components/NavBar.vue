<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">Real World Events</nuxt-link>
    <no-ssr>
      <div class="fade-in">
        <SlideMenu width="500" right>
          <nuxt-link to="/">List</nuxt-link>
          <nuxt-link to="event/create">Create</nuxt-link>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </SlideMenu>
      </div>
    </no-ssr>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
