<template>
	<tab-bar>
			<tab-bar-item path="/discover">
				<img slot="item-icon" src="~assets/img/tabbar/gitlab-square.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/gitlab.svg" alt="">
				<div slot="item-text">发现</div>
			</tab-bar-item>
			<tab-bar-item path="/boke">
				<img slot="item-icon" src="~assets/img/tabbar/drupal-square.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/drupal.svg" alt="">
				<div slot="item-text">播客</div>
			</tab-bar-item>
			<tab-bar-item path="/profile">
				<img slot="item-icon" src="~assets/img/tabbar/beatport-square.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/beatport-circle.svg" alt="">
				<div slot="item-text">我的</div>
			</tab-bar-item>
			<tab-bar-item path="/village">
				<img slot="item-icon" src="~assets/img/tabbar/alien.svg" alt="">
				<img slot="item-icon-active" src="~assets/img/tabbar/alien-f.svg" alt="">
				<div slot="item-text">云村</div>
			</tab-bar-item>
		</tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'


export default {
	name: 'MainTabBar',
	components: {
		TabBar,
		TabBarItem
	}
}
</script>

<style scoped>

</style>