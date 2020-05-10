<template>
  <div id="app">
    <div class="py-auto px-0">
      <AppNavigation></AppNavigation>
      <router-view></router-view>
    </div>
      <app-footer></app-footer>
  </div>
</template>
<script>
import AppNavigation from "../src/components/AppNavigation";
import AppFooter from "../src/components/AppFooter";
export default {
  components: {
    AppNavigation,
    AppFooter,
  }
};
</script>