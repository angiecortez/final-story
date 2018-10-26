<template>
  <section class="author-bio">
    <h1 class="name">{{name}}</h1>
    <div class="avatar-wrapper">
      <Avatar
      v-if="!!showAvatar"
      class="avatar"
      />
    </div>
    <p class="bio">{{ bio }}</p>
  </section>
</template>
<script>
import Avatar from './Avatar.vue'
export default {
  name: 'AuthorBio',
  components: { Avatar },
  props: {
    id: { type: Number, required: true, default: null },
    name: { type: String, required: true, default: null },
    avatarUrl: { type: String, required: false, default: null },
    bio: { type: String, required: true, default: null },
    showAvatar: { type: Boolean, required: false, default: true }
  }
}
</script>
