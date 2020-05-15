<template>
<<<<<<< HEAD
  <div>
    <div class="row mr-0 ml-0 main jumbotron mainItem pt-3 pb-1" v-if="!itemOpened">
      <div class="col-4 marginVert">
        <div class="form-check inlineMode marginVert">
          <input
            type="checkbox"
            checked
            class="form-check-input fontSizeCheckBox"
            v-if="enabled==='true'"
          />
          <input type="checkbox" class="form-check-input fontSizeCheckBox" v-else />
        </div>
        <div class="btn btn-primary ml-3" v-on:click="changeStatus()">دیدن متن کامل اصلاحیه</div>
      </div>
      <div class="col-8 text-right marginVert">
        <div class="text-right" v-on:click="changeStatus()">
          <p class="colorBlue contentC">
            <small class="font-weight-bold">{{content}}</small>
          </p>
        </div>
        <div class="text-right">
          <p class="pr-2">
            <small>
              <small class="setFont">
                ساعت {{time}}، تاریخ {{date}}، نوشته شده توسط
                {{writtenBy}}
              </small>
            </small>
          </p>
        </div>
      </div>
    </div>

    <div class="row mr-0 ml-0 main jumbotron mainItem pt-3 pb-1" v-else>
      <div class="row text-center centerHoriz mt-2">
        <div class="btn btn-primary ml-3" v-on:click="changeStatus()">بستن</div>
      </div>
      <div class="row mt-3">
        <div class="col-3 w-75">
          <div class="bg-white colorRed text-center p-2 pt-4">
            <p>
              <small class="font-weight-bold">مهلت منظور کردن موارد اصلاحیه</small>
            </p>
            <p>
              <small class="font-weight-bold setFont">{{deadline}}</small>
            </p>
          </div>
          <div class="text-center mt-4">
            <div class="form-check marginVert">
              <input
                type="checkbox"
                checked="checked"
                class="form-check-input fontSizeCheckBox"
                v-if="enabled==='true'"
              />
              <input type="checkbox" class="form-check-input fontSizeCheckBox" v-else />
            </div>
          </div>
        </div>
        <div class="col-9 text-right marginVert">
          <div class="text-right" v-on:click="changeStatus()">
            <p class="colorBlue">
              <small class="font-weight-bold">{{content}}</small>
            </p>
          </div>
          <div class="text-right">
            <p class="pr-2">
              <small>
                <small class="setFont">
                  ساعت {{time}}، تاریخ {{date}}، نوشته شده توسط
                  {{writtenBy}}
                </small>
              </small>
            </p>
          </div>
          <div class="text-right">
            <p class="colorOrange">
              <small class="font-weight-bold">
                این موارد هنوز در پروپوزال اصلاح نشده
                اند، لطفا بعد از انجام دادن آن، کادر مقابل را تیک بزنید تا اصلاحات شما مورد بررسی استاد
                راهنما قرار بگیرد. نتیجه این بررسی در زیر همین اصلاحیه، بعد از بررسی استاد راهنما گفته خواهد
                شد
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content", "time", "date", "writtenBy", "enabled", "deadline"],
  name: "ToDoItemLayout",
  data() {
    return {
      itemOpened: false
    };
  },
  methods: {
    changeStatus() {
      this.itemOpened = !this.itemOpened;
    }
  }
};
</script>

