<template>
	<div id="singer-page">
		<!-- {{id}} -->
		<singer-page-nav-bar :artist="artist"></singer-page-nav-bar>
		<scroll-y class="scroll-content" ref="bs">
			<div class="header">
				<img :src="bgImg" alt="">
			</div>
			<singer-info :artist="artist"></singer-info>
			<hot-songs-list 
				:hotSongs="showHotSongs"
				@addList="addToList"
			></hot-songs-list>
		</scroll-y>
		<!-- <div class="header">
			<img :src="bgImg" alt="">
		</div>
		<singer-info :artist="artist"></singer-info>
		<hot-songs-list :hotSongs="showHotSongs"></hot-songs-list> -->
	</div>
</template>

<script>
import { getSingerPage, Artist } from 'network/singerpage'
import SingerPageNavBar from './childComps/SingerPageNavBar.vue'
import SingerInfo from './childComps/SingerInfo'
import HotSongsList from './childComps/HotSongsList.vue'
import ScrollY from '../../../components/common/scroll/ScrollY.vue'
import { mapActions } from 'vuex'

export default {
  components: { SingerPageNavBar, SingerInfo, HotSongsList, ScrollY },
	name: 'SingerPage',
	data() {
		return {
			id: null,
			bgImg: null,
			artist: {},
			songId: null,
			songInfo: null
		}
	},
	computed: {
		showHotSongs() {
			return this.artist.hotSongs
		}
	},
	created() {
		this.id = this.$route.params.id
		getSingerPage(this.id).then((res) => {
			// console.log(res);
			const data = res
			console.log(data);
			this.artist = new Artist(
				data.artist,
				data.hotSongs
			)
			this.bgImg = this.artist.bgImg
		})
		

		this.$bus.$on('songsItem', () => {
			console.log("监听到songlistitem");
			this.$refs.bs.refresh()
		})
	},
	mounted() {
	},
	destroyed() {
		this.$bus.$off('songsItem')
	},
	methods: {
		...mapActions(['addList']),
		addToList(val1, val2, val3) {
			// 想获取需要展示的歌曲列表
			const song = {}
			song.id = val1.id;
			song.artist = val2.songs[0].ar[0].name
			song.zhuanji = val1.al.name
			song.title = val2.songs[0].name
			song.picUrl = val2.songs[0].al.picUrl
			song.songUrl = val3
			// console.log(val1,val2,val3);
			// this.addList(song).then(res => {
			// 	console.log(res);
			// })
			this.$store.commit('addToList',song)
		}
	},
}
</script>

<style scoped>
#singer-page {
	position: relative;
	height: 100vh;
}

.header {
	width: 100%;
}

.header img {
	width: 100%;
	height: 100%;
}

.scroll-content {
	overflow: hidden;
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
}
</style>
