<template>
    <div class="row container1 centerItem mb-5 mt-5 pb-5">
        <div class="col-8">
            <appoint-referee-item-layout class="w-100" is-appointed="true"/>
            <appoint-referee-item-layout class="w-100"/>
            <appoint-referee-item-layout class="w-100" is-appointed="true"/>
            <appoint-referee-item-layout class="w-100" is-appointed1="true"/>
            <appoint-referee-item-layout class="w-100" is-appointed="true"/>
            <appoint-referee-item-layout class="w-100" is-appointed2="true"/>
            <appoint-referee-item-layout class="w-100" is-appointed="true"/>
            <appoint-referee-item-layout class="w-100" is-appointed1="true" is-appointed2="true"/>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import refereeItemLayout from "../components/AppointRefereeItemLayout";

    Vue.component("appointRefereeItemLayout", refereeItemLayout);
    export default {
        name: "NavAppointReferees",
        data() {
            return {
                isExpanded: false
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
</style>