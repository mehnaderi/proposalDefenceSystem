<template>
  <div class="changeTransition">
    <div v-if="!isExpanded" class="row container1 p-4 bgGray shadow mr-2 ml-2 mb-3" dir="rtl">
      <div class="row container1 col-12 centerItem">
        <i
          class="fas fa-angle-down col-1 text-center centerItem colorBlue p-3"
          @click="changeOpenStatus"
        />
        <div class="col-8" dir="rtl">
          <!-- <p class="text-right p-0 m-0">مجتبی ترابی</p> -->
          <p class="text-right p-0 m-0">{{student.name}}</p>
        </div>
        <div class="btn btn-sm bgColor col-3" v-if="isEdited">اصلاحات جدید اعمال شده</div>
        <div class="btn btn-sm blColor col-3" v-else>در انتظار انجام اصلاحات</div>
      </div>
    </div>
    <div v-else class="row container1 p-4 bgGray shadow mr-2 ml-2 mb-3" dir="rtl">
      <div class="row container1 col-12 centerItem">
        <i
          class="fas fa-angle-up col-1 text-center centerItem colorBlue p-3"
          @click="changeOpenStatus"
        />
        <div class="col-8 row container1" dir="rtl">
          <img src="../assets/person_empty.png" class="col-2 imageCircle" />
          <div class="row container1 col-10">
            <!-- <p class="col-12 text-right p-0 m-0 small font-weight-bold">مجتبی ترابی</p>
            <p class="col-12 text-right p-0 m-0 small">شماره دانشجویی: 95243063</p>-->
            <p class="col-12 text-right p-0 m-0 small font-weight-bold">{{student.name}}</p>
            <p class="col-12 text-right p-0 m-0 small">شماره دانشجویی: {{student.studentID}}</p>
          </div>
        </div>
        <div class="btn btn-sm bgColor col-3" v-if="isEdited">اصلاحات جدید اعمال شده</div>
        <div class="btn btn-sm blColor col-3" v-else>در انتظار انجام اصلاحات</div>
      </div>
      <div class="row container1 col-12" dir="rtl">
        <div class="col-9 mt-5">
          <div class="row container1 col-12 centerItem">
            <div class="row col-11 bgWhite shadow container1" dir="rtl">
              <div class="col-7 centerItem">
                <p class="colorOrange text-center" v-if="isEdited">
                  برای تایید و یا عدم
                  تایید کردن
                  اصلاحات دانشجویان می بایست اول پروپووزال دانشجو را مشاهده کنید.
                </p>
                <p class="colorOrange text-center" v-else>
                  دانشجو هنوز اصلاحات لازم را
                  ارسال نکرده است
                </p>
              </div>
              <div class="col-5 mt-4 mb-4 text-center small">
                <router-link :to="student.url_proposal" class="btn btn-sm colorSet">
                  <i class="fas fa-download"></i>
                  <span class="mr-2">دانلود پروپوزال</span>
                </router-link>
                <!-- <router-link to="#" class="btn btn-sm colorSet mt-2">
                                    <i class="fas fa-eye"></i>
                                    <span class="mr-2">مشاهده پروپوزال</span>
                </router-link>-->
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 p-0 pt-3 pr-2" dir="rtl">
          <span dir="rtl" class="text-right displayBlock">
            <i class="fas fa-book-open colorBlue displayInline pl-2" />
            <!-- <p class="displayInline">هوش مصنوعی</p> -->
            <!-- {student.name} -->
            <p class="displayInline">{{student.field_of_study}}</p>
          </span>
          <span dir="rtl" class="text-right displayBlock">
            <!-- <p class="displayInline">mojtaba@gmail.com</p> -->
            <p class="displayInline">{{student.email}}</p>
            <i class="fas fa-envelope colorBlue displayInline pl-2" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentPageItemLayout",
  props: ["isEdited", "student", "index"],
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    changeOpenStatus() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style scoped>
.container1 {
  margin: 0;
}

.text_center {
  text-align: center;
}

.bgColor {
  background-color: #ee711d;
  color: white;
  text-align: center;
}

.bgGray {
  background-color: #efefef;
}

.centerVert {
  display: flex;
  align-items: center;
  text-align: right;
  padding: 0;
}

.centerItem {
  display: flex;
  align-items: center;
  justify-content: center;
}

.shadow {
  box-shadow: 0 0.2rem 0.15rem rgba(0, 0, 0, 0.12) !important;
}

.center {
  margin: auto;
}

.colorBlue {
  color: #0099cb;
}

.imageCircle {
  border-radius: 50%;
}

.displayInline {
  display: inline;
}

.displayBlock {
  display: block;
}

.bgWhite {
  background-color: white;
}

.colorOrange {
  color: #ee711d;
}

.colorSet {
  color: #ee711d;
  border: #ee711d 1px solid;
}

.changeTransition {
  transition: all 1s;
}

.blColor {
  color: #0099cb;
  border: 1px solid #0099cb;
}
</style>