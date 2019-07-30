<template>
  <section class="products-container">
    <div class="products" v-if="products && products.length">
      <div class="product" v-for="product in products" :key="product.id">
        <router-link to="/">
          <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].titulo" />
          <p class="price">{{product.price}}</p>
          <h2 class="title">{{product.name}}</h2>
          <p class="description">{{product.description}}</p>
        </router-link>
      </div>
    </div>
    <div class="no-results" v-else-if="products && products.length === 0">
      <p>No match, try another name.</p>
    </div>
    <ProductsPagination :totalProducts="totalProducts" :productsByPage="productsByPage" />
  </section>
</template>

<script>
import ProductsPagination from "@/components/ProductsPagination.vue";
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";
import { log } from "util";
export default {
  name: "ProductsList",
  components: {
    ProductsPagination
  },
  data() {
    return {
      products: null,
      productsByPage: 3,
      totalProducts: 0
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `?_limit=${this.productsByPage}${query}`;
    }
  },
  methods: {
    getProducts() {
      api
        .get(`/product${this.url}`)
        .then(result => {
          this.totalProducts = result.headers["x-total-count"];
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

<style scoped>
.products-container {
  max-width: 1000px;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}
.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}
.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}

.price {
  color: #e80;
  font-weight: bold;
}

.no-results {
  text-align: center;
}
</style>
