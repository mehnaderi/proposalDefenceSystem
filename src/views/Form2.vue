<template>
  <div class="mb-5 pb-5">
    <div class="row container1 mr-0 ml-0">
      <horizontal-stepper :active-step-number="2"></horizontal-stepper>
    </div>
    <div class="container align-items-center">
      <div class="row">
        <div class="col-12 text-center mx-auto my-4">
          <h4 class="font-weight-bold">اطلاعات کلی پایان نامه</h4>
        </div>
        <div class="col-10 text-left my-sm-1" dir="rtl">
          <form @submit.prevent="onNext">
            <div class="form-group row">
              <div class="col-25" dir="rtl" align="right">
                <label for="titlePersian">عنوان:</label>
              </div>
              <div class="col-75">
                <input
                  v-model="title_fa"
                  type="text"
                  id="titlePersian"
                  name="persianTitle"
                  placeholder="عنوان فارسی"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-25" dir="ltr" align="right">
                <label for="titleEnglish">عنوان لاتین:</label>
              </div>
              <div class="col-75">
                <input
                  v-model="title_en"
                  type="text"
                  id="titleEnglish"
                  name="englishTitle"
                  placeholder="عنوان لاتین"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-25" dir="rtl" align="right">
                <label for="perKeywords">واژگان کلیدی:</label>
              </div>
              <div class="col-75">
                <input
                  v-model="keywords_fa"
                  type="text"
                  id="perKeywords"
                  name="persianKeywords"
                  placeholder="واژگان کلیدی فارسی"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-25" dir="ltr" align="right">
                <label for="EngKeywords">واژگان کلیدی لاتین:</label>
              </div>
              <div class="col-75">
                <input
                  v-model="keywords_en"
                  type="text"
                  id="EngKeywords"
                  name="englishKeywords"
                  placeholder="واژگان کلیدی لاتین"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25" dir="rtl" align="right">
                <label for="rsType">نوع تحقیق:</label>
              </div>
              <div class="col-75 customSelect">
                <select id="rsType" name="researchType" v-model="selected">
                  <option selected disabled="true" class="colorGray">انتخاب کنید</option>
                  <option v-for="(type, i) in proposal_type" :key="i" :value="type">{{type}}</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mr-0 ml-0">
      <div class="col-5 mt-5 border-top">
        <div class="row mt-4">
          <div class="col-5 mt-1">
            <router-link to="/register/1" class="btn btn-default p-3 text-secondary">
              <span class="fas fa-arrow-left" />
              <small class="ml-2">بازگشت</small>
            </router-link>
          </div>
          <div class="col-7 d-flex align-items-end flex-column">
            <!-- <router-link to="/register/3" class="btn btn-primary p-3">
              <small>بعدی: جزئیات پیشنهاد</small>
            </router-link>-->

            <!-- :style="notAllowed" -->
            <button
              @click="onNext"
              class="btn btn-primary p-3"
              :class="notAllowed"
              :disabled="all_filled"
            >
              <small>بعدی: جزئیات پیشنهاد</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import HorizontalStepper from "../components/HorizontalStepper";
Vue.component("horizontalStepper", HorizontalStepper);
export default {
  name: "Form2",
  data() {
    return {
      selected: "انتخاب کنید",
      title_fa: null,
      title_en: null,
      keywords_fa: null,
      keywords_en: null,
      proposal_type: ["بنیادی", "نظری", "کاربردی", "توسعه‌ای"]
    };
  },
  methods: {
    onNext() {
      const formData = {
        title_fa: this.title_fa,
        title_en: this.title_en,
        keywords_fa: this.keywords_fa,
        keywords_en: this.keywords_en,
        proposal_type: this.selected,
        api: null,
        to: "/register/3"
      };
      this.$store.dispatch("saveProposalHeader", formData);
    }
  },
  computed: {
    all_filled() {
      return !(
        this.title_fa &&
        this.title_en &&
        this.keywords_fa &&
        this.keywords_en
      );
    },
    notAllowed() {
      if (this.all_filled) {
        return "notAllowed";
      } else {
        return "";
      }
    }
  }
};
</script>


<style scoped>
.notAllowed {
  cursor: not-allowed;
}
* {
  box-sizing: border-box;
}
.container1 {
  margin: 0;
}
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #0099cb;
  border-radius: 4px;
  resize: vertical;
  direction: rtl;
}
label {
  padding: 12px 12px 12px 12px;
  display: inline-block;
  direction: rtl;
  text-align: right;
}
.col-25 {
  float: right;
  width: 25%;
  margin-top: 6px;
}
.col-75 {
  float: right;
  width: 50%;
  margin-top: 6px;
  padding-left: 20px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.customSelect select {
  position: relative;
}
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>