<template>
  <div>
    <div class="row container1">
      <horizontal-stepper :active-step-number="3"></horizontal-stepper>
    </div>
    <content-suggest class="mr-5 ml-5 pr-5 pl-5" :step-number="currentStep" />
  </div>
</template>

<script>
import Vue from "vue";
import HorizontalStepper from "./HorizontalStepper";
import App7Suggest from "./App7Suggest";

Vue.component("horizontalStepper", HorizontalStepper);
Vue.component("contentSuggest", App7Suggest);

export default {
  props: ["currentStep"],
  name: "InputDataComp"
};
</script>

<style scoped>
.container1 {
  margin: 0;
}
</style>