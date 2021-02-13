<template>
	<div class="icon-item">
		<div class="icon-img"><slot name="icon-img"></slot></div>
		<div><slot name="icon-title"></slot></div>
	</div>
</template>

<script>
export default {
	name: 'DisIconItem'
}
</script>

<style scoped>
.icon-item {
	flex: 1;
	text-align: center;
	font-size: 8px;
	height: 12%;
	margin: 0 auto;
	color: rgb(51, 51, 51);
}

.icon-item img {
	width: 32px;
	height: 32px;
	vertical-align: middle;
	background-color: rgb(254, 96, 95);
	border-radius: 50%;
}

.icon-img {
	width: 44px;
	height: 44px;
	background-color: rgb(255, 241, 241);
	border-radius: 50%;
	line-height: 44px;
	margin: 0 auto 3px;
}
</style>
