<!-- 新闻列表 -->
<template>
  <div id="newlists_page">
    <Panel header='信息列表' type='5' :list="lists" @on-click-item='onImgError'></Panel>
  </div>
</template>

<script>
  import {
    Panel
  } from 'vux';

  import {
    loginByUsername
  } from '@/api/index.js'

  export default {
    data() {
      return {
        name: "newlists_page",
        lists: []
      };
    },
    components: {
      Panel
    },
    methods: {
      onImgError(item, $event) {
        this.$router.push({
          path: '/information#'+item.id
        })
        return false
      }
    },
    mounted() {
      //信息列表数据
      loginByUsername().then(response => {
        // 数据修整
        let rows = response.data.rows;
        for (var item in response.data.rows) {
          let obj = new Object();
          const datas = rows[item];
          obj.src = datas['titleImage'];
          console.log(obj.src);
          obj.title = datas['title'];
          obj.desc = datas['trainingDate'];
          obj.id = datas['contentId'];
          obj.fallbackSrc = "http://iph.href.lu/60x60?text=图片";
          let type = ''
          switch (datas['infoType']) {
            case 1:
              type = '宣传培训';
              break;
            case 2:
              type = '政策法规';
              break;
            default:
              type = '制度标准'
          }
          obj.meta = {
            source: type
          };
          this.lists.push(obj)
        }
      })
    }
  }

</script>
<style scoped>
  /* 图表样式 */
  #newlists_page>>>.weui-panel__hd {
    color: #3ba5ff;
  }

  #newlists_page>>>.weui-media-box_appmsg .weui-media-box__thumb {
    height: 100%;
  }

  #newlists_page>>>.weui-media-box__info__meta {
    font-size: 1rem;
  }

  .page-loadmore-wrapper {
    overflow: auto;
  }

</style>
