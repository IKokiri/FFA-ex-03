<template>
  <div>
    <p v-for="u in users" v-bind:key="u.id">
      <router-link :to="{ name: 'userD', params: { id: u.id }}">{{u.name}}-{{u.email}}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  data() {
    return {
      users: []
    };
  },
  props: {
    usuarios: Array
  },
  methods: {
    async buscarUsuarios() {
      const response = await fetch(
        "https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d"
      );
      const data = await response.json();
      this.users = data.results;
    }
  },
  mounted() {
    this.buscarUsuarios();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
