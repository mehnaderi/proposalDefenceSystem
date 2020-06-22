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
                                <div class="row text-right font-weight-bold centerTODO text-info">
                                    <p class="inlineMode fas fa-calendar-check customFontSize"></p>
                                    <p class="inlineMode mr-2">جلسه داوری</p>
                                </div>
                                <!-- <p class="text-left">برای انجام دادن</p> -->
                                <div id="frst" class="card-body shadow pt-1 pb-1">
                                    <div v-if="this.refereeList.length > 0">
                                        <referee-item-layout/>
                                        <div class="border border-top-0 border-left-0 border-right-0 my-2"></div>
                                        <referee-item-layout/>
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
                                            <router-link to="/register/0" class="btn colorSet ml-4">
                                                <i class="fas fa-edit"></i>
                                                <span class="mr-2">ویرایش زمان حضور</span>
                                            </router-link>
                                            <router-link to="/register/0" class="btn colorSet ml-4">
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
    </div>
</template>


<script>
    import Vue from "vue";
    import axios from "axios";
    import SliderLayout from "../components/SliderLayout";
    import refereeItemLayout from "../components/MasterRefereeItemLayout";
    import studentSlider from "../components/StudentSlider";

    Vue.component("sliderLayout", SliderLayout);
    Vue.component("refereeItemLayout", refereeItemLayout);
    Vue.component("studentSlider", studentSlider);


    export default {
        name: "Home",
        data() {
            return {
                refereeList: ["sd"],
                parameters: 0,
                sliderArrayData: ["پیام شماره 1", "پیام شماره 2", "پیام شماره 3", "چهارمی"]
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

    .noRefereeItem {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
    }

</style>