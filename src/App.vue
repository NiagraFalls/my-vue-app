<template>
  <div>
    <gc-spread-sheets
      :hostClass='hostClass'
    >
        </gc-spread-sheets>
    </div>
  </template>
  <script>
  import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
  import '@grapecity/spread-sheets-vue'
  export default {
  name:"App",
  data(){
    return {
      hostClass:'spread-host',
      autoGenerateColumns:true,
      width:300,
      visible:true,
      resizable:true,
      formatter:"$ #.00"
    }
  },
  computed:{
    dataTable(){
      let dataTable = [];
      for (let i = 0; i < 42; i++) {
        dataTable.push({price: i + 0.56})
      }
      return dataTable
    }
  }
  }
  </script>
  <style>
  .spread-host {
  width: 500px;
  height: 600px;
  }
  </style>
  