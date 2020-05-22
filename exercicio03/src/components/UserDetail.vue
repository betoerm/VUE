<template>
  <div id="userDetail">
    <h1>Users Detail!!</h1>
    <p>{{user.name}}</p>
    <p>{{user.email}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserDetail",
  data() {
    return {
      user: null 
    };
  },

  mounted() {
    axios
      .get("https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d.json")
      .then(
        ({ data }) =>
          (this.users = data.results.find(
            user => user.id === this.$route.params.id
          ))
      );
  }
};
</script>
