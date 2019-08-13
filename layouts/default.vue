<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      clipped="true"
      right="true"
      floating="true"
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="white" flat clipped-right extended scroll-off-screen app>
      <template v-slot:extension>
        <logo />
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn
            flat
            class="hidden-sm-and-down"
            v-for="item in menuItems"
            :key="item.title"
            :to="item.to"
          >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>

        <v-toolbar-side-icon
          v-show="$vuetify.breakpoint.smAndDown"
          @click="drawer = !drawer"
        />
      </template>
    </v-toolbar>
    <v-content>
      <v-container fluid mt-4 justify-center>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'
import twemoji from 'twemoji'

export default {
  components: {
    Logo
  },
  data() {
    return {
      clipped: true,
      drawer: false,
      menuItems: [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'school',
          title: 'Education',
          to: '/Education'
        },
        {
          icon: 'poll',
          title: 'Project',
          to: '/Project'
        },
        {
          icon: 'work',
          title: 'Experience',
          to: '/Experience'
        },
        {
          icon: 'alternate_email',
          title: 'Contact',
          to: '/Contact'
        }
      ]
    }
  },
  mounted() {
    twemoji.parse(document.body)
  }
}
</script>

<style>
img.emoji {
  height: 1em;
  width: 1em;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.1em;
}
</style>
