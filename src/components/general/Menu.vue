<template>
  <div class="menu">
    <router-link v-for="item in items" :key="item.id" class="custom-router-link" :to="item.url">
      <span>
        {{ item.text }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-router-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: $lightColor;
  text-decoration: none;
  cursor: pointer;
}
</style>
