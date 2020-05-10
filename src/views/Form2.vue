<template>
  <div class="container">
    <div class="container align-items-center">
      <div class="row">
        <div class="col-12 text-center mx-auto my-4">
          <ul class="progressbar">
            <li class="active">مشخصات دانشجو</li>
            <li>استاد راهنما</li>
            <li>اطلاعات پایان‌نامه</li>
            <li>فهرست منابع</li>
            <li>جدول زمان‌بندی</li>
            <li>ثبت و ارسال</li>
          </ul>
        </div>
        <div class="col-12 text-center mx-auto my-4">
          <h4 class="font-weight-bold">مشخصات استاد راهنما</h4>
        </div>
        <div class="col-md-8 col-12 text-left my-sm-1" dir="rtl">
          <form>
            <div class="form-group row">
              <label class="col-md-4 col-3 col-form-label">نام استاد :</label>
              <div class="col-md-8 col-9 pl-5">
                <select
                        name="startingyear"
                        class="custom-select mb-3 border border-top-0 border-right-0 border-left-0 rounded-0"
                >
                  <option selected>استاد راهنمای خود را انتخاب کنید ...</option>
                  <option value="volvo">اکبر</option>
                  <option value="fiat">جعفر</option>
                  <option value="audi">نقی</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-4 col-3 col-form-label">تخصص اصلی :</label>
              <div class="col-md-8 col-9 pl-5">
                <!-- <input
                  type="text"
                  placeholder="هوش مصنوعی"
                  class="form-control border border-top-0 border-right-0 border-left-0 rounded-0"
                />-->
                <select
                        name="fieldofstudy"
                        class="custom-select mb-3 border border-top-0 border-right-0 border-left-0 rounded-0"
                >
                  <option selected>تخصص را انتخاب کنید ...</option>
                  <option value="volvo">هوش مصنوعی و رباتیکز</option>
                  <option value="fiat">شبکه</option>
                  <option value="audi">مهندسی نرم‌افزار</option>
                  <option value="audi">معماری سیستم‌های کامپیوتری</option>
                  <option value="audi">مهندسی الگوریتم‌ها و محاسبات</option>
                  <option value="audi">رایانش امن (امنیت)</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-4 col-3 col-form-label">رتبه دانشگاهی :</label>
              <div class="col-md-8 col-9 pl-5">
                <!-- <input
                  type="text"
                  class="form-control border border-top-0 border-right-0 border-left-0 rounded-0"
                />-->
                <select
                        name="whichhalf"
                        class="custom-select mb-3 border border-top-0 border-right-0 border-left-0 rounded-0"
                >
                  <option selected>رتبه دانشگاهی را وارد کنید ...</option>
                  <option value="volvo">روزانه</option>
                  <option value="fiat">شبانه</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-md-4 col-3 col-form-label">آخرین مدرک :</label>
              <div class="col-md-8 col-9 pl-5">
                <!-- <input
                  type="text"
                  class="form-control border border-top-0 border-right-0 border-left-0 rounded-0"
                />-->
                <select
                        name="whichhalf"
                        class="custom-select mb-3 border border-top-0 border-right-0 border-left-0 rounded-0"
                >
                  <option selected> مدرک دانشگاهی را انتخاب کنید ...</option>
                  <option value="volvo">دکتری</option>
                  <option value="fiat">پست دکترا</option>
                  <option value="fiat">؟</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-4 col-12 text-center py-md-5 my-sm-1 border" dir="rtl">
          <p class="text-muted font-weight-bolder py-4 rounded">مرحله ۱ از ۶</p>
          <router-link
                  to="/form3"
                  tag="button"
                  class="btn btn-info"
          >بعدی: مشخصات استادان راهنما و مشاور</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .shadow {
  box-shadow: 0 0.2rem 0.15rem rgba(0, 0, 0, 0.12) !important;
} */

.progressbar {
  counter-reset: step;
}
.progressbar li {
  list-style-type: none;
  width: 15%;
  float: left;
  font-size: 12px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: #7d7d7d;
}
.progressbar li:before {
  width: 30px;
  height: 30px;
  content: counter(step);
  counter-increment: step;
  line-height: 30px;
  border: 2px solid #7d7d7d;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: white;
}
.progressbar li:after {
  width: 100%;
  height: 2px;
  content: "";
  position: absolute;
  background-color: #7d7d7d;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar li:first-child:after {
  content: none;
}
.progressbar li.active {
  color: green;
}
.progressbar li.active:before {
  border-color: #55b776;
}
.progressbar li.active + li:after {
  background-color: #55b776;
}
</style>