<template>
  <article>
    <h2 v-if="!!article.title" class="headline">
      <!-- <router-link :to="{ name: 'article', params: { articleId: article.id } }"> -->
        {{ article.title }}
      <!-- </router-link> -->
    </h2>
    <img v-if="!!article.imageUrl" :src="article.imageUrl" class="image-lead">
    <p v-if="showAuthor && !!article.author.name">
      <!-- By <router-link :to="{ name: 'author', params: { authorId: article.author.id } }"> -->
        {{ article.author.name }}
      <!-- </router-link> -->
    </p>
    <p v-if="!!article.summary" class="article.summary">{{article.summary}}</p>
  </article>
</template>
<script>
export default {
  name: 'articleCard',
  props: {
    article: {type: Object, required: true},
    showAuthor: {type: Boolean, required: false, default: true}
  }
}
</script>
