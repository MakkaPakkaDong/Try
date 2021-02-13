<template>
	<div class="icon">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'DisIcon',
	components: {

	}
}
</script>

<style scoped>
.icon {
	width: 90%;
	margin-left: 5%;
	display: flex;
	margin-top: 8px;
	padding-bottom: 8px;
	border-bottom: 1px solid rgb(0, 0, 0, .09);
}
</style>
