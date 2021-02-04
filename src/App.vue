<template>
  <div id="app">
    <SiteNav v-if="showNav"></SiteNav>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SiteNav from "@/components/SiteNav";

export default {
  components: {
    SiteNav,
  },
  computed: {
    ...mapState(["userProfile"]), //mapState to get userProfile. mapState is a Vuex helper that allows you to access properties on your state object without having to type them manually each time you need to reference them.
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    },
  },
};
</script>

<style lang="scss"></style>
