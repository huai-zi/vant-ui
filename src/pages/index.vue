<!-- 首页 -->
<template>
  <div id="page_index">

    <!-- 图片轮播展示 -->
    <Swiper :list='imgLists' :auto='true' height='200px' :loop='true' dots-position='center'>
    </Swiper>

    <!-- 天气预报信息 -->
    <div class="weather">
      <div>
        <div id="weatherImg"></div>
        <span class="weatherData" ref='weatherData'></span>
      </div>
    </div>

    <!--菜单-->
    <div class="menu">
      <ul style="display: inline-block;width: 100%;">
        <li>
          <router-link :to="{path:'/lists'}">
            <img src="../../static/images/宣传培训@2x.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to='/lists'>
            <img src="../../static/images/政策法规@2x.png" alt="">
          </router-link>

        </li>
        <li>
          <router-link to=''>
            <img src="../../static/images/制度标准.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to=''>
            <img src="../../static/images/项目推进@2x.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to='/monitor'>
            <img src="../../static/images/实时监测.png" alt="">
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 图表信息 -->
    <my-com1></my-com1>

    <!-- 下拉刷新的图表内容 -->
   <!--  <div class="page-loadmore-wrapper">
      <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false"
        bottom-loading-text='正在加载中...'>
         <div v-for="(item,index) in lists">
                 <h4> {{index+5}}</h4>
           </div>
          </mt-loadmore>
    </div> -->

  </div>
</template>

<script>

  import myCom1 from './newlists/newlists';
  import api from '../api/commonURL'

  import {
    Swiper,
    AjaxPlugin,
  } from 'vux';

  import {
    weather_mini
  } from '@/api/index.js'


  export default {
    name: 'page_index',
    data() {
      return {
        allLoaded: false,
        lists: [22, 33, 44, 55, 66, 77, 88, 99],
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
      Swiper,
      myCom1
    },
    methods: {
      loadBottom() {
        console.log('我被选中了');
        // this.allLoaded = true; //停止下拉刷新,同是显示下拉刷新的数据为空
        setTimeout(() => {
          this.lists.push(11);
          this.$refs.loadmore.onBottomLoaded();
        }, 1000)
      },
    },
    mounted() {


      //当日温度显示
      fetch(api.index.weather).then(response => response.json()) //解析为可读数据
        .then(data => {
          var value = data.data.forecast[0].date + " " + data.data.forecast[0].type + "  " + data.data.forecast[0].high +
            " " + data.data.forecast[0].low
          this.$refs.weatherData.innerHTML = value;
        })

    }
  }

</script>
<style scoped>
  /*天气预报*/
  .weather {
    height: 40px;
    background: #ffffff;
  }

  .weather #weatherImg {
    display: inline-block;
    width: 90px;
    height: 40px;
    margin-top: 10px;
    margin-left: 15px;
    background-image: url("../../static/images/天气预报@2x.png");
    background-repeat: no-repeat;
    background-size: 90px;
  }

  .weatherData {
    margin-right: 10px;
    float: right;
    line-height: 40px;
    font-size: 0.8rem;
  }

  /*菜单*/
  .menu {
    /*height: 80px;*/
    display: inline-block;
    width: 100%;
    margin-top: 10px;
    padding: 20px 0;
    background: #fff;
    /*display: none;*/
  }

  .menu li {
    float: left;
    width: 20%;
    text-align: center;

  }

  .menu li a {
    display: inline-block;

  }

  .menu li img {
    width: 60px;
  }

</style>
