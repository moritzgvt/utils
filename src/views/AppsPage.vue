<template>
  <div v-if="app" class="wrapper page">
    <article>
      <div class="content">
        <div class="spacer-half">
          <Tags :tags="app.tags"/>
        </div>

        <h1>{{ app.title }}</h1>

        <p>{{ app.description }}</p>
      </div>

      <wp-migrate-sql></wp-migrate-sql>
    </article>
  </div>
</template>

<script>
import Tags from '../components/general/Tags.vue';

export default {
  name: 'AppsPage',
  components: {
    Tags,
    'wp-migrate-sql': () => import('./apps/WPMigrateSQL.vue'),
  },
  computed: {
    app() {
      return this.$store.getters.currentAppBySlug(this.$route.params.slug)
    },
  },
  created () {
    console.log();
  },
}
</script>

<style lang="scss" scoped>

</style>