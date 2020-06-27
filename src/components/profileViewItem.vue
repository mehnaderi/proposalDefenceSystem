<template>
    <div class="centerVert">
        <img src="../assets/person_empty.png" class="imageCircle" width="80em" alt="master image"/>
        <div class="row container1 mr-3">
            <p class="col-12 text-right p-0 m-0 font-weight-bold">مجتبی ترابی</p>
            <p class="col-12 text-right p-0 m-0">داور اول</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "profileViewItem"
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

    .imageCircle {
        border-radius: 50%;
    }
</style>