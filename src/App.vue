<template>
    <!-- <div class="container">
      <h2>Users</h2>
      <router-view/>
    </div> -->

    <div>
      <navbar></navbar>
      <main class="py-4">
      <router-view/>
      </main>
    </div>
</template>

<script>

import SideBar from "./components/shared/SideBar.vue";
import firebase from "firebase";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SideBar
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
}

</script>