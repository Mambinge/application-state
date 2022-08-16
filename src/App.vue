<template>
    <!-- <div class="container">
      <h2>Users</h2>
      <router-view/>
    </div> -->

    <div>
      <SideBar/>
      <main class="py-4">
      <router-view/>
      </main>
    </div>
</template>

<script>

import SideBar from "./components/shared/SideBar.vue";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SideBar,
}}

</script>