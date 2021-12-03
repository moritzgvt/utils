<template>
  <div id="app">
    <div id="navigationContainer">
      <div class="wrapper">
        <div id="logo" @click="$router.push({path: '/'})">
            <Logo light/>
        </div>

        <nav id="nav">
          <Menu :items="mainMenu"/>
        </nav>
      </div>
    </div>

    <main>
      <transition name="view-change" mode="out-in">
        <router-view/>
      </transition>
    </main>

    <footer>
      <div class="wrapper">
        <div class="content">
          <span class="copy">
            <a class="button dark" href="https://moritzgut.de" target="_blank">{{ new Date().getFullYear() }} &copy; Moritz Gut</a>
          </span>
          <span class="legal">
            <Menu :items="legalMenu"/>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from './components/general/Logo.vue';
import Menu from './components/general/Menu.vue';

export default {
  name: 'App',
  components: {
    Logo,
    Menu
  },
  data() {
    return {
      mainMenu: [
        {
          text: 'Apps',
          url: '/apps'
        }
      ],
      legalMenu: [
        {
          text: 'Impressum',
          url: '/impressum'
        },
        {
          text: 'Datenschutz',
          url: '/datenschutz'
        }
      ]
    }
  }
}
</script>


<style lang="scss">
#navigationContainer {
  position: sticky;
  top: 0;
  background: $darkColor;
  z-index: 900;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 spacing(2);

    @include breakpoint('small') {
      padding: 0;
    }
  }

  #logo {
    width: 40px;
    color: $lightColor;
    cursor: pointer;
    padding: 20px 0;
    
    @include subline;

    a {
      color: $lightColor;
      text-decoration: none;
    }
  }

  #nav {
    .menu {
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
}

footer {
  .wrapper {
    padding: 0 spacing(2);

    a {
      @include text;
      color: $lightColor-2;
      text-align: center;
    }

    .content {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
      gap: spacing(1);

      @include breakpoint('small') {
        flex-direction: row;
        gap: spacing(2);
      }
    }
  }

  .legal .menu, 
  .copy {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: spacing(1);

    @include breakpoint('small') {
      flex-direction: row;
      gap: spacing(2);
    }

    a {
      line-height: spacing(6);
    }
  }
}

.view-change-enter-active, .view-change-leave-active {
  transform: translateY(0px);
  opacity: 1;
  transition: 
    opacity .1s ease-in-out,
    transform .1s ease-in-out;
}
.view-change-enter, .view-change-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
</style>
