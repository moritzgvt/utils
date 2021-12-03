<template>
  <div>
    <div class="wrapper page">
      <ContentGallery title="My Apps" :items="items"/>
    </div>
  </div>
</template>

<script>
import ContentGallery from '../components/ContentGallery.vue'

export default {
  name: 'Apps',
  components: {
    ContentGallery
  },
  data() {
    return {
      items: [
        {
          title: 'Migrate WordPress Database',
          description: 'Migrate your WordPress database to a new server.',
          link: '/wp-migrate-sql'
        },
        {
          title: 'Migrate WordPress Database',
          description: 'Migrate your WordPress database to a new server.',
          link: '/wp-migrate-sql'
        },
        {
          title: 'Migrate WordPress Database',
          description: 'Migrate your WordPress database to a new server.',
          link: '/wp-migrate-sql'
        },
        {
          title: 'Migrate WordPress Database',
          description: 'Migrate your WordPress database to a new server.',
          link: '/wp-migrate-sql'
        },
        {
          title: 'Migrate WordPress Database',
          description: 'Migrate your WordPress database to a new server.',
          link: '/wp-migrate-sql'
        },
        {
          title: 'Migrate WordPress Database',
          description: 'Migrate your WordPress database to a new server.',
          link: '/wp-migrate-sql'
        }
      ]
    }
  }
}
</script>
