<template>
    <div class="row container1 bgGray col-12 mb-2 p-4 centerItem customRadius shadow" dir="rtl">
        <div class="col-2 centerItem">
            <p class="font-weight-bold m-0">مجتبی ترابی</p>
        </div>
        <div class="col-2">
            <router-link to="/SendRefereeManagerPage" class="btn blColor m-0">
                <span>شروع داوری</span>
            </router-link>
        </div>
        <div class="col-2"/>
        <div class="col-3 text-center displayBlock" dir="rtl">
            <p class="m-0 displayInline colorGreen float-left customFont" v-if="isGreen">2 روز تا شروع شورا</p>
            <p class="m-0 displayInline colorOrange  float-left customFont" v-else>3 هفته تا پایان داوری</p>
            <i class="m-0 fas fa-stopwatch colorGreen displayInline pl-2 float-left" v-if="isGreen"/>
            <i class="m-0 fas fa-stopwatch colorOrange displayInline pl-2  float-left" v-else/>

        </div>
        <div class="col-3 centerItem">
            <div class="btn leftButtonConfig small pt-2 pb-2 pr-4 pl-4">
                در انتظار تایید شورا
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavStartRefereeItemLayout",
        props: ["isGreen"]
    }
</script>

<style scoped>
    .shadow {
        box-shadow: 0 0.2rem 0.15rem rgba(0, 0, 0, 0.12) !important;
    }

    .customRadius {
        border-radius: 5px;
    }

    .container1 {
        margin: 0;
    }

    .bgGray {
        background-color: #eeeeee;
    }

    .centerItem {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .blColor {
        background-color: #0099cb;
        color: white;
    }

    .customFont {
        font-family: IRANSansFaNum, sans-serif;
    }

    .displayInline {
        display: inline;
    }

    .displayBlock {
        display: block;
    }

    .colorGreen {
        color: limegreen;
    }

    .colorOrange {
        color: #ee711d;
    }

    .leftButtonConfig {
        background-color: white;
        border: 1px solid #0099cb;
        color: #0099cb;
        border-radius: 4px;
        font-weight: bold;
    }

</style>