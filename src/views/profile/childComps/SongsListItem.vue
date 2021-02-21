<template>
	<li class="list-item">
		<div class="item-index">{{index + 1}}</div>
		<div class="item-content">
			<h2 class="content-name">{{listInfo.title}}</h2>
			<p class="content-desc">{{listInfo.artist}} - {{listInfo.zhuanji}}</p>
		</div>
	</li>
</template>

<script>
export default {
	name: 'SongListItem',
	props: {
		listInfo: {
			type: Object,
			default() {
				return {}
			}
		},
		index: {
			type: Number,
			default() {
				return null
			}
		}
	}
}
</script>

<style scoped>
.list-item {
	display: flex;
  align-items: center;
  margin-bottom: 5px;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid rgba(165, 165, 165, 0.08);
}

.list-item .item-index {
	width: 60px;
	height: 60px;
	line-height: 60px;
	/* background-color: rgb(128, 0, 0); */
	color: #e1e1e1;
	text-align: center;
	font-size: 18px;
}

.item-content {
	-webkit-box-flex: 1;
	flex: 1;
	line-height: 24px;
	overflow: hidden;
}

.item-content .content-name {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	color: black;
	font-size: 14px;
}

.item-content .content-desc {
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	margin-top: 4px;
	color: black;
	font-size: 12px;
}
</style>
