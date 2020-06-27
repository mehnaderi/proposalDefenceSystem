<template>
    <div class="row container1 centerItem mt-5 mb-5 pb-5">
        <div class="col-7">
            <referee-proposal-item/>
        </div>

    </div>
</template>

<script>
    import Vue from "vue";
    import RefereeProposalItem from "../components/RefereeProposalItem";

    Vue.component("RefereeProposalItem", RefereeProposalItem);
    export default {
        name: "SendRefereePage"
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