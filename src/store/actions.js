export default {
	addList(context, payload) {
		return new Promise((reslove, reject) => {
			let oldSong = context.state.songsList.find(item => item.id === payload.id)
			if (oldSong) {
				reslove('歌曲已列表中')
			} else {
				payload.count = 1
				context.commit(addToList, payload)
				reslove('成功添加到列表中')
			}
		})
	}
}
