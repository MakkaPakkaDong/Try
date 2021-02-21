export default {
	changeShow(state) {
		state.show = !state.show
	},
	changeMiniShow(state) {
		state.miniShow = !state.miniShow
	},
	changeMiniPlayerShow(state) {
		state.miniPlayerShow = true
	},
	changeIsPlayerShowTrue(state) {
		state.isPlayerShow = true
	},
	changeIsPlayerShow(state) {
		state.isPlayerShow = !state.isPlayerShow
	},
	addToList(state, payload) {
		state.songsList.push(payload)
	}
}
