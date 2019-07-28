<template>
  <form>
    <input type="text" name="search" id="search" v-model="search" />
    <input type="submit" id="magnifier" value="Search" @click.prevent="searchProducts" />
    {{search}}
  </form>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    searchProducts() {
      this.$router.push({ query: { q: this.search } });
    }
  }
};
</script>

<style>
</style>
