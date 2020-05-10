<template>
    <div>
        <div
        v-for="step in (activeStepNumber-1)" :key="step">
            <field :step-number="step" :step-text="steps[step-1]" :is-active="true" :is-active-step="false"/>
            <splitter :is-active="true"/>
        </div>
        <div>
            <field :step-number="activeStepNumber" :step-text="steps[activeStepNumber-1]" :is-active="true" :is-active-step="true"/>
            <splitter :is-active="false" v-if="activeStepNumber<7"/>
        </div>
        <div v-if="activeStepNumber<7">
            <div
            v-for="step in (7-activeStepNumber-1)" :key="step">
                <field :step-number="parseInt(activeStepNumber)+parseInt(step)" :step-text="steps[(parseInt(activeStepNumber)+parseInt(step)-1)]" :is-active="false"/>
                <splitter :is-active="false"/>
            </div>
        </div>

        <field :step-number="7" :step-text="steps[6]" :is-active="false" v-if="activeStepNumber!=7"/>
    </div>
</template>

<script>
    import  Vue from 'vue';
    import StepperField from './StepperField';
    import StepperSplitter from './StepperSplitter';

    Vue.component('field', StepperField);
    Vue.component('splitter', StepperSplitter);
    export default {
        props: ["activeStepNumber"],
        name: "VerticalStepper",
        data(){
            return{
                steps: [ 'تعریف مسئله و سوال های اصلی تحقیق', 'پیشینه پژوهش', 'رویکرد حل مسئله', 'فرضیه ها', 'جنبه جدید بودن و نوآوری', 'روش و ابزارهای لازم', 'لیست مراجع حمایت کننده']
            }
        }
    }
</script>

<style scoped>
</style>