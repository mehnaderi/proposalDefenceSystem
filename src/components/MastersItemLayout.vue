<template>
  <div class="settings">
    <div class="bgColorWhite jumbotron mt-4 row bordering w-100" dir="rtl">
      <div class="row">
        <img class="imgC col-4" src="../assets/person_empty.png" alt="Dirush not found!" />
        <div class="col-8 marginCenter" dir="rtl">
          <p class="colorBlue mt-0 mb-0">
            <small class="font-weight-bold">{{name}}</small>
          </p>
          <p class="colorBlue mt-0 mb-0">
            <small class="font-weight-bold">{{duty}}</small>
          </p>
          <p class="mt-0 mb-0">
            <small>{{degree+" "+field}}</small>
          </p>
        </div>
      </div>
      <div class="row mr-3 mt-5">
        <div class="col-12 mb-2">
          <p class="inlineMode fas fa-phone ml-3 colorBlue"></p>
          <p class="inlineMode">
            <small class="inlineMode">{{phoneNumber}}</small>
          </p>
        </div>
        <div class="col-12 mb-2">
          <p class="inlineMode fas fa-envelope ml-3 colorBlue"></p>
          <p class="inlineMode">
            <small class="inlineMode">{{email}}</small>
          </p>
        </div>
        <div class="col-12">
          <p class="inlineMode fas fa-calendar-alt ml-3 colorBlue"></p>
          <p class="inlineMode">
            <small class="inlineMode">{{" مراجعه حضوری "+referTime}}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "duty",
    "degree",
    "field",
    "phoneNumber",
    "email",
    "referTime"
  ],
  name: "MastersItemLayout"
};
</script>

<style scoped>
.bordering {
  text-align: right;
  margin: 0 auto;
  border-radius: 3px;
  border: #0099cb solid 1px;
  padding: 20px;
}
.colorBlue {
  color: #0099cb;
}
.bgColorWhite {
  background-color: white;
}
.imgC {
  border-radius: 50%;
}
.marginCenter {
  margin: auto;
}
.inlineMode {
  float: right;
  margin: auto;
}
</style>