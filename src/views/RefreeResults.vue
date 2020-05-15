<template>
  <div class="mb-5 pb-5">
    <div class="row container1">
      <horizontal-stepper-home :active-step-number="2"></horizontal-stepper-home>
    </div>
    <div class="text-center jumbotron mt-5 row bordering w-50">
      <div class="text-center centering fas fa-medal w-25 customMedal mt-2" />
      <div class="text-center centering mt-4">
        <div class="w-50 centering">
          <p class="colorBlue boldW">
            <small class="font-weight-bold">
              دانشجوی گرامی، با عرض خسته نباشید خدمت
              شما تبریک می گوییم. شما موفق شدید از مرحله داوری حضوری با موفقیت عبور کنید
              ضمنا اساتید محترم حاضر در جلسه نواقص شما و اصلاحاتی که باید بر روی پروژه صورت بگیرد تا آماده
              مرحله ی بعدی شود را برای شما بارگذاری کرده اند.
            </small>
          </p>
        </div>
        <div class="w-75 centering">
          <p class="colorOrange">
            <small class="font-weight-bold">
              شما می توانید این اصلاحات را در بخش برای
              انجام دادن مشاهده کنید و نسبت به تکمیل آن بکوشید
            </small>
          </p>
        </div>
      </div>
      <router-link
        to="/todo"
        class="row font-weight-bold centerTODO colorWhite btn btn-primary mt-2"
        dir="rtl"
      >
        <p class="inlineMode fas fa-calendar-check customFontSize mr-1 ml-2"></p>
        <p class="inlineMode mt-1">برای انجام دادن</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import HorizontalStepperHome from "../components/HorizontalStepperHome";
Vue.component("horizontalStepperHome", HorizontalStepperHome);
export default {
  name: "RefereeResults"
};
</script>

<style scoped>
.container1 {
  margin: 0;
}
.boldW {
  font-weight: bold;
}
.bordering {
  text-align: center;
  margin: 0 auto;
  border-radius: 3px;
  border: #0099cb solid 1px;
  padding: 20px;
}
.centering {
  margin: 0 auto;
}
.customMedal {
  font-size: 60px;
  color: #0099cb;
}
.colorOrange {
  color: #ee711d;
}
.colorBlue {
  color: #0099cb;
}
.colorWhite {
  color: white;
}
.centerTODO {
  margin: auto;
  padding-right: 8px;
}
.customFontSize {
  font-size: 30px;
}
.inlineMode {
  float: right;
  margin: auto;
}
</style>