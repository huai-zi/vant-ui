<!-- 首页 -->
<template>
  <div id="page_index">
    <!-- 图片轮播展示 -->
    <Swiper :list='imgLists' :auto='true' height='200px' :loop='true' dots-position='center'>
    </Swiper>
  </div>
</template>

<script>
  import {
    Swiper
  } from 'vux';

  export default {
    name: 'page_index',
    data() {
      return {
        imgLists: [{
          url: 'javascript:',
          img: '../../static/images/1.png',
          title: ''
        }, {
          url: 'javascript:',
          img: '../../static/images/2.png',
          title: '',
          fallbackImg: 'http://iph.href.lu/400x200?text=图片加载失败...'
        }]
      };
    },
    components: {
      Swiper
    },
    computed: {},
    mounted() {},
    methods: {}
  }

</script>
<style scoped>
</style>
