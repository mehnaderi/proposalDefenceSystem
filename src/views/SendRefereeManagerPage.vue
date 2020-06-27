<template>
    <div class="row container1 mt-5 mb-5 pb-5 pr-5 pl-5" dir="rtl">
        <div class="col-4 centerItem row container1">
            <div class="row container1 col-12 centerItem">
                <p class="pt-2 pb-2 m-0 col-10 bordering centerItem borderTopRadius">حاضرین جلسه</p>
                <profile-view-item class="col-10 pt-3 pb-3 bordering centerItem"/>
                <profile-view-item class="col-10 pt-3 pb-3 bordering centerItem"/>
                <profile-view-item class="col-10 pt-3 pb-3 bordering centerItem"/>
                <profile-view-item class="col-10 pt-3 pb-3 bordering centerItem borderBottomRadius"/>
            </div>
        </div>
        <div class="row col-8 centerItem">
            <div class="row container1 col-12" dir="ltr">
                <button type="button" class="btn top-left-exit-btn ml-3" data-toggle="modal" data-target="#exitModal"
                        dir="rtl">
                    <i class="fas fa-sign-out-alt"></i>
                    <span class="mr-2">اتمام جلسه</span>
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exitModal" role="dialog">
                    <div class="row p-0 modal-dialog modal-lg  modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body centerItem row container1" dir="rtl">
                                <div class="col-2 centerItem container1 p-0 m-0">
                                    <img src="../assets/warning128.png" class="imageCircle" width="40em"
                                         alt="master image"/>
                                </div>
                                <div class="col-8 centerItem container1  p-0 m-0">
                                    <p class="m-0">قبل از خروج لطفا وضعیت دانشجو را مشخص کنید</p>
                                </div>
                                <div class="col-2"/>
                                <div class="mt-4">
                                    <router-link to="#" class="btn bgGreen textColorWhite ml-4 float-right">
                                        <span class="mr-2">تایید پروپوزال</span>
                                    </router-link>
                                    <router-link to="#" class="btn bgBlue textColorWhite ml-4 float-right ">
                                        <span class="mr-2">نیاز به داوری دوباره</span>
                                    </router-link>
                                    <router-link to="#" class="btn top-left-exit-btn ml-4 float-right ">
                                        <span class="mr-2">تبدیل به آموزش محور</span>
                                    </router-link>
                                </div>
                            </div>

                            <div class="modal-footer centerItem">
                                <button type="button" class="btn btn-default" data-dismiss="modal" dir="rtl">
                                    <span class="mr-2 ml-2">بازگشت</span>
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row container1 col-12 mt-3">
                <referee-proposal-item class="col-12"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import RefereeProposalItem from "../components/RefereeProposalItem";
    import profileViewItem from "../components/profileViewItem";

    Vue.component("RefereeProposalItem", RefereeProposalItem);
    Vue.component("profileViewItem", profileViewItem);
    export default {
        name: "SendRefereeManagerPage"
    }
</script>

<style scoped>
    .container1 {
        margin: 0;
    }

    .centerItem {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .top-left-exit-btn {
        background-color: #d11826;
        color: white;
    }

    .bordering {
        border: 1px solid #0099cb;
    }

    .borderTopRadius {
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .borderBottomRadius {
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .textColorWhite {
        color: white;
    }

    .bgGreen {
        background-color: #00b500;
    }

    .bgBlue {
        background-color: #0099cb;
    }
</style>