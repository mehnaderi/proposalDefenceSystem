<template>
    <div>
        <input-suggestions :current-step="1">

        </input-suggestions>
    </div>
</template>

<script>
    import  Vue from 'vue';
    import inputSuggestions from '../components/InputDataComp';

    Vue.component('inputSuggestions', inputSuggestions);


    export default {
        name: "SuggestionDetails"
    }
</script>

<style scoped>

</style>