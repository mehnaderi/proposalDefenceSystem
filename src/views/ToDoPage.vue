<template>
<<<<<<< HEAD
  <div class="mb-5 pb-5">
    <div class="col-8 centerHoriz mt-5">
      <todo-item
        class="mt-0"
        v-for="item in 1"
        :key="item"
        deadline="1400/12/12"
        content="لطفا این مورد را در پروپوزال خود رعایت کنید، این قضیه مربوط به محتوای نمودارها و تصاویری است که به کار برده اید. در صورت بروز مشکل می توانید از موارد دیگری مثل این استفاده کنید. بعد از آن دوباره می توانید در این جلسه شرکت کرده و سایر کارهایتان را شرح دهید"
        enabled="false"
        time="12:45"
        date="1399/09/09"
        written-by="گروه اساتید در جلسه داوری"
      />
      <todo-item
        class="mt-0"
        v-for="item in 1"
        :key="item"
        deadline="1400/12/12"
        content="لطفا این مورد را در پروپوزال خود رعایت کنید، این قضیه مربوط به محتوای نمودارها و تصاویری است که به کار برده اید. در صورت بروز مشکل می توانید از موارد دیگری مثل این استفاده کنید. بعد از آن دوباره می توانید در این جلسه شرکت کرده و سایر کارهایتان را شرح دهید"
        enabled="true"
        time="12:45"
        date="1399/09/09"
        written-by="گروه اساتید در جلسه داوری"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ToDoItem from "../components/ToDoItemLayout";
Vue.component("todoItem", ToDoItem);
export default {
  name: "ToDoPage"
};
</script>

<style scoped>
.centerHoriz {
  margin: 0 auto;
}
=======
    <div class="mb-5 pb-5">
        <div class="col-8 centerHoriz mt-5">

            <todo-item class="mt-0" v-for="item in 1" :key="item"
                       deadline="1400/12/12"
                       content="لطفا این مورد را در پروپوزال خود رعایت کنید، این قضیه مربوط به محتوای نمودارها و تصاویری است که به کار برده اید. در صورت بروز مشکل می توانید از موارد دیگری مثل این استفاده کنید. بعد از آن دوباره می توانید در این جلسه شرکت کرده و سایر کارهایتان را شرح دهید"
                       enabled="false"
                       time="12:45"
                       date="1399/09/09"
                       written-by="گروه اساتید در جلسه داوری"
            />
            <todo-item class="mt-0" v-for="item in 1" :key="item"
                       deadline="1400/12/12"
                       content="لطفا این مورد را در پروپوزال خود رعایت کنید، این قضیه مربوط به محتوای نمودارها و تصاویری است که به کار برده اید. در صورت بروز مشکل می توانید از موارد دیگری مثل این استفاده کنید. بعد از آن دوباره می توانید در این جلسه شرکت کرده و سایر کارهایتان را شرح دهید"
                       enabled="true"
                       time="12:45"
                       date="1399/09/09"
                       written-by="گروه اساتید در جلسه داوری"
            />
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import ToDoItem from "../components/ToDoItemLayout";

    Vue.component("todoItem", ToDoItem);
    export default {
        name: "ToDoPage"
    }
</script>

<style scoped>
    .centerHoriz {
        margin: 0 auto;
    }
>>>>>>> 5e5a00213e8b8fc101e08c0489aac9781ecaacc1
</style>