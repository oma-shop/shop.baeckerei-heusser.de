<template>
  <div class="latest-news">
    <NewsCard :post="post" v-for="post in posts" v-bind:key="post.id" />
  </div>
</template>

<script>
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'LatestNews',
  components: {
    NewsCard
  },
  data() {
    return {
      posts: require('@/content/news')
    }
  }
}
</script>

<style lang="scss" scoped>
.latest-news {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 30px;
  margin-top: 50px;
}
@media only screen and (max-width: 920px) {
  .latest-news {
    flex-wrap: wrap;
  }
}
</style>