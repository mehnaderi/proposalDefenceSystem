<template>
  <div class="mb-5 pb-4">
    <h3 class="text-center font-weight-bold pt-1 font-weight-bold mt-4">جزئیات پیشنهاد</h3>
    <div class="row justify-content-center">
      <div class="col-2"></div>
      <div class="col-7 pr-3 mb-2 mt-1">
        <p class="text-right pt-4">{{steps[activeStep-1]}}</p>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row">
      <div class="col-2 card bg-light">
        <div class="card-body">
          <div class="row">
            <div class="col-3" />
            <img src="../assets/warning128.png" alt="Logo" class="col-6" />
            <div class="col-3" />
          </div>
          <div class="row">
            <p
              class="pt-4 justify-center text-center"
            >لطفا قبل از پر کردن موارد پیش رو، آن را با استاد راهنمای خود مطرح کرده و یک دور بررسی نمایید</p>
          </div>
          <div class="row justify-content-center">
            <p class="pt-4">با تشکر</p>
          </div>
        </div>
        <i class="fas fa-danger"></i>
      </div>
      <div class="col-7 pr-3 pl-5">
        <vue-editor v-model="contents[activeStep-1]"></vue-editor>
      </div>
      <div class="col-3">
        <stepper :active-step-number="activeStep" />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-5 mt-5 border-top">
        <div class="row mt-4">
          <div class="col-5 mt-1" v-if="activeStep > 1">
            <button type="button" class="btn btn-default p-3 text-secondary">
              <span @click="prevStep()">
                <span class="fas fa-arrow-left" />
                <small class="ml-2">بازگشت</small>
              </span>
            </button>
          </div>
          <div class="col-5 mt-1" v-else>
            <router-link to="/register/2" class="btn btn-default p-3 text-secondary">
              <span class="fas fa-arrow-left" />
              <small class="ml-2">بازگشت</small>
            </router-link>
          </div>
          <div class="col-7 d-flex align-items-end flex-column" v-if="activeStep<7">
            <button
              @click="nextStep()"
              :disabled="!contents[activeStep-1]"
              :class="notAllowed"
              type="button"
              class="btn btn-primary p-3"
            >
              <small>بعدی : {{steps[activeStep]}}</small>
            </button>
          </div>
          <div class="col-7 d-flex align-items-end flex-column" v-else>
            <!-- <router-link to="/register/4" class="btn btn-primary p-3">
              <small>پایان</small>
            </router-link>-->
            <button
              @click="onNext"
              :class="notAllowed"
              class="btn btn-primary p-3"
              :disabled="!all_filled"
            >
              <!-- :disabled="all_filled" -->
              <small>پایان</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Vue from "vue";
import VerticalStepper from "./VerticalStepper";
Vue.component("stepper", VerticalStepper);
export default {
  props: ["stepTitle", "stepNumber"],
  name: "App7Suggest",
  data() {
    return {
      e13: 1,
      activeStep: 1,
      steps: [
        "تعریف مسئله و سوال های اصلی تحقیق",
        "پیشینه پژوهش",
        "رویکرد حل مسئله",
        "فرضیه ها",
        "جنبه جدید بودن و نوآوری",
        "روش و ابزارهای لازم",
        "لیست مراجع حمایت کننده"
      ],
      contents: [null, null, null, null, null, null, null]
    };
  },
  methods: {
    nextStep() {
      this.activeStep++;
    },
    prevStep() {
      this.activeStep--;
    },
    onNext() {
      const formData = {
        contents: this.contents,
        // api: "/set_proposal_info",
        api: null,
        to: "/register/4"
      };
      this.$store.dispatch("saveProposalContent", formData);
    }
  },
  computed: {
    all_filled() {
      const items = this.contents;
      for (var item in items) {
        if (item == undefined) {
          return false;
        }
      }
      return true;
    },
    notAllowed() {
      if (this.contents[this.activeStep - 1] == undefined) {
        return "notAllowed";
      } else {
        return "";
      }
    }
  },
  components: {
    VueEditor
  }
};
</script>

<style scoped>
.notAllowed {
  cursor: not-allowed;
}
p.app-color {
  color: rgb(0, 153, 204);
}
@font-face {
  font-family: "IRANSans-Light";
  src: url("../../public/img/Fonts/IRANSansWeb.ttf") format("ttf"),
    url("../../public/img/Fonts/IRANSansWeb.woff") format("woff");
}
* {
  font-family: "IRANSans Medium";
}
p.app-color a {
  color: rgb(0, 153, 204);
}
</style>