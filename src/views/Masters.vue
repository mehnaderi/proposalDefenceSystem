<template>
    <div class="row mr-0 ml-0 mb-5 pb-5 w-100 text-center centerHoriz">
        <div class="centerHoriz row text-center col-7">
            <div class="col-6 " v-for="item in items.length" :key="item-1">
                <master-item class="settings1"
                             :name="items[item-1].name"
                             :duty="items[item-1].duty"
                             :degree="items[item-1].degree"
                             :field="items[item-1].field"
                             :phone-number="items[item-1].phone"
                             :email="items[item-1].email"
                             :refer-time="items[item-1].time"
                ></master-item>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import MasterItem from "../components/MastersItemLayout";

    Vue.component("masterItem", MasterItem);
    export default {
        name: "Masters",
        data() {
            return {
                items: [
                    {
                        name: "دکتر علیرضا شاملی سندی",
                        duty: "مدیر گروه",
                        degree: "دانشیار",
                        field: "نرم‌افزار",
                        phone: "(021)299032456",
                        email: "a.shameli@sbu.ac.ir",
                        time: " همه روزه ساعت ۹ تا ۱۷"
                    },
                    {
                        name: "دکتر حسن حقیقی",
                        duty: "استاد راهنما",
                        degree: "دانشیار",
                        field: "نرم‌افزار",
                        phone: "(021)2990342456",
                        email: "haghighi@gmail.com",
                        time: "سه شنبه ساعت ۱۳ تا ۱۶:۱۵"
                    },
                    {
                        name: "دکتر مجتبی وحیدی اصل",
                        duty: "استاد داور اول",
                        degree: "دانشیار",
                        field: "نرم‌افزار",
                        phone: "(021)2990352456",
                        email: "m.vahidi@gmail.com",
                        time: "یکشنبه و سه‌شنبه ساعت ۱۴ تا ۱۶:۳۰"
                    },
                    {
                        name: "دکتر رامک قوامی‌زاده",
                        duty: "استاد داور دوم",
                        degree: "دانشیار",
                        field: "نرم افزار",
                        phone: "(021)2990378456",
                        email: "ghavamizade@gmail.com",
                        time: "سه شنبه ساعت ۱۴ تا ۱۷"
                    }

                ]
            }
        }
    }
</script>

<style scoped>
    .centerHoriz {
        margin: 0 auto;
    }

    .settings1 {
        box-sizing: content-box;
    }
</style>