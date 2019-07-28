<template>
  <section class="products-container">
    <div v-for="product in products" :key="product.id">
      <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].titulo" />
      <h2 class="titulo">{{product.name}}</h2>
      <p class="preco">{{product.price}}</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
export default {
  data() {
    return {
      products: null
    };
  },
  methods: {
    getProducts() {
      api
        .get("/product")
        .then(result => {
          this.products = result.data;
        })
        .catch(err => {
          //eslint-disable-next-line
          console.log(err);
        });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style>
</style>
