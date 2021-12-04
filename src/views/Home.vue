<template>
  <div>
    <div class="wrapper page">
      <ContentGallery title="Apps" :items="apps"/>
    </div>
  </div>
</template>

<script>
import ContentGallery from '../components/ContentGallery.vue'

export default {
  name: 'Home',
  components: {
    ContentGallery
  },
  computed: {
    apps() {
      return this.$store.getters.getApps;
    }
  }
}
</script>
