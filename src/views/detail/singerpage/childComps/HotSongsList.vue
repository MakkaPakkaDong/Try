<template>
	<div class="hot-songs">
		<hot-songs-list-item
			v-for="(item, index) in hotSongs"
			:key="item.id"
			:hot-songs="item"
			:index="index"
			@addList="addList"
		></hot-songs-list-item>
	</div>
</template>

<script>
import HotSongsListItem from './HotSongsListItem.vue'
export default {
  components: { HotSongsListItem },
	name: 'HotSongsList',
	props: {
		hotSongs: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	computed: {
		
	},
	methods: {
		addList(val1, val2, val3) {
			this.$emit('addList', val1, val2, val3)
		}
	},
}
</script>

<style scoped>

</style>
