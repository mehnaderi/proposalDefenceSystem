<template>
  <table dir="rtl" class="w-100" id="myTable" ref="myTable">
    <thead>
      <tr class="trCustom">
        <th></th>
        <!-- <th
          class="customFont"
          v-bind:key="time"
          v-for="time in timeList.length"
        >{{timeList[time-1]}}</th>-->
        <th class="customFont" v-bind:key="index" v-for="(time, index) in timeList">{{time}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in weekDays" :key="index" class="trCustom">
        <td class="bordering text-center">{{item}}</td>
        <!-- <td
          v-for="itemInner in 8"
          v-bind:key="itemInner"
          @click="alertDesuKa(item, itemInner)"
          class="bordering"
        ></td>-->
        <td
          v-for="(itemInner, index2) in timeList"
          v-bind:key="index2"
          @click="alertDesuKa(index+1, index2+1)"
          class="bordering"
        >
          <!-- <div v-if="func(true)"></div> -->
        </td>
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
  props: ["clicked"],
  name: "MasterTimingTableComp",
  data() {
    return {
      timeList: [
        "07:30",
        "09:00",
        "10:30",
        "12:00",
        "14:00",
        "15:30",
        "17:00",
        "19:00"
      ],
      weekDays: [
        "شنبه",
        "یکشنبه",
        "دوشنبه",
        "سه شنبه",
        "چهارشنبه",
        "پنج شنبه",
        "جمعه"
      ],
      //   result: this.$store.getters.getTimetable
      result: tempRes
    };
  },
  methods: {
    func(isTrue) {
      if (isTrue) {
        // alert('1'+this.$refs["myTable"])
        // this.$refs["myTable"].rows[2].cells[2].style.backgroundColor = "#0099cb";
        // for (let i in 56) {
        // this.alertDesuKa(i / 8, i % 7);
        // alert("hi");
        // let item = 2;
        // let itemInner = 2;
        // this.$refs["myTable"].rows[item].cells[
        //   itemInner
        // ].style.backgroundColor = "#0099cb";
        // this.result[(item - 1) * 8 + itemInner - 1] = true;
        // }
      }
    },
    content(elmt) {
      alert(elmt.innerText);
      // alert(tableRow);
    },
    alertDesuKa(item, itemInner) {
      // item = 2;
      // itemInner = 2;
      // this.$refs["myTable"].rows[item].cells[itemInner].style.backgroundColor =
      //   "#0099cb";
      // this.result[(item - 1) * 8 + itemInner - 1] = true;
      // alert(item + ' ' + itemInner)
      if (!this.result[(item - 1) * 8 + itemInner - 1]) {
        this.$refs["myTable"].rows[item].cells[
          itemInner
        ].style.backgroundColor = "#0099cb";
        this.result[(item - 1) * 8 + itemInner - 1] = true;
      } else {
        this.$refs["myTable"].rows[item].cells[
          itemInner
        ].style.backgroundColor = "#ffffff";
        this.result[(item - 1) * 8 + itemInner - 1] = false;
      }
    }
  },
  beforeDestroy: {
    //todo backed
  }
};
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