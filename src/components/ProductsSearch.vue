<template>
  <form>
    <input id="search" type="text" name="search" v-model="search" placeholder="Search..." />
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

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#search {
  width: 100%;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 20px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s;
}

#search:focus,
#search:hover {
  transform: scale(1.1);
}

#magnifier {
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
