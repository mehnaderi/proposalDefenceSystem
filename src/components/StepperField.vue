<template>
    <div class="stepMain"
        v-if="isActive">
        <div class="stepNumber bgActive">
            <p class="stepNumberInner txtActiveWhite">{{stepNumber}}</p>
        </div>
        <div class="stepText txtActiveBlue"
        v-if="isActiveStep">
            <p class="biggerFontSize">{{stepText}}</p>
        </div>
        <div class="stepText txtActiveBlack"
             v-else>
            <p>{{stepText}}</p>
        </div>
    </div>
    <div class="stepMain"
         v-else>
        <div class="stepNumber bgInActive">
            <p class="stepNumberInner txtInActive">{{stepNumber}}</p>
        </div>
        <div class="stepText txtInActive">
            <p>{{stepText}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['stepNumber', 'stepText', 'isActive', 'isActiveStep'],
        name: "StepperField"
    }
</script>

<style scoped>
    .stepMain{
        direction: rtl;
        align-items: center;
        clear: both;
    }
    .stepText{
        line-height: 24px;
        text-align: right;
        margin-right: 30px;


    }
    .stepText p{
        font-family: IRANSansFaNum, sans-serif;
        margin-bottom: 0;
    }

    .stepNumber{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        position: relative;
        float: right;

    }
    .stepNumberInner{
        margin-bottom: 0;
        width: 24px;
        height: 24px;
        font-family: IRANSansFaNum, sans-serif;
        font-size: 15px;
        text-align: center;
        line-height: 24px;
    }

    .bgActive{
        background-color: #0099cb;
    }
    .bgInActive{
        background-color: #ccc;
    }
    .txtActiveWhite{
        color: #fff;
    }
    .txtActiveBlack{
        color: #000;
        font-size: 12px;
    }
    .txtActiveBlue{
        color: #0099cb;
        font-size: 12px;
        font-weight: bold;
    }
    .txtInActive{
        color: #ccc;
        font-size: 12px;
    }
    .biggerFontSize{
        font-size: 14px;
    }

</style>