<template>
	<div class="mini-pupop">
    <van-popup v-model="IsShow" position="bottom" :style="{ height: '30%', width: '100%', background: 'rgba(255, 255, 255, .7)' }">
			<slot></slot>
		</van-popup>
	</div>
</template>

<script>

export default {
	name: 'MiniPopup',
	data() {
		return {
			// IsShow: false
		}
	},
	computed: {
		IsShow: {
			get() {
				return this.$store.state.miniShow
			},
			set(val) {
				this.$store.commit('changeMiniShow', val)
			}
		}
	}
}
</script>

<style scoped>

</style>
