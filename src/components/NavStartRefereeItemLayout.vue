<template>
  <div class="row">
    <div class="col-1"></div>
    <div
      class="col-10 container1 bgGray justify-content-center mb-2 p-4 centerItem customRadius shadow"
      dir="rtl"
    >
      <div class="col-2 centerItem">
        <!-- <p class="font-weight-bold m-0">مجتبی ترابی</p> -->
        <p class="font-weight-bold m-0">{{this.$store.getters.getStudentsList[index].name}}</p>
      </div>
      <div class="col-3">
        <!-- <router-link v-if="!isGreen" :to="'/SendRefereeManagerPage/' + index" class="btn blColor m-0"> -->
        <router-link v-if="!isGreen" :to="'/SendRefereeManagerPage/' + index" class="btn blColor m-0">
          <span>شروع داوری</span>
        </router-link>
      </div>
      <div class="col-1" />
      <div class="col-3 text-center displayBlock" dir="rtl">
        <p class="m-0 displayInline colorGreen float-left" v-if="isGreen">۲ روز تا شروع شورا</p>
        <p class="m-0 displayInline colorOrange float-left" v-else>۳ هفته تا پایان داوری</p>
        <i class="m-0 fas fa-stopwatch colorGreen displayInline pl-2 float-left" v-if="isGreen" />
        <i class="m-0 fas fa-stopwatch colorOrange displayInline pl-2 float-left" v-else />
      </div>
      <div class="col-4 centerItem">
        <div v-if="!isGreen" class="btn leftButtonConfig small pt-2 pb-2 pr-4 pl-4">در انتظار داوری</div>
        <div v-else class="btn leftButtonConfig small pt-2 pb-2 pr-4 pl-4">در انتظار تایید شورا</div>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
export default {
  name: "NavStartRefereeItemLayout",
  props: ["isGreen", "index"]
};
</script>

<style scoped>
.shadow {
  box-shadow: 0 0.2rem 0.15rem rgba(0, 0, 0, 0.12) !important;
}

.customRadius {
  border-radius: 5px;
}

.container1 {
  margin: 0;
}

.bgGray {
  background-color: #eeeeee;
}

.centerItem {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.blColor {
  background-color: #0099cb;
  color: white;
}

.displayInline {
  display: inline;
}

.displayBlock {
  display: block;
}

.colorGreen {
  color: limegreen;
}

.colorOrange {
  color: #ee711d;
}

.leftButtonConfig {
  background-color: white;
  border: 1px solid #0099cb;
  color: #0099cb;
  border-radius: 4px;
  /* font-weight: bold; */
}
</style>