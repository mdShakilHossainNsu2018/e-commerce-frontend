<template>
  <v-app>

    <v-card class="overflow-hidden">

      <v-navigation-drawer
              v-model="drawer"
              absolute
              temporary
            >
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.to"
                  router
                  exact
                >
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>

      <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="600"
      >
            <v-main>
              <v-container style="min-height: 120vh">
                <nuxt />
              </v-container>
            </v-main>
      </v-sheet>
    </v-card>

<!--    <v-navigation-drawer-->
<!--      v-model="drawer"-->
<!--      absolute-->
<!--      temporary-->
<!--    >-->
<!--      <v-list>-->
<!--        <v-list-item-->
<!--          v-for="(item, i) in items"-->
<!--          :key="i"-->
<!--          :to="item.to"-->
<!--          router-->
<!--          exact-->
<!--        >-->
<!--          <v-list-item-action>-->
<!--            <v-icon>{{ item.icon }}</v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title v-text="item.title" />-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->
<!--    <v-app-bar-->
<!--      fixed-->
<!--    >-->
<!--      <v-app-bar-nav-icon @click="drawer = !drawer" />-->


<!--      <v-toolbar-title v-text="title" />-->
<!--      <v-spacer />-->

<!--    </v-app-bar>-->
<!--    <v-main>-->
<!--      <v-container>-->
<!--        <nuxt />-->
<!--      </v-container>-->
<!--    </v-main>-->
<!--    <v-footer-->
<!--    >-->

<!--        <span>&copy; {{ new Date().getFullYear() }}</span>-->

<!--    </v-footer>-->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'E-commerce'
    }
  }
}
</script>
