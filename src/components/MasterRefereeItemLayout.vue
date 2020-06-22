<template>
    <div class="row container1 centerItem" dir="rtl">
        <div class="col-7 row container1" dir="rtl">
            <img src="../assets/person_empty.png" class="col-6 roundedImg centerItem p-3" alt="Person Image">
            <p class="centerVert col-6 small" dir="rtl">مجتبی ترابی</p>
        </div>
        <div class="col-5">
            <p class="row centerItem container1 mb-2 small">جلسه دفاع حضوری</p>
            <div class="btn btn-primary row centerItem container1  small">شروع داوری</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "studentName",
            "currentStatus",
            "imageUrl",
            "buttonLink"
        ],
        name: "MasterRefereeItemLayout"
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

    .roundedImg {
        height: auto;
        width: fit-content;
        border-radius: 50%;
        padding: 0;
    }

    .centerVert {
        display: flex;
        align-items: center;
        text-align: right;
        padding: 0;
        margin-bottom: 0;
    }
</style>