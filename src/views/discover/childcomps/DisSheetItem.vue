<template>
	<div class="item-sheet">
		<div class="item-1"><slot name="sheet-img"></slot></div>
		<div class="item-2"><slot name="sheet-text"></slot></div>
	</div>
</template>

<script>
export default {
	name: 'DisSheetItem'
}
</script>

<style scoped>
.item-sheet {
	flex: 1;
	height: 13%;
	text-align: center;
	/* height: 13%; */
	font-size: 14px;
}

.item-sheet img {
	width: 75%;
	vertical-align: middle;
	border-radius: 5px;
}

.item-2 {
	width: 75%;
	overflow:hidden; 
	text-overflow:ellipsis;
	display:-webkit-box; 
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2; 
	text-align: left;
	font-size: 12px;
	color: black;
	margin: 2px auto;
}
</style>
