const app = {
	state: {
		loading: false,
		title: '',
	},
	mutations: {
		UPDATE_LOADING(state, loading){
			state.loading = loading;
		},
	},
	actions: {
		showLoading() {
			this.commit('UPDATE_LOADING', true);
		},
		hideLoading() {
			this.commit('UPDATE_LOADING', false);
		}
	}
}

export default app