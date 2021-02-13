<template>
	<dis-icon>
		<dis-icon-item v-for="(item, index) in icon" :key="index">
			<img slot="icon-img" :src="item.iconUrl" alt="">
			<div slot="icon-title">{{item.name}}</div>
		</dis-icon-item>
	</dis-icon>
</template>

<script>
import DisIcon from 'views/discover/childcomps/DisIcon'
import DisIconItem from 'views/discover/childcomps/DisIconItem'

export default {
	name: 'MainDisIcon',
	components: {
		DisIcon,
		DisIconItem
	},
	props: {
		icon: {
			type: Array,
			default() {
				return null
			}
		}
	}
}
</script>

<style>

</style>
