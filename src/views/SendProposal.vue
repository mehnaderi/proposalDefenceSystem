<template>
  <div class="container">
    <div class="container align-items-center py-sm-3">
      <div class="row py-sm-5 my-sm-5">
        <div class="col-8 text-center py-sm-5 my-sm-5" dir="rtl">
          <p class="font-weight-bold">برای شروع فرآیند ثبت پروپوزال بر روی دکمه‌ی زیر کلیک کنید!</p>
          <router-link to="/register/1" type="button" name id class="btn btn-success mt-4">شروع</router-link>
        </div>
        <div class="col-4 border text-center py-sm-5 my-sm-5" dir="rtl">
        <span>
          <h6>قبل از شروع فرآیند، فایل نمونه پروپوزال یا همان تمپلیت را دانلود کنید و با توجه به آن، فیلدها را پر کنید!</h6>
          <p>با تشکر</p>
        </span>
          <button type="button" name id class="btn btn-sm btn-info">دانلود نمونه</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shadow {
  box-shadow: 0 0.2rem 0.15rem rgba(0, 0, 0, 0.12) !important;
}
</style>