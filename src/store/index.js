import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apps: [
      {
        name: 'wp-migrate-sql',
        title: 'Migrate Wordpress Database',
        description: 'WordPress database migration tool',
        tags: ['SQL', 'Wordpress', 'Helper'],
        url: '/apps/wp-migrate-sql',
        path: '../views/apps/WPMigrateSQL.vue',
      },
      {
        name: 'wp-migrate-sql',
        title: 'Migrate Wordpress Database',
        description: 'WordPress database migration tool',
        tags: ['SQL', 'Wordpress', 'Helper'],
        url: '/apps/wp-migrate-sql',
        path: '../views/apps/WPMigrateSQL.vue',
      },
      {
        name: 'wp-migrate-sql',
        title: 'Migrate Wordpress Database',
        description: 'WordPress database migration tool',
        tags: ['SQL', 'Wordpress', 'Helper'],
        url: '/apps/wp-migrate-sql',
        path: '../views/apps/WPMigrateSQL.vue',
      }
    ]
  },
  getters: {
    getApps: (state) => {
      return state.apps;
    },
    currentAppBySlug: (state) => (slug) => {
      return state.apps.find(app => app.name === slug);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
