<template>
  <div>
    <h1>{{name}}</h1>
    <p>{{bio}}</p>
    <p>{{email}}</p>
  </div>
</template>

<script>
export default {
  name: "UsersDetail",
  data() {
    return {
      name: "",
      bio: "",
      email: ""
    };
  },
  methods: {
    async buscarUsuarios(id) {
      const response = await fetch(
        "https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d"
      );

      const data = await response.json();
      this.telaUser(data,id);
    },
    telaUser(data,id) {
      var result = data.results;

      var user = result.filter(function(u) {
        return u.id === id;
      });

      this.name = user[0].name;
      this.bio = user[0].bio;
      this.email = user[0].email;
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.buscarUsuarios(id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
