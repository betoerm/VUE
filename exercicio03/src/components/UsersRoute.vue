<template>
  <div id="users">
    <h1>Users List!!</h1>
    <ul>
      <li v-for="user in users" v-bind:key="user.id">
        <router-link :to="{ path: '/user/' + user.id }">
          <strong>{{user.name}}</strong>
        </router-link>
        <p>{{user.email}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "userList",
  data() {
    return {
      users: []
    };
  },

  mounted() {
    axios
      .get("https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d.json")
      .then(({ data }) => (this.users = data.results));
  }
};
</script>
