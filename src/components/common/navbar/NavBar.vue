<template>
	<div class="nav-bar">
		<!-- <div class="left"><slot name="left"></slot></div> -->
		<div class="left" @click="isShow">
			<img src="~assets/img/discover/task-list.svg" alt="">
			<!-- <div ><slot></slot></div> -->
		</div>
		<nav-bar-popup></nav-bar-popup>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
import NavBarPopup from './NavBarPopup.vue'

export default {
	name: 'NavBar',
	data() {
		return {
			// show: fasle
		}
	},
	components: {
		NavBarPopup
	},
	computed: {
		// show: function() {
		// 	return this.$store.state.show
		// }
	},
	methods: {
		isShow: function() {
			this.$store.commit('changeShow')
		}
	},
}
</script>

<style scoped>
.nav-bar {
	display: flex;
	height: 44px;
	line-height: 44px;
	text-align: center;
	background-color: rgba(246, 246, 246, 0.1);
	box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.left, .right {
	width: 60px;
}

.left img {
	text-align: center;
	vertical-align: middle;
}

/* .left-img {
	width: 100%;
	height: 100%;
} */

.center {
	flex: 1;
}
</style>