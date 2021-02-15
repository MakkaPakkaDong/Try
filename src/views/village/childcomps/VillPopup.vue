<template>
	<div class="vill-pop">
    <van-popup v-model="IsShow" position="left" :style="{ height: '100%', width: '70%' }">内容</van-popup>
	</div>
</template>

<script>

export default {
	name: 'VillPopup',
	data() {
		return {
			// IsShow: false
		}
	},
	computed: {
		IsShow: {
			get() {
				return this.$store.state.show
			},
			set(val) {
				this.$store.commit('changeShow', val)
			}
		}
	}
}
</script>

<style scoped>

</style>
