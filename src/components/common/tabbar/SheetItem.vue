<template>
	<div id="sheet-item">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'SheetItem'
}
</script>

<style scoped>
	#sheet-item {
		display: flex;
		/* background-color: rgb(23, 231, 82); */
		width: 90%;
		margin-left: 5%;
		margin-top: 10px;
		margin-bottom: 10px;
		border-bottom: 1px solid rgba(175, 161, 161, .2);
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		padding-bottom: 5px;
	}
</style>
