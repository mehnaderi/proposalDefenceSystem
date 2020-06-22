<template>
    <div class="mt-5 mb-5 pb-5 pt-4  tran">
        <div v-if="true" class=" row container1 col-12">
            <div class="col-2"/>
            <div dir="rtl" class=" col-8">
                <div>
                    <p class="text-right colorBlue h6 font-weight-bold">به عنوان استاد راهنما</p>
                    <div class="splitter mb-3"/>
                    <student-page-item-layout is-edited="true"/>
                    <student-page-item-layout/>
                </div>
            </div>
            <div class="col-2"/>
        </div>
        <div v-if="true" class="row container1 col-12 mt-4">
            <div class="col-2"/>
            <div dir="rtl" class=" col-8">
                <div>
                    <p class="text-right colorBlue h6 font-weight-bold">به عنوان استاد داور</p>
                    <div class="splitter mb-3"/>
                    <student-page-item-layout is-edited="true"/>
                    <student-page-item-layout/>
                    <student-page-item-layout is-edited="true"/>
                    <student-page-item-layout/>
                </div>
            </div>
            <div class="col-2"/>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import studentPageItemLayout from "../components/StudentPageItemLayout";

    Vue.component("studentPageItemLayout", studentPageItemLayout);

    export default {
        name: "NavStudents"
    }
</script>

<style scoped>
    .container1 {
        margin: 0;
    }

    .colorBlue {
        color: #0099cb;
    }

    .splitter {
        height: 2px;
        width: 40%;
        background: #cccccc;
    }
</style>