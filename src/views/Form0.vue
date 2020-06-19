<template>
  <div class="mb-5 pb-5">
    <div class="row mr-0 ml-0">
      <div class="col-3" />
      <div class="col-6">
        <div class="pt-5">
          <div class="bg-white text-center jumbotron mt-5 row bordering">
            <div class="col-10">
              <div>
                <p>
                  قبل از شروع فرآیند، فایل نمونه پروپوزال یا همان تمپلیت را دانلود کنید و با توجه به
                  آن فیلد ها را پر کنید!
                </p>
                <div class="text-center">
                  <a
                    :href="item.url"
                    v-text="item.text"
                    @click.prevent="downloadItem()"
                    type="button"
                    class="btn btnDownload pr-4 pl-4"
                  />
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="row">
                <div class="d-flex align-items-center justify-content-center">
                  <img class="imageDanger align-middle" src="../assets/warning128.png" alt="Logo" />
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <p
              class="font-weight-bold font-size-24 mb-5 mt-5 pt-5"
            >برای شروع فرآیند ثبت پروپوزال، بر روی دکمه زیر کلیک کنید</p>
          </div>
          <div class="text-center">
            <router-link to="/register/1" class="btn btn-primary pr-3 pl-3">
              <small>شروع</small>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-3" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import HorizontalStepper from "../components/HorizontalStepper";
Vue.component("horizontalStepper", HorizontalStepper);
export default {
  name: "Form0",
  data() {
    return {
      parameters: 0,
      arrayData: [],
      item: {
        url: "http://127.0.0.1:5000/api/get_student_guide_file",
        text: "دانلود"
      }
    };
  },
  methods: {
    adding() {
      // alert(this.arrayData);
      this.arrayData = this.arrayData.concat({
        id: this.parameters++,
        text: "",
        hasLink: false,
        link: ""
      });
    },
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
.bordering {
  text-align: center;
  margin: 0 auto;
  border-radius: 3px;
  border: #0099cb solid 1px;
  padding: 20px;
  border-top: #0099cb solid 2px;
  max-width: 540px;
}
.imageDanger {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  margin-top: -30px;
  left: 50%;
  margin-left: -30px;
}
.btnDownload {
  background-color: white;
  border: #0099cb 1px solid;
  border-radius: 3px;
  color: #0099cb;
}
</style>