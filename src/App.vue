<template>
	<div id="app">
		<loading v-model="isLoading"></loading>
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
  }
};
</script>

<style lang="less">
body,
html {
  background-color: #f6f6f6;
}
</style>