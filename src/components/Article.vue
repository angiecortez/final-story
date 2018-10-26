<template>
  <article class="article">
    <header class="meta">
      <h1 v-if="!!article.title" class="headline">{{ article.title }}</h1>
      <p v-if="!!article.author.name" class="author">
      </p>
      <p v-if="article.portedDate" class="date">{{ article.portedDate | adDate }}</p>
    </header>
    <img v-if="article.imageUrl" :src="article.imageUrl" class="image-lead">
    <section v-if="!!article.body" class="body" v-html="article.body"/>
  </article>
</template>
<script>
export default {
  name: "Article",
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
img {
  float: right;
  margin: 0 0 1em 1em;
}
</style>
