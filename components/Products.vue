<template>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 10"
          :key="n"
          cols="12"
          sm="4"
        >
          <Product/>

        </v-col>
<!--        <v-col>-->
<!--          <Product/>-->
<!--          <Product/>-->
<!--          <Product/>-->
<!--        </v-col>-->
      </v-row>

    </v-container>
</template>

<script>
    import Product from "~/components/Product";
    export default {
        name: "Products",
      components: {Product},

      data(){
          return{
            products: [
              {id:1},
              {id:2},
              {id:3},
              {id:4},
              {id:5},
            ]
          }
      }
    }
</script>

<style scoped>

</style>
