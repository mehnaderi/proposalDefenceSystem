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
          <form @submit.prevent="onSubmit" dir="rtl">
            <div
              class="form-group row text-left font-weight-bold input"
              :class="{invalid: $v.email.$error}"
            >
              <label class="col-md-4 col-sm-3 col-3 col-form-label p-sm-3 p-2">ایمیل :</label>
              <div class="col-md-8 col-sm-9 col-9 p-0">
                <input
                  @blur="$v.email.$touch()"
                  v-model="email"
                  type="text"
                  placeholder="example@gmail.com"
                  class="form-control border border-top-0 border-right-0 border-left-0 rounded-0"
                />
                <!-- <p v-if="!$v.email.email">ایمیل معتبر نیست!</p> -->
                <!-- <p v-if="!$v.email.required">اجباری!</p> -->
                <!-- <div>{{$v.email}}</div> -->
              </div>
            </div>
            <div
              class="form-group row text-left font-weight-bold input"
              :class="{invalid: $v.password.$error}"
            >
              <label class="col-md-4 col-sm-3 col-3 col-form-label p-sm-3 p-0">رمز عبور :</label>
              <div class="col-md-8 col-sm-9 col-9 p-0">
                <input
                  @blur="$v.password.$touch()"
                  v-model="password"
                  type="password"
                  class="form-control border border-top-0 border-right-0 border-left-0 rounded-0"
                />
                <!-- <div>{{$v.password}}</div> -->
              </div>
            </div>
            <!-- اگه کاربر ثبت نام نکرده بود میره صفحه ثبت وگرنه میره صفحه خانه -->
            <!-- <router-link
              to="/proposalform"
              type="submit"
              class="btn btn-outline-secondary my-auto"
            >ورود</router-link>-->
            <button :disabled="$v.$error">go</button>
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

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
// import axios from "axios-auth";
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLen: minLength(6)
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };

      axios
        .post("http://127.0.0.1:5000/api/signup", {
          email: formData.email,
          password: formData.password,
          // returnSecureToken: true
          is_prof: false
        })
        .then(res => {
          // console.log(res);
          const item = res.data.result;
          if (item.email === this.email) {
            this.$router.push("/proposalform");
          } else {
            console.log("Login in Error");
          }
          // const data = res.data;
          // for (let key in data) {
          //   console.log(key);
          //   let item = data[key];
          //   this.dataFromServer = item.email;
          // }
        });
      // .then(error => console.log(error));
    }
  }
};
</script>

<style scope>
.input.invalid input {
  border: 5px solid red;
  background-color: rgb(255, 198, 190);
}

.input.invalid label {
  color: crimson;
}
</style>