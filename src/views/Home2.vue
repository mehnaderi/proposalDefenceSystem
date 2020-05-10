<template>
  <div class="container container-fluid px-5">
    <div class="row bg-light text-dark text-center shadow my-md-5 mx-md-3">
      <div class="col-3 border">
        <p class="my-auton border">نوار وضعیت</p>
      </div>
      <div class="col-2">
        <p class="my-auton">نوار وضعیت</p>
      </div>
      <div class="col-2 border">
        <p class="my-auton">نوار وضعیت</p>
      </div>
      <div class="col-2">
        <p class="my-auton">نوار وضعیت</p>
      </div>
      <div class="col-3">
        <p class="my-auton">نوار وضعیت</p>
      </div>
    </div>
    <div class="row">
      <div class="col-6 px-5">
        <div class="row justify-content-center">
          <div class="col-12 p-0">
            <div dir="rtl">
              <div class="text-right font-weight-bold text-info">
                <span class="fas fa-calendar-check p-2"></span>
                برای انجام دادن
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
              <div class="text-right font-weight-bold text-warning">
                <span class="fas fa-pen-square p-2"></span>
                پروپوزال
              </div>
              <div id="nxt" class="card-body shadow border">
                <p
                  class="text-center small py-md-4"
                >برای ویرایش پروپوزال خود بر روی دکمه‌ی ویرایش و برای دریافت آن بر روی دانلود کلیک کنید!</p>
                <div class="row">
                  <div class="col-12 text-center">
                    <button type="button" class="btn btn-outline-warning ml-4">
                      <i class="fas fa-edit"></i>
                      <span class="small">ویرایش پروپوزال</span>
                    </button>
                    <button type="button" class="btn btn-outline-warning">
                      <i class="fas fa-download"></i>
                      <span class="small">دانلود پروپوزال شما</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row bg-light text-center shadow my-md-5 mx-md-3 py-4">
      <div class="col-2">
        <div class="btn btn-light">
          <i class="my-4 fas fa-chevron-circle-left"></i>
        </div>
      </div>
      <div class="col-4">
        <div class="row">
          <div class="col-8 text-right small">
            <h7 class="text-primary font-weight-bold">دکتر مهرداد نادری</h7>
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
</template>

<style scoped>
.shadow {
  box-shadow: 0 0.2rem 0.15rem rgba(0, 0, 0, 0.12) !important;
}

#frst {
  border-top: 5px solid rgb(25, 117, 255) !important;
}
#nxt {
  border-top: 5px solid rgb(255, 107, 49) !important;
}
</style>