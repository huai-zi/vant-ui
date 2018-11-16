<template>
	<div id="app">
    <!-- 请求loading -->
		<loading v-model="isLoading"></loading>
    <!-- 请求警告 -->
		<router-view></router-view>
	</div>
</template>

<script>
import { Loading } from "vux";
import { mapState } from "vuex";
import '../static/styles/base.css'
export default {
  name: "app",
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.app.loading
    })
  },
  mounted(){
  }
};
</script>

<style lang="less">
body,
html {
  background-color: #f6f6f6;
}
</style>