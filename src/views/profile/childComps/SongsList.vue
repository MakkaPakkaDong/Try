<template>
	<div class="songs-list" v-if="songsList">
		<scroll-y ref="scroll" class="content">
			<songs-list-item v-for="(item, index) in songsList" :key="index" :listInfo="item" :index="index"></songs-list-item>
		</scroll-y>
	</div>
</template>

<script>
import ScrollY from 'components/common/scroll/ScrollY.vue'
import SongsListItem from './SongsListItem.vue'

import { mapGetters } from 'vuex'

export default {
	name: 'SongsList',
  components: { 
		ScrollY,
		SongsListItem,
	},
	computed: {
		...mapGetters(['songsList'])
	},
	created() {
		
	},
	activated() {
		this.$refs.scroll.refresh()
	},
}
</script>

<style scoped>
.songs-list {
	height: calc(100% - 195px);
}

.content {
	height: 100%;
	overflow: hidden;
}
</style>
