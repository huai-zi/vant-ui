<!-- 首页 -->
<template>
  <div id="page_index">
    <!-- 图片轮播展示 -->
    <Swiper :list='imgLists' :auto='true' height='200px' :loop='true' dots-position='center'>
    </Swiper>
    <Panel header='信息列表' type='5' :list="list" @on-click-item='onImgError'></Panel>
  </div>
</template>

<script>
  import {
    Swiper,
    AjaxPlugin,
    Panel
  } from 'vux';

  import {
    loginByUsername
  } from '@/api/login.js'

  export default {
    name: 'page_index',
    data() {
      return {
        list: [{
            src: '../../static/images/1.png',
            fallbackSrc: 'http://iph.href.lu/400x200?text=图片加载失败...',
            title: '标题一',
            desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          },
          {
            src: '../../static/images/1.png',
            title: '标题二',
            desc: '123由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            meta: {
              source: '来源信息',
            }
          }
        ],
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
      Swiper,
      Panel
    },
    methods: {
      onImgError(item, $event) {
        this.$router.push({
          name: 'login'
        })
        return false
      }
    },
    mounted() {
      AjaxPlugin.$http.get('/api/trailingContentControlle/getContenList')
        .then(resonse => {
          console.log(resonse);
        })
      loginByUsername().then(response => {
        console.log(response);
      })
    }
  }

</script>
<style scoped>
  #page_index>>>.weui-panel__hd {
    color: #3ba5ff;
  }

  #page_index>>>.weui-media-box_appmsg .weui-media-box__thumb {
    height: 100%;
  }

</style>
