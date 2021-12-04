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
            <div class="spacer-half">
              <Tags :tags="item.tags"/>
            </div>

            <router-link :to="item.url">
              <h1>{{ item.title }}</h1>
            </router-link>
            
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from './general/Tags.vue';

export default {
  name: 'ContentGallery',
  components: {
    Tags
  },
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
    padding: spacing(5) 0;

    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }

  }

  &__item {
    height: 500px;
    width: 80vw;
    flex-shrink: 0;
    padding: spacing(2);
    border-radius: 5px;
    scroll-snap-align: center;
    box-shadow: $shadowElevationMedium;
    background-color: $darkColor-1;

    @include breakpoint('small') {
      width: 50%;
    }

    &:first-child {
      margin-left: spacing(3);
    }

    &:last-child {
      margin-right: spacing(3);
    }

    a {
      text-decoration: none;
    }
  }
}

</style>