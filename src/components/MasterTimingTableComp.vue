<template>
    <table dir="rtl" class="w-100" id="myTable" ref="myTable">
        <thead>
        <tr class="trCustom">
            <th></th>
            <th class="customFont" v-bind:key="time" v-for="time in timeList.length">{{timeList[time-1]}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item) in 7" :key="item.name" class="trCustom">
            <td class="bordering text-center">{{weekDays[item-1]}}</td>
            <td v-for="itemInner in 8" v-bind:key="itemInner" @click="alertDesuKa(item, itemInner)"
                class="bordering"></td>
        </tr>
        </tbody>
    </table>
</template>

<script>

    // let table = document.getElementById("myTable");
    let tempRes = [];

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 8; j++) {
            tempRes[i * 8 + j] = false;
        }
    }


    export default {
        name: "MasterTimingTableComp",
        data() {
            return {
                timeList: ["07:30", "09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "19:00"],
                weekDays: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                result: tempRes
            }
        },
        methods: {
            content(elmt) {
                alert(elmt.innerText);
                // alert(tableRow);
            },
            alertDesuKa(item, itemInner) {

                if (!this.result[(item - 1) * 8 + itemInner - 1]) {
                    this.$refs["myTable"].rows[item].cells[itemInner].style.backgroundColor = "#0099cb";
                    this.result[(item - 1) * 8 + itemInner - 1] = true;
                } else {
                    this.$refs["myTable"].rows[item].cells[itemInner].style.backgroundColor = "#ffffff";
                    this.result[(item - 1) * 8 + itemInner - 1] = false;
                }


            }
        }
    }
</script>

<style scoped>

    .bordering {
        border: 1px solid #0099cb;
    }

    .customFont {
        font-family: IRANSansFaNum, sans-serif;
        text-align: right;
    }

    .trCustom {
        line-height: 40px;
    }
</style>