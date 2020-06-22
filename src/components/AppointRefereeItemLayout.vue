<template>
    <div class="changeTransition">
        <div v-if="!isExpanded" class=" row container1 p-4 bgGray shadow mr-2 ml-2 mb-3" dir="rtl">
            <div class=" row container1 col-12 centerItem">
                <i class=" fas fa-angle-down col-1 text-center centerItem colorBlue p-3" @click="changeOpenStatus"/>
                <div class="col-8" dir="rtl">
                    <p class="text-right p-0 m-0">مجتبی ترابی</p>
                </div>
                <div class="btn blColor col-3" v-if="isAppointed">وضعیت: دو داور فعال</div>
                <div class="btn bgColor col-3" v-else>وضعیت: نیاز به تعیین داور</div>
            </div>
        </div>
        <div v-else class="row container1 p-4 bgGray shadow mr-2 ml-2 mb-3" dir="rtl">
            <div v-if="isAppointed" class="col-12">
                <div class=" row container1 col-12 centerItem">
                    <i class=" fas fa-angle-up col-1 text-center centerItem colorBlue p-3" @click="changeOpenStatus"/>
                    <div class="col-8"/>
                    <div class="btn blColor col-3">وضعیت: دو داور فعال</div>
                </div>
                <div class="row container1 col-12" dir="rtl">
                    <div class="col-4">
                        <div class="row container1 w-100 centerVert mt-3" dir="rtl">
                            <img src="../assets/person_empty.png" class="imageCircle displayInline" width="80rem"/>
                            <div class="row container1 displayInline mr-3">
                                <p class="col-12 text-right p-0 m-0 small font-weight-bold">مجتبی ترابی</p>
                                <p class="col-12 text-right p-0 m-0 small">شماره دانشجویی: 95243063</p>
                            </div>
                        </div>
                    </div>
                    <div class="row container1 col-8 mt-5" dir="rtl">
                        <div class="col-6 text-center customRadius pt-3" id="firstRefereeDiv">
                            <img src="../assets/person_empty.png" width="80em" class="imageCircle" alt="Master Image"/>
                            <p class="font-weight-bold mt-3 mb-1 p-0">دکتر هانیه مهدوی</p>
                            <p class="font-weight-bold p-0 small">داور اول</p>
                            <i class="i fas fa-trash col-1 centerItem mb-2 customTrash hide"/>
                        </div>
                        <div class="col-6 text-center customRadius pt-3" id="secondRefereeDiv">
                            <img src="../assets/person_empty.png" width="80em" class="imageCircle" alt="Master Image"/>
                            <p class="font-weight-bold mt-3 mb-1 p-0">دکتر پویا محمدخانی</p>
                            <p class="font-weight-bold p-0 small">داور دوم</p>
                            <i class="i fas fa-trash col-1 centerItem mb-2 customTrash hide"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="col-12">
                <div class=" row container1 col-12 centerItem">
                    <i class=" fas fa-angle-up col-1 text-center centerItem colorBlue p-3" @click="changeOpenStatus"/>
                    <div class="col-8"/>
                    <div class="btn bgColor col-3">وضعیت: نیاز به تعیین داور</div>
                </div>
                <div class="row container1 col-12" dir="rtl">
                    <div class="col-4">
                        <div class="row container1 w-100 centerVert mt-3" dir="rtl">
                            <img src="../assets/person_empty.png" class="imageCircle displayInline" width="80rem"/>
                            <div class="row container1 displayInline mr-3">
                                <p class="col-12 text-right p-0 m-0 small font-weight-bold">مجتبی ترابی</p>
                                <p class="col-12 text-right p-0 m-0 small">شماره دانشجویی: 95243063</p>
                            </div>
                        </div>
                    </div>
                    <div class="row container1 col-8 mt-5" dir="rtl">
                        <div v-if="isAppointed1" class="col-6">
                            <div class="text-center customRadius pt-3" id="firstRefereeDiv1_Referee1">
                                <img src="../assets/person_empty.png" width="80em" class="imageCircle"
                                     alt="Master Image"/>
                                <p class="font-weight-bold mt-3 mb-1 p-0">دکتر هانیه مهدوی</p>
                                <p class="font-weight-bold p-0 small">داور اول</p>
                                <i class="i fas fa-trash col-1 centerItem mb-2 customTrash hide"/>
                            </div>
                        </div>
                        <div v-else class="col-6">
                            <div class="text-center customRadius pt-3" id="secondRefereeDiv1-Referee1_empty">
                                <div class="container2">
                                    <img src="../assets/whiteBg.jpg" width="80em" class="imageCircle"
                                         alt="Master Image"/>
                                    <div class="i fas fa-plus centerItem customTrash centered gray"/>
                                </div>
                                <p class="font-weight-bold mt-3 mb-1 p-0 small">برای طی شدن ادامه روند پروپوزال مجددا
                                    داور اول را انتخاب کنید</p>
                                <div class="row col-12 container1" dir="rtl">
                                    <div class="dropdown show w-50 pl-3">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                           id="dropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            انتخاب
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a class="dropdown-item text-right" href="#">دکتر کیوان ناوی</a>
                                            <a class="dropdown-item text-right" href="#">دکتر مجتبی وحیدی اصل</a>
                                            <a class="dropdown-item text-right" href="#">دکتر محمود نشاطی</a>
                                        </div>
                                    </div>
                                    <div class="w-50 btn btn-success textColorWhite fontSmallest  pr-3">پیشنهاد سیستم
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="isAppointed2" class="col-6 ">
                            <div class="text-center customRadius pt-3" id="firstRefereeDiv1_Referee2">
                                <img src="../assets/person_empty.png" width="80em" class="imageCircle"
                                     alt="Master Image"/>
                                <p class="font-weight-bold mt-3 mb-1 p-0">دکتر هانیه مهدوی</p>
                                <p class="font-weight-bold p-0 small">داور اول</p>
                                <i class="i fas fa-trash col-1 centerItem mb-2 customTrash hide"/>
                            </div>
                        </div>
                        <div v-else class="col-6 ">
                            <div class="text-center customRadius pt-3" id="secondRefereeDiv2_Referee2_empty">
                                <div class="container2">
                                    <img src="../assets/whiteBg.jpg" width="80em" class="imageCircle"
                                         alt="Master Image"/>
                                    <div class="i fas fa-plus centerItem customTrash centered gray"/>
                                </div>
                                <p class="font-weight-bold mt-3 mb-1 p-0 small">برای طی شدن ادامه روند پروپوزال مجددا
                                    داور دوم را انتخاب کنید</p>
                                <div class="row col-12 container1" dir="rtl">
                                    <div class="dropdown show w-50 pl-3">
                                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                           id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">
                                            انتخاب
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a class="dropdown-item text-right" href="#">دکتر کیوان ناوی</a>
                                            <a class="dropdown-item text-right" href="#">دکتر مجتبی وحیدی اصل</a>
                                            <a class="dropdown-item text-right" href="#">دکتر محمود نشاطی</a>
                                        </div>
                                    </div>
                                    <div class="w-50 btn btn-success textColorWhite fontSmallest  pr-3">پیشنهاد سیستم
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppointRefereeItemLayout",
        props: ["isAppointed", "isAppointed1", "isAppointed2"],
        data() {
            return {
                isExpanded: false
            }
        },
        methods:
            {
                changeOpenStatus() {
                    this.isExpanded = !this.isExpanded;
                }

            }
    }
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

    .textColorWhite {
        color: white;
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

    .customRadius {
        border-radius: 5px;
    }

    #firstRefereeDiv, #secondRefereeDiv {

        background-color: #efefef;
        transition: background-color 0.5s;
    }

    #firstRefereeDiv:hover, #secondRefereeDiv:hover {
        background-color: #777;
        transition: background-color 0.5s;
    }

    #firstRefereeDiv:hover .hide, #secondRefereeDiv:hover .hide {
        display: block;
    }

    .customTrash {
        position: absolute;
        top: 12px;
        right: 12px;
    }

    .hide {
        display: none;
    }

    .addReferee {
        height: auto;
    }

    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 24px;
        color: black;
        transform: translate(-50%, -50%);
    }

    .container2 {
        position: relative;
        text-align: center;
        color: white;
    }

    .fontSmallest {
        font-size: 12px;
    }
</style>