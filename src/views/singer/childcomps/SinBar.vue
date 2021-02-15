<template>
	<div>
		<nav-bar>
			<div class="center" slot="center">热门歌手</div>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'


export default {
	name: 'SinBar',
	components: {
		NavBar
	}
}
</script>

<style scoped>
.center {
	font-size: 16px;
	font-weight: 700;
}
</style>
