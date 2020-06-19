<template>
  <div>
    <div class="row container1">
      <horizontal-stepper-home :active-step-number="2"></horizontal-stepper-home>
    </div>
    <div class="container container-fluid px-5 mt-5">
      <div class="row ml-0 mr-0">
        <div class="col-6 px-5">
          <div class="row justify-content-center">
            <div class="col-12 p-0">
              <div dir="rtl">
                <div class="row text-right font-weight-bold centerTODO text-info">
                  <p class="inlineMode fas fa-calendar-check customFontSize"></p>
                  <p class="inlineMode mr-2">برای انجام دادن</p>
                </div>
                <!-- <p class="text-left">برای انجام دادن</p> -->
                <div id="frst" class="card-body shadow">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                      disabled
                      checked
                    />
                    <label class="custom-control-label text-right pl-5 ml-3" for="customCheck1">
                      <span>لطفا این موارد را در پروپوزال خود رعایت کنید.</span>
                    </label>
                    <div class="text-right text-muted pr-4 small mt-2">
                      <span class="small">۳ روز پیش ...</span>
                    </div>
                  </div>
                  <div class="border border-top-0 border-left-0 border-right-0 my-3"></div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                    <label class="custom-control-label text-right pl-5 ml-3" for="customCheck2">
                      <span>لطفا این موارد را در پروپوزال خود رعایت کنید.</span>
                    </label>
                    <br />
                    <div class="text-right pr-4 small mt-2">
                      <span class="small">۱ روز پیش ...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-6 px-5">
          <div class="row justify-content-center">
            <div class="col-12 p-0">
              <div dir="rtl">
                <div class="row text-right font-weight-bold center">
                  <p class="inlineMode fas fa-pen-square customFontSize"></p>
                  <p class="inlineMode mr-2">پروپوزال</p>
                </div>
                <div id="nxt" class="card-body shadow border">
                  <p class="text-center small py-md-4">
                    برای ویرایش پروپوزال خود بر روی دکمه‌ی ویرایش و برای دریافت آن بر روی دانلود کلیک
                    کنید!
                  </p>
                  <div class="row">
                    <div class="col-12 text-center">
                      <router-link to="/register/0" class="btn colorSet ml-4">
                        <i class="fas fa-edit"></i>
                        <span class="mr-2">ویرایش پروپوزال</span>
                      </router-link>
                      <span class="small">
                        <a
                          :href="item.url"
                          v-text="item.text"
                          @click.prevent="downloadItem()"
                          type="button"
                          class="btn colorSet"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row ml-5 mr-5 bg-light text-center shadow my-md-5 py-4">
        <div class="col-2">
          <div class="btn btn-light">
            <i class="my-4 fas fa-chevron-circle-left"></i>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-8 text-right small">
              <h7 class="text-primary font-weight-bold">دکتر پویا محمدخانی</h7>
              <br />
              <span class="small">استادیار هوش مصنوعی</span>
              <br />
              <br />
              <a href="#">استاد راهنما</a>
            </div>
            <div class="col-4">
              <img style="border-radius: 50%;" src="../assets/prof2.png" width="80em" alt />
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-8 text-right small">
              <h7 class="text-primary font-weight-bold">دکتر مجتبی ترابی</h7>
              <br />
              <span class="small">استادیار هوش مصنوعی</span>
              <br />
              <br />
              <a href="#">مدیر گروه</a>
            </div>
            <div class="col-4">
              <img style="border-radius: 50%;" src="../assets/prof1.png" width="80em" alt />
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="btn btn-light">
            <i class="my-4 fas fa-chevron-circle-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import axios from "axios";
import HorizontalStepperHome from "../components/HorizontalStepperHome";
Vue.component("horizontalStepperHome", HorizontalStepperHome);
export default {
  name: "Home",
  data() {
    return {
      parameters: 0,
      arrayData: [],
      item: {
        url: "http://127.0.0.1:5000/api/get_student_guide_file",
        text: " دانلود پروپوزال شما"
      }
    };
  },
  methods: {
    downloadItem() {
      axios
        .get(this.item.url, {
          responseType: "pdf"
        })
        .then(response => {
          const blob = new Blob([response.data], { type: "application/pdf" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = this.item.text;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    }
  }
};
</script>


<style scoped>
.container1 {
  margin: 0;
}
.shadow {
  box-shadow: 0 0.2rem 0.15rem rgba(0, 0, 0, 0.12) !important;
}
.customFontSize {
  font-size: 30px;
}
#frst {
  border-top: 5px solid rgb(25, 117, 255) !important;
  border-radius: 5px 5px 0px 0px;
}
#nxt {
  border-top: 5px solid #ee711d !important;
  border-radius: 5px 5px 0px 0px;
}
.center {
  margin: auto;
  color: #ee711d;
  padding-right: 8px;
}
.colorSet {
  color: #ee711d;
  border: #ee711d 1px solid;
}
.centerTODO {
  margin: auto;
  padding-right: 8px;
}
.inlineMode {
  float: right;
  clear: left;
  margin-bottom: 3px;
}
</style>