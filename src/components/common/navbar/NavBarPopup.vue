<template>
	<div class="nav-pupop">
    <van-popup v-model="IsShow" position="left" :style="{ height: '100%', width: '70%', background: 'rgba(255, 255, 255, .7)' }">
			<slot></slot>
			<div class="pupop-img">
				<img src="~assets/img/popup/popup.jpg" alt="">
			</div>
		</van-popup>
	</div>
</template>

<script>

export default {
	name: 'NavBarPopup',
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
.pupop-img {
	width: 80%;
	height: 60%;
	margin-top: 20%;
	margin-left: 10%; 
}

.pupop-img img {
	width: 100%;
	height: 100%;
}
</style>
