<template>
  <section>
    <h1>Compre ou Venda 👌</h1>
    <ProductsSearch />
    <ProductsList />
  </section>
</template>

<script>
import ProductsSearch from "@/components/ProductsSearch.vue";

import ProductsList from "@/components/ProductsList.vue";
// @ is an alias to /src

export default {
  name: "home",
  components: {
    ProductsSearch,
    ProductsList
  }
};
</script>
