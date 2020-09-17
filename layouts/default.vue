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
        <v-toolbar-title class="d-none d-sm-block" href="/">Title</v-toolbar-title>

        <v-spacer></v-spacer>
        <Search/>

        <v-spacer></v-spacer>
        <v-btn to="/message" icon class="d-none d-md-flex">
          <v-icon>mdi-chat</v-icon>
        </v-btn>

        <v-btn icon class="d-none d-md-block">
          <v-icon>mdi-cash-register</v-icon>
        </v-btn>

        <v-btn icon class="d-none d-md-block">
          <v-icon>mdi-cart</v-icon>
        </v-btn>



        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
            icon
              v-bind="attrs"
              v-on="on"
            >
<!--              <v-btn icon >-->
                <v-icon>mdi-account</v-icon>
<!--              </v-btn>-->
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>John Leider</v-list-item-title>
                  <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                    :class="fav ? 'red--text' : ''"
                    icon
                    @click="fav = !fav"
                  >
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="message" color="purple"></v-switch>
                </v-list-item-action>
                <v-list-item-title>Enable messages</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="hints" color="purple"></v-switch>
                </v-list-item-action>
                <v-list-item-title>Enable hints</v-list-item-title>
              </v-list-item>
            </v-list>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text @click="menu = false">Cancel</v-btn>
              <v-btn color="primary" text @click="menu = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>


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
            class="mx-4"
            icon
            to="/message"
          >
            <v-icon size="24px">mdi-chat</v-icon>
          </v-btn>
          <v-btn
            class="mx-4"
            icon
          >
            <v-icon size="24px">mdi-bell</v-icon>
          </v-btn>
          <v-btn
            class="mx-4"
            icon
          >
            <v-icon size="24px">mdi-cart</v-icon>
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
        title: 'E-commerce',

        fav: true,
        menu: false,
        message: false,
        hints: true,
      }
    }
  }
</script>

<style scoped>
  .msg-btn{
    display: flex !important;

  }
</style>
