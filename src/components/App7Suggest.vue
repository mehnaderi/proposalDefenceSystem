<template>
    <div class="mb-5 pb-4">
        <h3 class="text-center font-weight-bold pt-1 font-weight-bold mt-4">جزئیات پیشنهاد</h3>
        <div class="row justify-content-center">
           <div class="col-2"></div>
            <div class="col-7 pr-3 mb-2 mt-1">
               <p class="text-right pt-4">{{steps[stepNumber-1]}}</p>
           </div>
            <div class="col-3"></div>
        </div>
        <div class="row">
            <div class="col-2 card bg-light">
                <div class="card-body">
                    <div class="row">
                        <div class="col-3"/>
                        <img src="../assets/warning128.png" alt="Logo" class="col-6" />
                        <div class="col-3"/>
                    </div>
                    <div class="row">
                        <p class="pt-4 justify-center text-center">لطفا قبل از پر کردن موارد پیش رو، آن را با استاد راهنمای خود مطرح کرده و یک دور بررسی نمایید</p>
                    </div>
                    <div class="row justify-content-center">
                        <p class="pt-4">با تشکر</p>
                    </div>
                </div>
                <i class="fas fa-danger"></i>
            </div>
            <div class="col-7 pr-3 pl-5">
                <vue-editor v-model="content"></vue-editor>
            </div>
            <div class="col-3">
                <stepper :active-step-number="stepNumber"/>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-5 mt-5 border-top">
                <div class="row mt-4">
                    <div class="col-5 mt-1">
                        <button type="button" class="btn btn-default p-3 text-secondary">
                            <span class="fas fa-arrow-left"/><small class="ml-2">بازگشت</small>
                        </button>
                    </div>
                    <div class="col-7 d-flex align-items-end flex-column">
                        <button type="button" class="btn btn-primary p-3">
                            <small v-if="stepNumber<7" @click="print()">بعدی : {{steps[stepNumber]}}</small>
                            <small v-else>پایان</small>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { VueEditor } from "vue2-editor";
        import  Vue from 'vue';
        import VerticalStepper from './VerticalStepper';

        Vue.component('stepper', VerticalStepper);

    export default {
        props: ["stepTitle", "stepNumber"],
        name: "App7Suggest",
        data() {
            return {
                content: 'Dariush',
                e13: 1,
                activeStep: 1,
                steps: ['تعریف مسئله و سوال های اصلی تحقیق', 'پیشینه پژوهش', 'رویکرد حل مسئله', 'فرضیه ها', 'جنبه جدید بودن و نوآوری', 'روش و ابزارهای لازم', 'لیست مراجع حمایت کننده']
            }
        },
        methods: {
            print() {
                alert(this.content);
            }
        },
        components: {
            VueEditor
        }
    }
</script>

<style scoped>
    p.app-color {
        color: rgb(0, 153, 204);
    }
    @font-face {
        font-family: "IRANSans-Light";
        src: url("../../public/img/Fonts/IRANSansWeb.ttf") format('ttf'),
        url('../../public/img/Fonts/IRANSansWeb.woff') format('woff');
    }

    * {
        font-family: "IRANSans Medium";
    }



    p.app-color a {
        color: rgb(0, 153, 204);
    }
</style>