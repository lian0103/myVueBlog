<template>
  <div class="page">
    <h2>使用元件demo</h2>
    <div class="row">
      <div class="col-4" id="pickFirst">
        <h3>vuejs-datepicker 1.6.2</h3>
        <br />
        <Datepicker format="yyyy-MM-dd" v-model="date">
          <div slot="beforeCalendarHeader" class="calender-header">Choose a Date</div>
        </Datepicker>
        <br />
        <label for>
          文件連結:
          <a href="https://www.npmjs.com/package/vuejs-datepicker#date-formatting">git資源</a>
        </label>
      </div>
      <div class="col-4">
        <h3>vue2-datepicker 3.3.0</h3>
        <br />
        <DatepickerVue2 type="datetime" editable v-model="date2" :input-attr="attrTitle"></DatepickerVue2>
        <br />
        <br />
        <label for>
          文件連結:
          <a href="https://www.npmjs.com/package/vue2-datepicker">git資源</a>
        </label>
      </div>
      <div class="col-6">
        <h3>MarkdownItVueLight 1.1.0</h3>
        <markdown-it-vue-light class="md-body" :content="markdownContent" :options="markdownOptions" />
        <label for>
          文件連結:
          <a href="https://developer.aliyun.com/mirror/npm/package/markdown-it-vue">git資源</a>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import DatepickerVue2 from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/zh-cn";
import MarkdownItVueLight from "markdown-it-vue/dist/markdown-it-vue-light.umd.min.js";
import "markdown-it-vue/dist/markdown-it-vue-light.css";

var state = {
  date: new Date()
};

export default {
  data() {
    return {
      date: state.date,
      date2: state.date,
      attrTitle: {
        "data-title": "ABC" //可加入自定義屬性
      },
      markdownContent:`
        function(){
          console.log("hello world");
        }
      `,
      markdownOptions:{
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        }
      }
    };
  },
  components: {
    Datepicker,
    DatepickerVue2,
    MarkdownItVueLight
  }
};
</script>

<style lang="scss" >
.row {
  padding: 1rem 0;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

h2 {
  font-size: 1.4rem;
  font-weight: 600;
  word-wrap: break-word;
}

.col-6 {
  width: 50%;
  padding: 0.75rem;
}

.col-4 {
  width: 25%;
  padding: 0.75rem;
}

#pickFirst input {
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  max-width: 220px;
  height: 34px;
  padding: 6px 30px;
  padding-left: 10px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
h3 {
  font-size: 1.1rem;
  font-weight: 700;
}
h5 {
  font-size: 0.8rem;
  font-weight: 300;
}

label {
  font-size: 0.8rem;
  a {
    color: rgb(69, 69, 138);
  }
}
.col-6 p {
  margin-bottom: 0.6rem;
}

.md-body{
  font-size: 1.2rem;
  color: #fff;
}

.markdown-body pre{
  background-color: rgba(19, 19, 20, 0.6);
}

@media only screen and (max-width: 767px) {
  .col-6 {
    width: 95%;
    padding: 0.25rem;
  }
}
</style>