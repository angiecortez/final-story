<template>
  <section class="article-list">
    <h1 class="heading">{{ title }}</h1>
    <section v-if="!!articles.length">
      <ArticleCard v-for="article in articles" v-bind="$attrs" :key="article.id" :article="article"/>
    </section>
    <section v-else>
      <p>No hay articulos</p>
    </section>
  </section>
</template>
<script>
import ArticleCard from  '../components/ArticleCard.vue'
export default {
  name: 'ArticleList',
  components: { ArticleCard },
  props: {
    articles: { type: Array, required: true },
    title: { type: String, required: false, default: 'Noticias Recientes'}
  }
}
</script>
