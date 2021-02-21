<template>
	<div>
			<singer-nav-bar>
				<div slot="left" class="back" @click="backClick">
					<img src="~assets/img/common/back.svg" alt="">
				</div>
				<div slot="center" class="title">
					{{artist.singerName}}
				</div>
		</singer-nav-bar>
	</div>
</template>

<script>
import SingerNavBar from 'components/common/navbar/SingerNavBar'

export default {
	name: 'SingerPageNavBar',
	components: {
		SingerNavBar
	},
	props: {
		artist: {
			type: Object,
			default() {
				return null
			}
		}
	},
	methods: {
		backClick() {
			this.$router.go(-1)
		}
	},
}
</script>

<style scoped>
.back img {
	margin-top: 10px;
}
</style>
