import { createApp } from 'vue'
import App from './App.vue'
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';
import "@grapecity/spread-sheets-print";
import "@grapecity/spread-sheets-shapes";
import "@grapecity/spread-sheets-pivot-addon";
import "@grapecity/spread-sheets-tablesheet";
import { GcSpreadSheets } from "@grapecity/spread-sheets-vue"

// component为注册应用范围内的组件，字符串，对象形式
// mount将应用实例挂载到容器元素中，#app是vue给创建的，直接挂载即可
createApp(App).component("GcSpreadSheets", GcSpreadSheets).mount('#app')