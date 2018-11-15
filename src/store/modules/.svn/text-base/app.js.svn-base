const app = {
	state: {
		loading: false,
		title: '',
	},
	mutations: {
		UPDATE_LOADING(state, loading){
			state.loading = loading;
		},
		SET_TITLE(state, title) {
			state.title = title;
		},
	},
	actions: {
		showLoading( { commit } ) {
			commit('UPDATE_LOADING', true);
		},
		hideLoading( { commit } ) {
			commit('UPDATE_LOADING', false);
		},
		setTitle( { commit }, title ){
			commit('SET_TITLE', title);
		}
	}
}

export default app