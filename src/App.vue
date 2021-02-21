<template>
	<div id="app">
		<router-view/>
		<player>
			
		</player>
		<main-tab-bar/>
	</div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
import Player from 'components/common/player/Player'

export default {
  name: 'App',
  components: {
    MainTabBar,
		Player
  },
	created() {
	},
	destroyed() {
	},
}
</script>

<style scoped>
@import "assets/css/base.css";
@import "assets/css/style.css";

</style>
