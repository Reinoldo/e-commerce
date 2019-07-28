<template>
  <section class="products-container">
    <div v-for="product in products" :key="product.id">
      <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].titulo" />
      <h2 class="titulo">{{product.name}}</h2>
      <p class="preco">{{product.price}}</p>
      <p class="user">{{product.user_id}}</p>
      <p class="sold">{{product.sold}}</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";
export default {
  data() {
    return {
      products: null,
      pagination: 9
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `?_limit=${this.pagination}${query}`;
    }
  },
  methods: {
    getProducts() {
      api
        .get(`/product${this.url}`)
        .then(result => {
          this.products = result.data;
        })
        .catch(err => {
          //eslint-disable-next-line
          console.log(err);
        });
    }
  },
  watch: {
    url() {
      this.getProducts();
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style>
</style>
