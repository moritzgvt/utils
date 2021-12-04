<template>
  <div class="spacer">
    <div class="inputs">
      <input v-model="table_prefix" placeholder="Enter table prefix" @click="handleClick">
      <input v-model="origin_url" placeholder="Enter origin url" @click="handleClick">
      <input v-model="target_url" placeholder="Enter target url" @click="handleClick">
    </div>

<pre><code id="wp-migrate-snippet" class="language-sql">
UPDATE {{ table_prefix }}options SET option_value = replace(option_value, '{{ origin_url }}', '{{ target_url }}') WHERE option_name = 'home' OR option_name = 'siteurl';

UPDATE {{ table_prefix }}posts SET guid = replace(guid, '{{ origin_url }}','{{ target_url }}');

UPDATE {{ table_prefix }}posts SET post_content = replace(post_content, '{{ origin_url }}', '{{ target_url }}');

UPDATE {{ table_prefix }}postmeta SET meta_value = replace(meta_value,'{{ origin_url }}','{{ target_url }}');
</code></pre>

    <div class="center" >
      <div @click="copyToClipboard">
        <IconButton icon="copy"/>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from '../../components/general/IconButton.vue';

export default {
  name: 'Page',
  components: {
    IconButton
  },
  data() {
    return {
      table_prefix: 'wp_',
      origin_url: 'http://localhost:8080',
      target_url: 'https://example.com',
    }
  },
  methods: {
    handleClick(e) {
      e.target.select();
    },
    copyToClipboard() {
      const text = document.querySelector('#wp-migrate-snippet').getInnerHTML()

      navigator.clipboard.writeText(text.trim()).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .inputs {
    display: flex;
    flex-direction: column;
    gap: spacing(1);

    @include breakpoint('small') {
      flex-direction: row;
    }

    input {
      background-color: $darkColor-1;
      border: none;
      line-height: spacing(7);
      vertical-align: middle;
      padding: 0 spacing(5);
      @include subline;
      color: $lightColor;
      width: 100%;

      &:focus {
        outline: none;
      }
    }
  }

  pre {
    overflow: auto;
    padding: spacing(3) spacing(5);
    background-color: $darkColor-1;
    color: $lightColor;
    margin: spacing(1) 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>