<template>
    <div class="container1 row">
        <div class="col-1"/>
        <div class=" col-10">
            <ul class="progressBar">
                <li class="active" v-if="activeStepNumber >0">{{steps[0]}}</li>
                <li v-else>{{steps[0]}}</li>
                <li class="active" v-if="activeStepNumber >1">{{steps[1]}}</li>
                <li v-else>{{steps[1]}}</li>
                <li class="active" v-if="activeStepNumber >2">{{steps[2]}}</li>
                <li v-else>{{steps[2]}}</li>
                <li class="active" v-if="activeStepNumber >3">{{steps[3]}}</li>
                <li v-else>{{steps[3]}}</li>
                <li class="active" v-if="activeStepNumber >4">{{steps[4]}}</li>
                <li v-else>{{steps[4]}}</li>
            </ul>
        </div>
        <div class="col-1"/>
    </div>
</template>

<script>
    export default {
        props: ["activeStepNumber"],
        name: "HorizontalStepper",
        data(){
            return{
                steps: [ 'مشخصات استادان راهنما و مشاور', 'اطلاعات کلی پایان نامه', 'جزئیات پیشنهاد', 'فهرست منابع و مآخذ', 'جدول زمانبندی', '', '']
            }
        }
    }
</script>

<style scoped>
    .container1{
        width: 100%;
        direction: rtl;
        background-color: #f6f6f6;
        z-index: -2;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .progressBar{
        counter-reset: stepNumber;
    }
    .progressBar li{
        list-style-type: none;
        float: left;
        width: 20%;
        position: relative;
        text-align: center;
        font-weight: bold;

    }
    .progressBar li:before{
        content: counter(stepNumber);
        counter-increment: stepNumber;
        width: 30px;
        height: 30px;
        font-family: IRANSansFaNum, sans-serif;
        border: 1px solid #fff;
        border-radius: 50%;
        display: block;
        text-align: center;
        margin: 0 auto 10px auto;
        line-height: 30px;
        background-color: white;
    }
    .progressBar li:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #fff;
        top: 15px;
        right: 50%;
        z-index: -1;
        box-shadow: 0 1px 0 rgba(200, 200, 200, 0.1),
                    0 -1px 0 rgba(200, 200, 200, 0.1);
    }
    .progressBar li:first-child:after{
        content: none;
    }
    .progressBar li.active{
        color: #000000;
    }
    .progressBar li.active:before{
        border-color: #ee711d;
        color: #fff;
        background-color: #ee711d;
        box-shadow: 0 1px 0 rgba(200, 200, 200, 0.1),
        0 -1px 0 rgba(200, 200, 200, 0.1);
    }
    .progressBar li:not(.active):after{
        background-color: #ffffff !important;
    }
    .progressBar li.active + li:after{
        background-color: #ee711d;
    }
</style>