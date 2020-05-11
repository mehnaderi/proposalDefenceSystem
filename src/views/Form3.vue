<template>
    <div>
        <input-suggestions :current-step="5">

        </input-suggestions>
    </div>
</template>

<script>
    import Vue from 'vue';
    import inputSuggestions from '../components/InputDataComp';

    Vue.component('inputSuggestions', inputSuggestions);


    export default {
        name: "Form3"
    }
</script>

<style scoped>

</style>