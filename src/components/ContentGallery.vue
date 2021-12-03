<template>
  <div class="module">
    <div class="content">
      <h1 class="gallery__title">{{ title }}</h1>
      <p class="gallery__description">{{ description }}</p>
    </div>
    <div class="gallery">
      <div class="gallery__items">
        <div 
          v-for="item in items" 
          :key="item.title"
          class="gallery__item"
        >
          <div class="gallery__item__wrapper">
            <router-link :to="item.link">
              <h1>{{ item.title }}</h1>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentGallery',
  props: {
    title: {
      type: String,
      default: 'Gallery'
    },
    description: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {

  &__items {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    gap: spacing(2);

    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    margin-left: spacing(3);

    &::-webkit-scrollbar {
      display: none;
    }

  }

  &__item {
    height: 500px;
    width: 80vw;
    background-color: $darkColor-1;
    flex-shrink: 0;
    padding: spacing(2);
    border-radius: 5px;
    scroll-snap-align: start;

    &:last-child {
      margin-right: spacing(3);
    }

    a {
      text-decoration: none;
    }
  }
}

</style>