<style scoped>
.inlineMode {
  display: inline;
}
.marginVert {
  margin: auto;
}
.centerHoriz {
  margin: 0 auto;
}
.fontSizeCheckBox {
  width: 1.5rem;
  height: 1.5rem;
}
.colorBlue {
  color: #0099cb;
}
.mainItem {
  border: #0099cb 1px solid;
  background-color: #efefef;
}
.contentC {
  text-align: right;
  direction: rtl;
  white-space: nowrap;
  overflow: hidden;
  max-lines: 1;
  text-overflow: ellipsis;
}
.colorOrange {
  color: #ee711d;
}
.colorRed {
  color: red;
}
.setFont {
  font-family: IRANSansFaNum, sans-serif;
}
.tran {
  transition: all 5s;
}
=======
    <div>
        <div class="row  mr-0 ml-0 main jumbotron mainItem pt-3 pb-1" v-if="!itemOpened">
            <div class="col-4 marginVert">
                <div class="form-check inlineMode marginVert ">
                    <input type="checkbox" checked class="form-check-input fontSizeCheckBox" v-if="enabled==='true'">
                    <input type="checkbox" class="form-check-input fontSizeCheckBox" v-else>
                </div>
                <div class="btn btn-primary ml-3" v-on:click="changeStatus()">دیدن متن کامل اصلاحیه</div>
            </div>
            <div class="col-8 text-right marginVert">
                <div class=" text-right" v-on:click="changeStatus()">
                    <p class="colorBlue contentC"><small class="font-weight-bold">{{content}}</small></p>
                </div>
                <div class=" text-right">
                    <p class="pr-2"><small><small class="setFont">ساعت {{time}}، تاریخ {{date}}، نوشته شده توسط
                        {{writtenBy}}</small></small></p>
                </div>
            </div>
        </div>


        <div class="row  mr-0 ml-0 main jumbotron mainItem pt-3 pb-1" v-else>
            <div class="row text-center centerHoriz mt-2">
                <div class="btn btn-primary ml-3 " v-on:click="changeStatus()">بستن</div>
            </div>
            <div class="row mt-3">
                <div class="col-3 w-75">
                    <div class="bg-white colorRed text-center p-2 pt-4">
                        <p><small class="font-weight-bold">مهلت منظور کردن موارد اصلاحیه</small></p>
                        <p><small class="font-weight-bold setFont">{{deadline}}</small></p>
                    </div>
                    <div class="text-center mt-4">
                        <div class="form-check marginVert">
                            <input type="checkbox" checked="checked" class="form-check-input fontSizeCheckBox"
                                   v-if="enabled==='true'">
                            <input type="checkbox" class="form-check-input fontSizeCheckBox" v-else>
                        </div>
                    </div>
                </div>
                <div class="col-9 text-right marginVert">
                    <div class=" text-right" v-on:click="changeStatus()">
                        <p class="colorBlue"><small class="font-weight-bold">{{content}}</small></p>
                    </div>
                    <div class=" text-right">
                        <p class="pr-2"><small><small class="setFont">ساعت {{time}}، تاریخ {{date}}، نوشته شده توسط
                            {{writtenBy}}</small></small></p>
                    </div>
                    <div class=" text-right">
                        <p class="colorOrange"><small class="font-weight-bold">این موارد هنوز در پروپوزال اصلاح نشده
                            اند، لطفا بعد از انجام دادن آن، کادر مقابل را تیک بزنید تا اصلاحات شما مورد بررسی استاد
                            راهنما قرار بگیرد. نتیجه این بررسی در زیر همین اصلاحیه، بعد از بررسی استاد راهنما گفته خواهد
                            شد</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "content",
            "time",
            "date",
            "writtenBy",
            "enabled",
            "deadline"
        ],
        name: "ToDoItemLayout",
        data() {
            return {
                itemOpened: false

            }

        },
        methods: {
            changeStatus() {
                this.itemOpened = !this.itemOpened;
            }


        }
    }
</script>

<style scoped>
    .inlineMode {
        display: inline;
    }

    .marginVert {
        margin: auto;
    }

    .centerHoriz {
        margin: 0 auto;
    }

    .fontSizeCheckBox {
        width: 1.5rem;
        height: 1.5rem;
    }

    .colorBlue {
        color: #0099cb;
    }

    .mainItem {
        border: #0099cb 1px solid;
        background-color: #efefef;
    }

    .contentC {
        text-align: right;
        direction: rtl;
        white-space: nowrap;
        overflow: hidden;
        max-lines: 1;
        text-overflow: ellipsis;

    }

    .colorOrange {
        color: #ee711d;
    }

    .colorRed {
        color: red;
    }

    .setFont {
        font-family: IRANSansFaNum, sans-serif;
    }

    .tran {
        transition: all 5s;
    }
>>>>>>> 5e5a00213e8b8fc101e08c0489aac9781ecaacc1
</style>