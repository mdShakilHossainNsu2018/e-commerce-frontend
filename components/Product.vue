<template>
  <v-hover style="cursor: pointer;" v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            ৳{{productItem.price}}
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="orange"
          class="white--text cart-btn"
          fab
          large
          right
          top


        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <h3 class="display-1 font-weight-light orange--text mb-2">{{productItem.title}}</h3>

        <div class="font-weight-light grey--text title mb-2">Price: ৳{{productItem.price}}</div>
        <div class="font-weight-light title mb-2">
          {{productItem.description}}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
    export default {
        name: "Product",
        props: ['productItem']
    }
</script>

<style scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }

  .cart-btn{
    z-index: 0;
  }
</style>
