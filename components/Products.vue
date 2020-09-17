<template>
    <v-container>
      <v-row>
        <v-col
          v-for="product in productsList"
          :key="product.id"
          cols="12"
          sm="4"
        >
          <Product :productItem="product" />

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

          }
      },

      computed:{
          productsList(){
            return this.$store.state.products;
          }
      }
    }
</script>

<style scoped>

</style>
