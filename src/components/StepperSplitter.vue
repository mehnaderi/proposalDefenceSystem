<template>
    <div v-if="isActive"
         class="container1"></div>
    <div v-else
         class="container2"></div>
</template>

<script>
    export default {
        props: ['isActive'],
        name: "StepperSplitter"
    }
</script>

<style scoped>
    .container1{
        float: right;
        clear: both;
        background-color: #0099cb;
        height: 20px;
        width: 4px;
        margin-right: 10px;
        border-radius: 3px;
        margin-bottom: 2px;
        margin-top: 2px;
    }
    .container2{
        float: right;
        clear: both;
        background-color: #cccccc;
        height: 20px;
        width: 4px;
        margin-right: 10px;
        border-radius: 3px;
        margin-bottom: 2px;
        margin-top: 2px;
    }
</style>