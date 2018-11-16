<!-- 信息展示页面 -->
<template>
  <div id="information_page">
    新闻信息展示页面
  </div>
</template>

<script>
  import {
    newlist
  } from '../../api/newlists'
  export default {
    name: "information_page",
    data() {
      return {};
    },
    components: {},
    computed: {},
    mounted() {
      console.log(contentId);
      const contentId = this.$router.history.current.hash.substr(1);
      newlist({
          'contentId': contentId
        })
        .then(response => {
          console.log(response);
        })
    },
    methods: {}
  }

</script>

<style scoped>
</style>
