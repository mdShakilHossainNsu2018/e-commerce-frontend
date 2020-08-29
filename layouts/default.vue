<template>
  <v-app light>

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
              <v-list-item-title v-text="item.title"/>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>


      <v-app-bar
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        :rounded="true"
        min-height="4rem"
      >

        <div class="d-sm-none mt-4 text-center">
          <v-toolbar-title>Title</v-toolbar-title>
          <v-app-bar-nav-icon @click="drawer = !drawer" style="margin-top: -10px;"></v-app-bar-nav-icon>

        </div>

        <v-app-bar-nav-icon class="d-none d-sm-block" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="d-none d-sm-block">Title</v-toolbar-title>

        <v-spacer></v-spacer>
        <Search/>

        <v-spacer></v-spacer>

        <v-btn icon class="d-none d-md-block">
          <v-icon>mdi-chat</v-icon>
        </v-btn>

        <v-btn icon class="d-none d-md-block">
          <v-icon>mdi-bell</v-icon>
        </v-btn>

        <v-btn icon class="d-none d-md-block">
          <v-icon>mdi-cart</v-icon>
        </v-btn>

        <v-btn icon >
          <v-icon>mdi-account</v-icon>
        </v-btn>


<!--        <div class="d-md-none">-->
<!--          <v-menu >-->
<!--            <template v-slot:activator="{ on: menu, attrs }">-->
<!--              <v-tooltip bottom>-->
<!--                <template v-slot:activator="{ on: tooltip }">-->
<!--                  <v-btn-->
<!--                    icon-->

<!--                    v-bind="attrs"-->
<!--                    v-on="{ ...tooltip, ...menu }"-->
<!--                  >-->
<!--                    <v-icon>mdi-dots-vertical</v-icon>-->
<!--                  </v-btn>-->
<!--                </template>-->
<!--                <span>Im A ToolTip</span>-->
<!--              </v-tooltip>-->
<!--            </template>-->
<!--            <v-list>-->
<!--              <v-list-item-->
<!--                v-for="(item, index) in items"-->
<!--                :key="index"-->
<!--                @click=""-->
<!--              >-->
<!--                <v-list-item-title>{{ item.title }}</v-list-item-title>-->
<!--              </v-list-item>-->
<!--            </v-list>-->
<!--          </v-menu>-->
<!--        </div>-->


      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-main>
          <v-container fluid style="min-height: 120vh">
            <nuxt/>

          </v-container>
        </v-main>
      </v-sheet>
    </v-card>


    <v-footer
      app
      :padless="true"
      class="d-md-none"
    >

      <v-card
        flat
        tile
        width="100%"
        class="red lighten-1 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  import Search from "~/components/Search";

  export default {
    components: {
      Search

    },
    data() {
      return {
        drawer: false,
        fixed: false,
        icons: [
          'mdi-chat',
          'mdi-bell',
          'mdi-cart',

        ],
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
