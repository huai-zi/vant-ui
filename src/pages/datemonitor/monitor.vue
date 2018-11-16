<!-- 实时监测 -->
<template>
  <div id="monitor_page">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">监测点列表</mt-tab-item>
      <mt-tab-item id="2">监测点维护</mt-tab-item>
    </mt-navbar>
    <!-- 实时监测显示内容 -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- 监测点列表 -->
        <Search placeholder='请输入站点名称关键字' @on-submit='submitSearch'></Search>
        <mt-cell v-for="n in 4" :title="'content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- 监测点维护 -->
        <panel :list="list" type="3" @on-click-item="onImgError"></panel>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<script>
  import {
    Panel,
    Search
  } from 'vux'

  export default {
    components: {
      Panel,
      Search
    },
    methods: {
      onImgError(item, $event) {
        console.log(item, $event)
        return false
      },
      submitSearch(value){
          console.log(value);
      }
    },
    data() {
      return {
        selected: '1',
        type: '2',
        list: [{
          title: '标题一',
          url: ''
        }, {
          title: '标题二',
          url: ''
        }]
      }
    }
  }

</script>
<style scoped>
  #monitor_page>>>.mint-tab-container {
    top: 3px
  }

  #monitor_page>>>.weui-search-bar__box .weui-search-bar__input {
    height: 27px !important;
  }

  #monitor_page>>>.weui-search-bar {
    height: 49px !important;
  }

  #monitor_page>>>.weui-search-bar__label {
    top: 7px;
  }

  #monitor_page>>>.weui-search-bar__box .weui-icon-search,
  #monitor_page>>>.weui-search-bar__cancel-btn {
    line-height: 36px;
  }

</style>
