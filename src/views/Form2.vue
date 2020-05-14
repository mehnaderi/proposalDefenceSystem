<template>
    <div class="mb-5 pb-5">
        <div class="row container1 mr-0 ml-0">
            <horizontal-stepper :active-step-number="2">
            </horizontal-stepper>
        </div>
        <div class="container align-items-center">
            <div class="row">
                <div class="col-12 text-center mx-auto my-4">
                    <h4 class="font-weight-bold">اطلاعات کلی پایان نامه</h4>
                </div>
                <div class="col-10 text-left my-sm-1" dir="rtl">
                    <form>
                        <div class="form-group row">
                            <div class="col-25" dir="rtl" align="right">
                                <label for="titlePersian">عنوان:</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="titlePersian" name="persianTitle" placeholder="عنوان فارسی">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-25" dir="rtl" align="right">
                                <label for="titleEnglish">عنوان لاتین:</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="titleEnglish" name="englishTitle" placeholder="عنوان لاتین">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-25" dir="rtl" align="right">
                                <label for="perKeywords">واژگان کلیدی:</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="perKeywords" name="persianKeywords"
                                       placeholder="واژگان کلیدی فارسی">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-25" dir="rtl" align="right">
                                <label for="EngKeywords">واژگان کلیدی لاتین:</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="EngKeywords" name="englishKeywords"
                                       placeholder="واژگان کلیدی لاتین">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25" dir="rtl" align="right">
                                <label for="rsType">نوع تحقیق:</label>
                            </div>
                            <div class="col-75 customSelect">
                                <select id="rsType" name="researchType">
                                    <option selected disabled="true" class="colorGray">انتخاب کنید</option>
                                    <option value="australia">بنیادی</option>
                                    <option value="canada">نظری</option>
                                    <option value="usa">کاربردی</option>
                                    <option value="usa">توسعه ای</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mr-0 ml-0">
            <div class="col-5 mt-5 border-top">
                <div class="row mt-4">
                    <div class="col-5 mt-1">
                        <button type="button" class="btn btn-default p-3 text-secondary">
                            <span class="fas fa-arrow-left"/><small class="ml-2">بازگشت</small>
                        </button>
                    </div>
                    <div class="col-7 d-flex align-items-end flex-column">
                        <button type="button" class="btn btn-primary p-3">
                            <small>بعدی: جزئیات پیشنهاد</small>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import HorizontalStepper from '../components/HorizontalStepper';

    Vue.component('horizontalStepper', HorizontalStepper);


    export default {
        name: "Form2"
    }
</script>


<style scoped>

    * {
        box-sizing: border-box;
    }

    .container1 {
        margin: 0;
    }

    input[type=text], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #0099cb;
        border-radius: 4px;
        resize: vertical;
        direction: rtl;
    }

    label {
        padding: 12px 12px 12px 12px;
        display: inline-block;
        direction: rtl;
        text-align: right;
    }

    .col-25 {
        float: right;
        width: 25%;
        margin-top: 6px;
    }

    .col-75 {
        float: right;
        width: 50%;
        margin-top: 6px;
        padding-left: 20px;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    .customSelect select {
        position: relative;
    }

    @media screen and (max-width: 600px) {
        .col-25, .col-75, input[type=submit] {
            width: 100%;
            margin-top: 0;
        }
    }
</style>