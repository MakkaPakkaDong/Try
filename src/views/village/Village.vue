<template>
	<div id="village">
		<span @click="isShow">Village</span>
		<span>{{show}}</span>
		<vill-popup></vill-popup>
	</div>
</template>

<script>
// import { mapMutations } from 'vuex';

import VillPopup from './childcomps/VillPopup'

export default {
	name: 'Village',
	components: {
		VillPopup
	},
	data() {
		return {
			// show: false,
		}
	},
	computed: {
		show: function() {
			return this.$store.state.show
		}
	},
	methods: {
		isShow: function() {
			this.$store.commit('changeShow')
		}
	},
}
</script>

<style scoped>

</style>
