<template>
  <div id="app">
    <div id="navigationContainer">
      <div class="wrapper">
        <div id="logo">
          <a :href="homeUrl">moistgut.de</a>
        </div>

        <nav id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/wp-migrate-sql">Apps</router-link>
        </nav>
      </div>
    </div>
    <main>
      <router-view/>
    </main>
    <footer>
      <div class="wrapper">
        <div class="content">
          <span class="copy">
            <a class="button dark" href="https://moritzgut.de" target="_blank">{{ new Date().getFullYear() }} &copy; Moritz Gut</a>
          </span>
          <span class="legal">
            <a class="button dark" href="/impressum">Impressum</a>
            <a class="button dark" href="/impressum">Datenschutz</a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    homeUrl: () => {
      return window.location.origin;
    }
  }
}
</script>


<style lang="scss">
#navigationContainer {
  position: sticky;
  top: 0;
  background-color: transparent;
  border-bottom: 1px solid $blackColor;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #logo {
    width: 100px;
    color: $lightColor;
    cursor: pointer;
    
    @include subline;

    a {
      color: $lightColor;
      text-decoration: none;
    }
  }

  #nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      @include subline;
      color: $lightColor;
      line-height: spacing(6);
      padding: 0 spacing(2);
      
      &:last-child {
        padding-right: 0;
      }
    }
  }
}

footer {
  margin-bottom: spacing(5);

  .wrapper {
    border: 1px solid $blackColor;
    transition: border-color .15s ease-in-out;

    a {
      transition: color .15s ease-in-out;
    }

    &:hover { 
    border: 1px solid $darkColor-1;

      a {
        color: $lightColor-2;
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .legal, 
  .copy {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: spacing(2);

    a {
      line-height: spacing(6);
    }
  }
}
</style>
