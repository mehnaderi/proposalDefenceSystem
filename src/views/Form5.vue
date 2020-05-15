<template>
  <div class="mb-5 pb-5">
    <div class="row container1">
      <horizontal-stepper :active-step-number="5"></horizontal-stepper>
    </div>
    <div class="row mr-0 ml-0">
      <div class="col-3" />
      <div class="col-6">
        <div v-if="arrayData.length !== 0" class="mt-5 mb-5 text-center">
          <h3>لیست مراجع و منابع</h3>
        </div>
        <div v-for="parameter in arrayData.length" :key="parameter" class="dirRTL card bordering">
          <div class="card-body">
            <label for="textDuty">متن منبع</label>
            <input
              id="textDuty"
              type="text"
              class="form-control mb-2"
              v-model="arrayData[parameter-1].text"
            />
            <div class="form-group">
              <label for="weekDuty">هفته انجام فعالیت</label>
              <select class="form-control mb-2" id="weekDuty" v-model="arrayData[parameter-1].week">
                <option v-for="item in 12" :key="item">{{item}}</option>
              </select>
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
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-white text-center jumbotron mt-5" v-if="arrayData.length === 0">
            <img src="../assets/icon_empty_box_gray.png" alt="Logo" />
            <p class="text-center mt-2 coloring">تاکنون هیچ فعالیتی وارد نشده است</p>
          </div>
          <div class="mb-5" v-else />
          <div class="text-center">
            <button type="button" class="btn btn-primary" @click="adding()">
              <small>افزودن فعالیت جدید</small>
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
            <router-link to="/register/4" class="btn btn-default p-3 text-secondary">
              <span class="fas fa-arrow-left" />
              <small class="ml-2">بازگشت</small>
            </router-link>
          </div>
          <div class="col-7 d-flex align-items-end flex-column">
            <!-- <router-link to="/home" class="btn btn-primary">
              <small>پایان</small>
            </router-link>-->
            <button
              @click="onNext"
              :class="notAllowed"
              class="btn btn-primary"
              :disabled="all_filled"
            >
              <small>پایان</small>
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
  name: "Form5",
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
        week: null
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
        timetable: this.arrayData,
        api: "/set_proposal_info",
        to: "/home"
      };
      console.log(formData);
      this.$store.dispatch("saveProposalTimeTable", formData);
    }
  },
  computed: {
    all_filled() {
      const items = this.arrayData;
      for (var item in items) {
        if (items[item].text != undefined) {
          if (items[item].text.length > 4 && items[item].week != undefined) {
            //todo: make sure it is a link!
            // console.log(items[item].text);
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
.coloring {
  color: #666;
}
</style>