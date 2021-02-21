<template>
  <li class="singers-item" @click="itemClick">
    <img :src="singersItem.picUrl" alt="" @load="imageLoad"/>
    <span class="singer-name">{{ singersItem.name }}</span>
  </li>
</template>

<script>
export default {
  name: "SingerListItem",
  props: {
    singersItem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
	created() {
	},
	mounted() {
	},
	methods: {
		imageLoad() {
			console.log("监听到图片加载完成");
			this.$bus.$emit('SingerimageLoad')
		},
		itemClick() {
			this.$router.push('/singerpage/' + this.singersItem.id)
		}
	},
};
</script>

<style scoped>
.singers-item {
  display: flex;
  align-items: center;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 5px;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid rgba(165, 165, 165, 0.08);
}

.singers-item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.singer-name {
  margin-left: 20px;
  font-size: 14px;
}
</style>
