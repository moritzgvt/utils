<template>
  <div class="tag-container">
    <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      default: () => [''],
    },
  }
}
</script>

<style lang="scss" scoped>

  .tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    @include caption;
    position: relative;
    padding: spacing(.5) spacing(2);
    border-radius: 20px;
    border: 1px solid $lightColor;
    color: $lightColor;
  }
</style>