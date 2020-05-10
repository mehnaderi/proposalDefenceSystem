<template>
  <div class="container container-fluid p-4">
    <div class="row">
      <div class="col-6 text-right" dir="rtl">
        <p class="text-right fa fa-home text-info">برای انجام دادن</p>
        <div class="shadow border">
          <div class="m-2">
            <div class="card-body">
              <p class="card-text">Some text inside the 1 card</p>
              <p class="card-text">Some text inside the 1 card</p>
              <p class="card-text">Some text inside the 1 card</p>
              <p class="card-text">Some text inside the 1 card</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 px-5">
        <div class="row justify-content-center">
          <div class="col-12 mb-4">
            <div dir="rtl">
              <p class="text-right">پروپوزال</p>
              <div class="card-body shadow border">
                <p
                  class="text-right small"
                >برای ویرایش پروپوزال خود بر روی دکمه‌ی ویرایش و برای دریافت آن بر روی دانلود کلیک کنید!</p>
                <div class="row">
                  <div class="col-12 text-center">
                    <button type="button" class="btn btn-outline-warning fa fa-home ml-4">
                      <span class="small">دانلود پروپوزال شما</span>
                    </button>
                    <button type="button" class="btn btn-outline-warning fa fa-home">
                      <span class="small">ویرایش پروپوزال</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mt-2">
            <p class="text-right">اساتید و داوران</p>
            <div class="card-body text-center shadow border">
              <p class="card-text">Some text inside the 3 card</p>
              <p class="card-text">Some text inside the 3 card</p>
              <p class="card-text">Some text inside the 3 card</p>
            </div>
          </div>
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