<template>
  <div id="users">
    <h1>Users Detail!!</h1>
    <p>{{user.name}}</p>
    <br/>
    <p>{{user.email}}</p>
    <br/>
    <router-link to="/user">
      <p>Back</p>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "userDetail",
  data() {
    return {
      user: null
    };
  },

  mounted() {
    axios
      .get("https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d.json")
      .then(
          response => {
            const users = response.data.results;
            this.user = users.find(user => user.id == this.$route.params.id)
          }        
      ).catch(function(error){
        console.log(error);
      });
  }
};
</script>
