<template>
  <div>
    <ul v-if="pagination.length > 1">
      <li v-for="page in pagination" :key="page">
        <router-link :to="{query: query(page)}">{{page}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    totalProducts: {
      type: Number,
      default: 1
    },
    productsByPage: {
      type: Number,
      default: 6
    }
  },
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        _page: page
      };
    }
  },
  computed: {
    pagination() {
      const current = this.$route.query._page;
      const range = 9;
      const offset = Math.ceil(range / 2);
      const total = this.totalPages;
      let arrayPages = [];

      for (let i = 1; i <= total; i++) {
        arrayPages.push(i);
      }

      arrayPages.splice(0, current - offset);
      arrayPages.splice(range, total);

      console.log(arrayPages);
      return arrayPages;
    },
    totalPages() {
      const pages = this.totalProducts / this.productsByPage;
      return pages !== Infinity ? Math.ceil(pages) : 0;
    }
  }
};
</script>

<style>
ul {
  grid-column: 1 / -1;
}
li {
  display: inline-block;
}
li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
  background: #87f;
  color: #fff;
}
</style>
