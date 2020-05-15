<template>
  <div class="mb-5 pb-5">
    <div class="row container1">
      <horizontal-stepper :active-step-number="4"></horizontal-stepper>
    </div>
    <div class="row mr-0 ml-0">
      <div class="col-3" />
      <div class="col-6">
        <div v-if="arrayData.length !== 0" class="mt-5 mb-5 text-center">
          <h3>لیست مراجع و منابع</h3>
        </div>
        <div v-for="parameter in arrayData.length" :key="parameter" class="dirRTL card bordering">
          <div class="card-body">
            <label for="textRef">متن منبع</label>
            <input
              id="textRef"
              type="text"
              class="form-control mb-2"
              v-model="arrayData[parameter-1].text"
            />
            <div v-if="arrayData[parameter-1].hasLink">
              <label for="linkRef">لینک</label>
              <input
                id="linkRef"
                type="text"
                class="form-control mb-2"
                v-model="arrayData[parameter-1].link"
              />
            </div>
            <div class="row dirLTR ml-0">
              <div class="dirLTR mt-1">
                <button
                  type="button"
                  class="btn btn-danger pull-left ml-1"
                  @click="deleteThisItem(parameter-1)"
                >
                  <small>حذف کردن</small>
                </button>
                <div v-if="!arrayData[parameter-1].hasLink" class="inlineC">
                  <button
                    type="button"
                    class="btn btn-primary ml-1"
                    @click="arrayData[parameter-1].hasLink = true"
                  >
                    <small>افزودن لینک</small>
                  </button>
                </div>
                <div v-else class="inlineC">
                  <button
                    type="button"
                    class="btn btn-danger ml-1"
                    @click="arrayData[parameter-1].hasLink = false"
                  >
                    <small>حذف لینک</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white text-center jumbotron mt-5" v-if="arrayData.length === 0">
            <img src="../assets/icon_empty_box_gray.png" alt="Logo" />
            <p class="text-center mt-2 coloring">هیج منبعی وجود ندارد</p>
          </div>
          <div class="mb-5" v-else />
          <div class="text-center">
            <button type="button" class="btn btn-primary" @click="adding()">
              <small>افزودن منبع جدید</small>
            </button>
          </div>
        </div>
      </div>
      <div class="col-3" />
    </div>
    <div class="row justify-content-center mr-0 ml-0">
      <div class="col-5 mt-5 border-top">
        <div class="row mt-4">
          <div class="col-5 mt-1">
            <router-link to="/register/3" class="btn btn-default p-3 text-secondary">
              <span class="fas fa-arrow-left" />
              <small class="ml-2">بازگشت</small>
            </router-link>
          </div>
          <div class="col-7 d-flex align-items-end flex-column">
            <!-- <router-link to="/register/5" class="btn btn-primary">
              <small>مرحله بعد</small>
            </router-link>-->
            <button
              @click="onNext"
              :class="notAllowed"
              class="btn btn-primary"
              :disabled="all_filled"
            >
              <small>مرحله بعد</small>
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
  name: "Form4",
  data() {
    return {
      parameters: 0,
      arrayData: []
    };
  },
  methods: {
    adding() {
      // alert(this.arrayData);
      this.arrayData = this.arrayData.concat({
        id: this.parameters++,
        text: null,
        hasLink: false,
        link: null
      });
    },
    deleteThisItem(param) {
      // alert(param);
      // this.arrayData.splice(this.arrayData.indexOf(param), 1);
      this.arrayData.splice(param, 1);
      // this.arrayData = this.arrayData[param].remove();
    },
    onNext() {
      const formData = {
        references: this.arrayData,
        api: null,
        to: "/register/5"
      };
      this.$store.dispatch("saveProposalRefs", formData);
    }
  },
  computed: {
    all_filled() {
      const items = this.arrayData;
      for (var item in items) {
        // console.log(items[item].text);
        if (items[item].text != undefined) {
          if (items[item].text.length > 4) {
            //todo: make sure it is a link!
            return false;
          }
        }
      }
      return true;
    },
    notAllowed() {
      if (this.arrayData[this.parameters - 1] == undefined) {
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
.container1 {
  margin: 0;
}
.dirRTL {
  text-align: right;
  direction: rtl;
  alignment: right;
}
.dirLTR {
  text-align: left;
  direction: ltr;
  alignment: left;
}
.bordering {
  border-radius: 5px;
  border: #ee711d solid 1px;
  padding: 20px;
  margin-top: 20px;
  border-top: #ee711d solid 2px;
}
.inlineC {
  display: inline;
}
.coloring {
  color: #666;
}
</style>