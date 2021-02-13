<template>
	<div>
		<nav-bar>
			<div slot="center" class="center">
				<input type="text" name="" id="" placeholder="人间-王菲" maxlength="32">
			</div>
			<div slot="right" class="right">
				<img src="~assets/img/discover/mic-circle-f.svg" alt="">
			</div>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
	name: 'DisNav',
	components: {
		NavBar 
	}
}
</script>

<style scoped>
.center input {
	outline: none;
	width: 230px;
	height: 34px;
	border-radius: 15px;
	border: 1px solid red;
	background-color: rgba(246,246,246,0.9);
	text-indent: 12px;
	font-size: 12px;
	color: grey;
}

.right img {
	vertical-align: middle;
}
</style>
