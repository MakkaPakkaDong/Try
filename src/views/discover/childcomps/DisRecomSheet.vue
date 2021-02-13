<template>
	<div class="sheet">
		<div class="title">
			<div class="title-item clear-fix">
				<div class="left">推荐歌单</div>
				<div class="right">
					<a href="#">更多 ></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'DisRecomSheet'
}
</script>

<style scoped>
.sheet {
	width: 90%;
	margin-left: 5%;
	/* background-color: #fff; */
	margin-top: 15px;
}

.sheet .title {
	/* display: flex;
	实现垂直居中
  align-items: center;
  实现水平居中
  justify-content: center; */
	width: 100%;
	/* background-color: rgb(238, 106, 106); */
}

.left {
	font-size: 28px;
	font-weight: 700;
}

.right {
	font-size: 12px;
	font-weight: 300;
	border:1px solid rgb(230, 230, 230);
	border-radius: 99em;
	padding: 3px 5px;
	margin-right: 3px;
	margin-top: 4px;
}
</style>
