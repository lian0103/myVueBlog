<template>
  <div class="page">
    <div class="row">
      <div class="col-6" id="pickFirst">
        <h3>vuejs-datepicker 1.6.2</h3>
        <br />
        <p>元件:</p>
        <Datepicker format="yyyy-MM-dd" v-model="date">
          <div slot="beforeCalendarHeader" class="calender-header">Choose a Date</div>
        </Datepicker>
        <br />
        <label for>
          文件連結:
          <a href="https://www.npmjs.com/package/vuejs-datepicker#date-formatting">git資源</a>
        </label>
        <h5>測試prop</h5>
        <p>1.calendar-button-icon 和 alendar-button-icon-content會有錯誤。</p>
        <p>2.語言設定有錯誤</p>
      </div>
      <div class="col-6">
        <h3>vue2-datepicker 3.3.0</h3>
        <br />
        <p>元件:</p>
        <DatepickerVue2 type="datetime" editable v-model="date2" :input-attr="attrTitle"></DatepickerVue2>
        <br />
        <br />
        <label for>
          文件連結:
          <a href="https://www.npmjs.com/package/vue2-datepicker">git資源</a>
        </label>
        <h5>測試prop</h5>
        <p>1.可綁定屬性在input元件上 試綁了一個"data-title=ABC"在這個input上</p>
        <p>2.可直接import語言資源就改變為中文語系</p>
        <p>3.可編輯input 添加editable屬性即可</p>
        <p>4.type模式多種 可切換使用 date|datetime|year|month|time|week</p>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import DatepickerVue2 from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/zh-cn";

var state = {
  date: new Date()
};

export default {
  data() {
    return {
      date: state.date,
      date2: state.date,
      attrTitle: {
        "data-title": "ABC"
      }
    };
  },
  components: {
    Datepicker,
    DatepickerVue2
  }
};
</script>

<style>
.row {
  width: 85%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.col-6 {
  width: 50%;
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
  font-size: 1.2rem;
  font-weight: 700;
}
h5 {
  font-size: 1rem;
  font-weight: 300;
}

label a {
  color: blue;
}
.col-6 p {
  margin-bottom: 0.6rem;
}

@media only screen and (max-width: 767px) {
  .col-6 {
    width: 95%;
    padding: 0.25rem;
  }
}
</style>