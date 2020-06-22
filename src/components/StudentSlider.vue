<template>
    <div class="row mt-2 mb-2 studentView p-3 container1 w-100" dir="rtl" v-if="inputArr.length > 0">
        <span class="fas fa-chevron-circle-right col-1 centerItem container1" @click="goToRight()"/>
        <div v-if="counter < inputArr.length" class="col-5 container1">
            <student-item-layout v-bind:student-name="inputArr[counter]" student-field="sdasd"
                                 student-image-url="sdasda" student-router-link="sdasdasd"/>
        </div>
        <div v-else class="col-5 container1"/>
        <div v-if="inputArr.length >= 2" class="col-5 container1">
            <div v-if="counter+1 < inputArr.length">
                <student-item-layout v-bind:student-name="inputArr[counter+1]" student-field="sdasd"
                                     student-image-url="sdasda" student-router-link="sdasdasd"/>
            </div>
            <div v-else>
                <student-item-layout v-bind:student-name="inputArr[0]" student-field="inputArr[0]"
                                     student-image-url="inputArr[0]" student-router-link="inputArr[0]"/>
            </div>
        </div>

        <span class="fas fa-chevron-circle-left col-1 centerItem container1" @click="goToRight()"/>
    </div>
    <div class="row mt-2 mb-2 studentView p-3 centerItem container1 col-12 height150" dir="rtl" v-else>
        <p class="centerItemText">
            در حال حاضر دانشجویی وجود ندارد!
        </p>
    </div>
</template>

<script>
    import Vue from "vue";
    import studentItemLayout from "../components/StudentItemLayout";

    Vue.component("studentItemLayout", studentItemLayout);

    export default {
        props: ["inputArray"],
        name: "StudentSlider",
        data() {
            return {
                inputArr: ["sdsadadada", " sdasdasdsa ", "sdasdasd", "sdassd"],
                counter: 0
            }
        },
        methods: {
            goToRight() {
                this.counter++;
                if (this.counter >= this.inputArr.length) {
                    this.counter = 0;
                }
            },
            goToLeft() {
                this.counter--;
                if (this.counter < 0) {
                    this.counter = this.inputArr.length - 1;
                }
            }
        }
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

    .studentView {
        background-color: #eeeeee;
    }

    .height150 {
        height: 150px;
    }

    .centerItemText {
        text-align: center;
    }
</style>