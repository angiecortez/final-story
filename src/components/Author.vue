<template>
  <section class="author">
    <AuthorBio
    v-if="!!author"
    :id="author.id"
    :name="author.name"
    :avatar-url="author.avatarUrl"
    :bio="author.bio"
    />
    <ArticleList
    v-if="!!author.articles"
    :articles="author.articles"
    :show-author="false"
    :title="`sss ${author.name}`"
    />
  <TheFooter/>
  </section>
</template>
<script>
import TheFooter from './TheFooter'
import AuthorBio from './AuthorBio.vue'
import ArticleList from './ArticleList.vue'
export default {
  name: 'Author',
  components: {
    AuthorBio,
    ArticleList,
    TheFooter
  },
  props: {
    author: { type: Object, required: true }
  }
}
</script>
