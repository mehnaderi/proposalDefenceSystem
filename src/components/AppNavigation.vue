<template>
  <div class="row">
    <nav
      class="navbar navbar-light bg-light navbar-expand-lg fixed-top font-weight-bold small shadow"
    >
      <a href="#" class="navbar-brand">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" alt="Logo" style="width:40px;" />
          <span class="pl-3">پروپوزال</span>
        </a>
      </a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto" dir="rtl">
          <!-- Dropdown -->
          <li class="nav-item dropdown p-2">
            <a
              class="nav-link dropdown-toggle"
              dir="ltr"
              href="#"
              id="navbardrop"
              data-toggle="dropdown"
            >پویا محمدخانی</a>
            <div class="dropdown-menu text-right">
              <router-link to="/" tag="a" class="dropdown-item">
                <i class="fas fa-user-edit p-1 small"></i>تنظیمات کاربری
              </router-link>
              <router-link to="/" tag="a" class="dropdown-item">
                <span class="fas fa-sign-out-alt p-1 small"></span>خروج
              </router-link>
            </div>
          </li>
          <!-- <li class="navbar-item"></li> -->
          <li class="navbar-item navItem">
            <router-link id="mainPage" to="/home" class="nav-link ml-3 navItemInner">
              <span class="fas fa-home p-2 sizeLarge"></span>صفحه اصلی
            </router-link>
          </li>
          <li class="navbar-item">
            <router-link id="refereeResult" to="/results" class="nav-link ml-3 navItemInner">
              <span class="fas fa-medal p-2 sizeLarge"></span>نتایج داوری
            </router-link>
          </li>
          <li class="navbar-item">
            <router-link id="toDo" to="/todo" class="nav-link ml-3 navItemInner">
              <span class="fas fa-calendar-check p-2 sizeLarge"></span>برای انجام دادن
            </router-link>
          </li>
          <li class="navbar-item">
            <a href="#" id="masters" class="nav-link ml-3 navItemInner">
              <span class="fas fa-chalkboard-teacher p-2 sizeLarge"></span>اساتید و داوران
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#navbarCollapse > ul > li > a {
  color: rgb(0, 153, 204);
}
.shadow {
  box-shadow: 0 0.15rem 0.2rem rgba(0, 0, 0, 0.15) !important;
}
.navItemInner {
  color: black !important;
  transition: color, background-color 100ms;
  border-radius: 3px;
}
#mainPage:hover,
#toDo:hover,
#mainPage:active,
#toDo:active {
  color: #0099cb !important;
  transition: color 100ms;
  background-color: #eeeeee;
}
#refereeResult:hover,
#refereeResult:active {
  color: #ee711d !important;
  transition: color, background-color 100ms;
  background-color: #eeeeee;
}
#masters:hover,
#masters:active {
  color: #1cbabd !important;
  transition: color, background-color 100ms;
  background-color: #eeeeee;
}
.sizeLarge {
  font-size: 18px;
}
</style>
