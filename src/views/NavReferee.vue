<template>
    <div class="row container1 mt-5 mb-5 pb-5 centerItem">
        <div class="col-8">
            <nav-start-referee-item-layout is-green="true"/>
            <nav-start-referee-item-layout/>
            <nav-start-referee-item-layout is-green="true"/>
            <nav-start-referee-item-layout/>
            <nav-start-referee-item-layout is-green="true"/>
            <nav-start-referee-item-layout/>
            <nav-start-referee-item-layout is-green="true"/>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import NavStartRefereeItemLayout from "../components/NavStartRefereeItemLayout";

    Vue.component("NavStartRefereeItemLayout", NavStartRefereeItemLayout);

    export default {
        name: "NavReferee"
    }
</script>

<style scoped>
    .container1 {
        margin: 0;
    }

    .centerVert {

        display: flex;
        align-items: center;
        text-align: right;
        padding: 0;

    }

    .centerItem {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>