<template>
    <div class="mb-5 pb-5">
        <div class="row container1 ">
            <horizontal-stepper :active-step-number="5">
            </horizontal-stepper>
        </div>
        <div class="row mr-0 ml-0">
        </div>
        <button type="button" class="btn btn-primary p-3" v-on:click="adding()">
            <small>افزودن منبع جدید</small>
        </button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import HorizontalStepper from "../components/HorizontalStepper";

    Vue.component('horizontalStepper', HorizontalStepper);
    export default {
        data() {
            return {
                parameters: 0,
                arrayData: [],

            }
        },
        methods: {
            adding() {
                alert(this.arrayData);
                this.arrayData = this.arrayData.concat(
                    {
                        id: this.parameters++,
                        text: '',
                        hasLink: false,
                        link: ''
                    }
                );

            },
            deleteThisItem(param) {
                // alert(param);
                // this.arrayData.splice(this.arrayData.indexOf(param), 1);
                this.arrayData.splice(param, 1);
                // this.arrayData = this.arrayData[param].remove();
            }
        },
        name: "Form5"
    }
</script>

<style scoped>
    .container1 {
        margin: 0;
    }
</style>