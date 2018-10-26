<template>
  <div class="authors">
    <header>
      <h1 class="heading">Authors</h1>
    </header>
    <div v-for="author in authors" :key="author.id">
      <Author :author="author"/>
    </div>
  </div>
</template>
<script>
import Author from './Author.vue'
export default {
  name: 'Authors',
  components: { Author },
  props: {
    authors: { type: Array, required: true}
  }
}
</script>
