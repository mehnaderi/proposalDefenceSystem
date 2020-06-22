<template>
    <div class="row centerVert" dir="rtl">
        <div class="col-4 row container1" dir="rtl">
            <img src="../assets/person_empty.png" class=" roundedImg centerItem p-3" width="100em" alt="Person Image">
        </div>
        <div class="col-8" dir="rtl">
            <p class="stName pb-0 mb-0" dir="rtl">مجتبی ترابی</p>
            <p class="row centerItem container1 mb-2 small">دانشجوی هوش مصنوعی</p>
            <router-link to="/NavStudents" class="btn btn-primary row centerItem container1 small al_right">
                <i class=" fas fa-eye"></i>
                مشاهده پروفایل
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["studentName", "studentField", "studentImageUrl", "studentRouterLink"],
        name: "StudentItemLayout"
    }
</script>

<style scoped>
    .stName {
        text-align: right;
        color: #0099cb;
        font-weight: bold;
    }

    .al_right {
        float: right;
        clear: both;
    }

    .centerVert {
        display: flex;
        align-items: center;
        text-align: right;
        justify-content: center;
        padding: 0;
        margin-bottom: 0;
    }

    .roundedImg {
        border-radius: 50%;
        padding: 0;
    }
</style>