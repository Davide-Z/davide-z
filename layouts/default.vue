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
    <v-toolbar color="white" flat clipped-right extended app>
      <template v-slot:extension>
        <v-toolbar-title v-text="title" />
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.to">
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>

        <v-toolbar-side-icon @click="drawer = !drawer" />
      </template>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
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
      ],
      title: 'Davide-Z'
    }
  }
}
</script>
