<template>
  <div class="scroll-wrapper" ref="scroll">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "ScrollY",
  data() {
    return {};
  },
  mounted() {
    this.init();
		this.bs.refresh()
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        probeType: 3,
        click: true,
      });
      // this.bs.on("scrollStart", () => {
      //   console.log("scrollStart-");
      // });
      // this.bs.on("scroll", ({ y }) => {
      //   console.log("scrolling-");
      // });
      // this.bs.on("scrollEnd", (pos) => {
      //   console.log(pos);
      // });
    },
		refresh() {
			this.bs && this.bs.refresh()
		}
  },
};
</script>

<style scoped>
.scroll-wrapper {
  /* position: relative; */
  overflow: hidden;
}

/* .scroll-content {
	height: calc(100vh - 47px);
} */
</style>
