<template>
    <div>
        <div class="col-12 row container1 centerVert" dir="rtl">
            <div class="col-6 centerVert">
                <img src="../assets/person_empty.png" class="imageCircle" width="80em" alt="student image"/>
                <div class="row container1 mr-3">
                    <p class="col-12 text-right p-0 m-0 font-weight-bold">مجتبی ترابی</p>
                    <p class="col-12 text-right p-0 m-0">شماره دانشجویی: 95243063</p>
                </div>
            </div>
            <div class="col-6">
                <div class="btn top-left-btn float-left">جلسه بررسی غیر حضوری پروپوزال</div>
            </div>
        </div>
        <vue-editor v-model="content" class="mt-3"></vue-editor>
        <div class="splitter mt-3 mb-3"/>
        <div class="row container1  w-100" dir="rtl">
            <div class="col-6 w-100" dir="rtl">
                <router-link to="#" class="btn btnSend ml-4 float-right ">
                    <i class="fas fa-paper-plane"></i>
                    <span class="mr-2">فرستادن</span>
                </router-link>
                <router-link to="#" class="btn ml-4 float-right btnBack">
                    <span class="mr-2 ml-2">بازگشت</span>
                    <i class="fas fa-arrow-left"></i>
                </router-link>
            </div>
            <div class="col-6  w-100">
                <router-link to="#" class="btn colorSet ml-4">
                    <i class="fas fa-eye"></i>
                    <span class="mr-2">مشاهده پروپوزال</span>
                </router-link>
                <router-link to="#" class="btn colorSet ml-4">
                    <i class="fas fa-download"></i>
                    <span class="mr-2">دانلود پروپوزال</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {VueEditor} from "vue2-editor";

    export default {
        name: "RefereeProposalItem",
        data() {
            return {
                content: ""
            }
        },
        components: {
            VueEditor
        }
    }
</script>

<style scoped>
    .container1 {
        margin: 0;
    }

    .imageCircle {
        border-radius: 50%;
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
        text-align: center;
    }

    .top-left-btn {
        border-radius: 4px;
        border: 1px solid #0099cb;
    }

    .splitter {
        width: 100%;
        height: 1px;
        background-color: #cccccc;
    }

    .colorSet {
        color: #ee711d;
        border: #ee711d 1px solid;
    }

    .btnSend {
        background-color: #0099cb;
        color: white;
        border-radius: 4px;
    }

    .btnBack {
        color: #666666;
    }
</style>