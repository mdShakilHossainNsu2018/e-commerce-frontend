<template>


      <div class="text-center" style="margin-top: 80px">
        <Carousel/>

        <Products/>



      </div>
</template>

<script>


import Carousel from "~/components/Carousel";
import Products from "~/components/Products";
export default {
  components: {
    Products,
    Carousel

  }
}
</script>
