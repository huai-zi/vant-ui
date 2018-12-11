<!-- 首页 -->
<template>
  <div id="page_index">
    <!-- 图片轮播展示 -->
    <Swiper :list='imgLists' :auto='true' height='200px' :loop='true' dots-position='center'>
    </Swiper>
  </div>
</template>

<script>
  import api from '../api/commonURL'
  import {
    Swiper,
  } from 'vux';

  import {
    weather_mini
  } from '@/api/index.js'
  import {
    Toast,
    Loading
  } from 'vant';

  export default {
    name: 'page_index',
    data() {
      return {
        show: false,
        checked: true,
        allLoaded: false,
        imgLists: [{
          url: 'javascript:',
          img: '../../static/images/1.png',
          title: ''
        }, {
          url: 'javascript:',
          img: '../../static/images/2.png',
          title: '',
          fallbackImg: 'http://iph.href.lu/400x200?text=图片加载失败...'
        }, {
          url: 'javascript:',
          img: '../../static/images/3.png',
          title: '',
          fallbackImg: 'http://iph.href.lu/400x200?text=图片加载失败...'
        }]
      };
    },
    components: {
      Swiper
    },
    methods: {
      shows() {
        this.show = !this.show;
        Toast({
          message: '提示内容',
          position: 'top'
        });
      }
    },
    mounted() {

    }
  }

</script>
<style scoped>

</style>
