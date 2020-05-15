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
                        name: "دکتر مجتبی ترابی",
                        duty: "استاد راهنما",
                        degree: "استادیار",
                        field: "هوش مصنوعی",
                        phone: "(021)29903456",
                        email: "Mojtaba26.t@gmail.com",
                        time: "شنبه و سه شنبه ساعت 14 تا 15"
                    },
                    {
                        name: "دکتر مجتبی ترابی",
                        duty: "استاد راهنما",
                        degree: "استادیار",
                        field: "هوش مصنوعی",
                        phone: "(021)29903456",
                        email: "Mojtaba26.t@gmail.com",
                        time: "شنبه و سه شنبه ساعت 14 تا 15"
                    },
                    {
                        name: "دکتر مجتبی ترابی",
                        duty: "استاد راهنما",
                        degree: "استادیار",
                        field: "هوش مصنوعی",
                        phone: "(021)29903456",
                        email: "Mojtaba26.t@gmail.com",
                        time: "شنبه و سه شنبه ساعت 14 تا 15"
                    },
                    {
                        name: "دکتر مجتبی ترابی",
                        duty: "استاد راهنما",
                        degree: "استادیار",
                        field: "هوش مصنوعی",
                        phone: "(021)29903456",
                        email: "Mojtaba26.t@gmail.com",
                        time: "شنبه و سه شنبه ساعت 14 تا 15"
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