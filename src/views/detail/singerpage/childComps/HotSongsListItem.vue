<template>
	<li class="song-item" @click="itemClick">
		<div class="item-index">{{index + 1}}</div>
		<div class="item-content">
			<h2 class="content-name">{{hotSongs.name}}</h2>
			<p class="content-desc">{{hotSongs.ar[0].name}} - {{hotSongs.al.name}}</p>
		</div>
	</li>
</template>

<script>
import { getSongsCheck, getSongInfo, getSongUrl } from 'network/singerpage'

export default {
	name: 'HotSongsListItem',
	data() {
		return {
			
		}
	},
	props: {
		hotSongs: {
			type: Object,
			default() {
				return [];
			}
		},
		index: {
			type: Number,
			default() {
				return null
			}
		}
	},
	mounted() {
		this.$bus.$emit('songsItem')
	},
	methods: {
		itemClick() {
			getSongsCheck(this.hotSongs.id).then(res1 => {
				const date = res1
				console.log(date);
				// if(date.success == 1) {
				// 	this.$bus.$emit('successSong', this.hotSongs)
				// 	getSongInfo(this.hotSongs.id).then((res) => {
				// 		this.$bus.$emit('songInfo', res)
				// 		console.log('true');
				// 	})
				// } else {
				// 	console.log('false');
				// }
				if(date.success == 1) {
					getSongInfo(this.hotSongs.id).then((res2) => {
						getSongUrl(this.hotSongs.id).then((res3) => {
							this.$emit('addList', this.hotSongs, res2, res3.data[0].url)
							this.$bus.$emit('updateSong')
						})
					})
				} else {
					console.log('false');
				}
			})
			
			this.$store.commit("changeMiniPlayerShow")
			this.$store.commit("changeIsPlayerShow")
		}
	},
}
</script>

<style scoped>
.song-item {
	display: flex;
  align-items: center;
  margin-bottom: 5px;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid rgba(165, 165, 165, 0.08);
}

.song-item .item-index {
	width: 60px;
	height: 60px;
	line-height: 60px;
	/* background-color: rgb(128, 0, 0); */
	color: #e1e1e1;
	text-align: center;
	font-size: 18px;
}

.item-content {
	-webkit-box-flex: 1;
	flex: 1;
	line-height: 24px;
	overflow: hidden;
}

.item-content .content-name {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	color: black;
	font-size: 14px;
}

.item-content .content-desc {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	margin-top: 4px;
	color: black;
	font-size: 12px;
}
</style>
