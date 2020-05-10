<template>
  <div class="container">
    <div class="container text-center p-0">
      <div class="row justify-content-center m-0">
        <div class="col-12 p-md-1">
          <h3 class="font-weight-bold">ورود به سامانه دفاع از پروپوزال</h3>
        </div>
        <div class="col-md-8 col-12 p-m-5 p-sm-4">
          <img class="img-fluid col-4" src="../assets/logo.png" alt="داریوش پیدا نشده" />
        </div>
        <div class="col-lg-5 col-md-6 col-10">
          <form dir="rtl">
            <div class="form-group row text-left font-weight-bold">
              <label class="col-md-4 col-sm-3 col-3 col-form-label p-sm-3 p-2">ایمیل :</label>
              <div class="col-md-8 col-sm-9 col-9 p-0">
                <input
                        type="text"
                        placeholder="example@gmail.com"
                        class="form-control border border-top-0 border-right-0 border-left-0 rounded-0"
                />
              </div>
            </div>
            <div class="form-group row text-left font-weight-bold">
              <label class="col-md-4 col-sm-3 col-3 col-form-label p-sm-3 p-0">رمز عبور :</label>
              <div class="col-md-8 col-sm-9 col-9 p-0">
                <input
                        type="password"
                        class="form-control border border-top-0 border-right-0 border-left-0 rounded-0"
                />
              </div>
            </div>
            <!-- اگه کاربر ثبت نام نکرده بود میره صفحه ثبت وگرنه میره صفحه خانه -->
            <router-link to="/proposalform" type="submit" class="btn btn-outline-secondary my-auto">ورود</router-link>
          </form>
        </div>
        <div class="col-12 pt-md-3 text-muted">
          <a href="#" class="text-reset">
            <u>فراموشی اطلاعات</u>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

