<template>
    <div class=" mb-5 pb-5">
        <div class="row container1 backgroundGray">
            <slider-layout class="col-12 mt-3 mb-3" v-bind:input-array="this.sliderArrayData"/>
        </div>
        <div class="container container-fluid px-5 mt-5">
            <div class="row ml-0 mr-0">
                <div class="col-6 px-5">
                    <div class="row justify-content-center">
                        <div class="col-12 p-0">
                            <div dir="rtl">
                                <div class="row  font-weight-bold centerTODO text-info" dir="rtl">
                                    <p class="inlineMode fas fa-calendar-check customFontSize"></p>
                                    <p class="inlineMode mr-2">جلسه داوری</p>
                                    <router-link to="#" v-if="this.refereeList.length > 2">
                                        <span class="inlineModeLeft ml-2">بیشتر</span>
                                    </router-link>
                                </div>
                                <!-- <p class="text-left">برای انجام دادن</p> -->
                                <div id="frst" class="card-body shadow pt-1 pb-1">
                                    <div v-if="this.refereeList.length > 0">
                                        <referee-item-layout/>
                                        <div v-if="this.refereeList.length > 1">
                                            <div class="border border-top-0 border-left-0 border-right-0 my-2"></div>
                                            <referee-item-layout/>
                                        </div>
                                        <div v-else>
                                            <div style="visibility: hidden"
                                                 class="border border-top-0 border-left-0 border-right-0 my-2"/>
                                            <referee-item-layout style="visibility: hidden"/>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <p class="noRefereeItem">جلسه دفاع فعالی وجود ندارد!</p>
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
                                <div class="row text-right font-weight-bold center">
                                    <p class="inlineMode fas fa-pen-square customFontSize"></p>
                                    <p class="inlineMode mr-2">پروپوزال</p>
                                </div>
                                <div id="nxt" class="card-body shadow border">
                                    <p class="text-center small py-md-4">
                                        برای انتخاب داوران پروپوزال ها و ویرایش زمان حضور کلیک کنید!
                                    </p>
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <button type="button" class="btn colorSet ml-4" data-toggle="modal"
                                                    data-target="#presentTimeModal" dir="rtl">
                                                <i class="fas fa-edit"></i>
                                                <span class="mr-2">ویرایش زمان حضور</span>
                                            </button>
                                            <router-link to="/AppointReferee" class="btn colorSet ml-4">
                                                <i class="fas fa-user-plus"></i>
                                                <span class="mr-2">انتخاب داوران</span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5 mb-5 mr-4 ml-4">
                <student-slider/>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="presentTimeModal" role="dialog">
            <div class="row p-0 modal-dialog modal-lg  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body centerItem row container1">
                        <VueCtkDateTimePicker locale="fa" inline="true" v-model="dateList"/>
                    </div>
                    <button type="button" class="btn btn-default mb-3" data-dismiss="modal" dir="rtl">
                        <span class="mr-2 ml-2">بازگشت</span>
                        <i class="fas fa-arrow-left"></i>
                    </button>

                </div>
            </div>
        </div>

    </div>
</template>


<script>
    import Vue from "vue";
    import axios from "axios";
    import SliderLayout from "../components/SliderLayout";
    import refereeItemLayout from "../components/MasterRefereeItemLayout";
    import studentSlider from "../components/StudentSlider";

    import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
    import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

    Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

    Vue.component("sliderLayout", SliderLayout);
    Vue.component("refereeItemLayout", refereeItemLayout);
    Vue.component("studentSlider", studentSlider);


    export default {
        name: "Home",
        data() {
            return {
                refereeList: ["sd", "", ""],
                parameters: 0,
                sliderArrayData: ["پیام شماره 1", "پیام شماره 2", "پیام شماره 3", "چهارمی"],
                dateList: "2018-04-16 20:26"
            };
        },
        methods: {
            downloadItem() {
                axios
                    .get(this.item.url, {
                        responseType: "pdf"
                    })
                    .then(response => {
                        const blob = new Blob([response.data], {type: "application/pdf"});
                        const link = document.createElement("a");
                        link.href = URL.createObjectURL(blob);
                        link.download = this.item.text;
                        link.click();
                        URL.revokeObjectURL(link.href);
                    })
                    .catch(console.error);
            }
        }
    };
</script>


<style scoped>
    .backgroundGray {
        background-color: #eeeeee;
    }

    .container1 {
        margin: 0;
    }

    .shadow {
        box-shadow: 0 0.2rem 0.15rem rgba(0, 0, 0, 0.12) !important;
    }

    .customFontSize {
        font-size: 30px;
    }

    #frst {
        border-top: 5px solid #0099cb !important;
        border-radius: 5px 5px 0px 0px;
    }

    #nxt {
        border-top: 5px solid #ee711d !important;
        border-radius: 5px 5px 0px 0px;
    }

    .center {
        margin: auto;
        color: #ee711d;
        padding-right: 8px;
    }

    .colorSet {
        color: #ee711d;
        border: #ee711d 1px solid;
    }

    .centerTODO {
        margin: auto;
        padding-right: 8px;
    }

    .inlineMode {
        float: right;
        clear: left;
        margin-bottom: 3px;
    }

    .inlineModeLeft {
        direction: ltr;
        position: absolute;
        left: 10px;
        margin-bottom: 3px;
    }

    .noRefereeItem {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
    }

</style>