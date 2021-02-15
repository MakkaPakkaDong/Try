<template>
  <div class="singers">
		<singers-list-item
			v-for="item in singers"
			:key="item.id"
			:singers-item="item"
		></singers-list-item>
	</div>
</template>

<script>
import SingersListItem from './SingersListItem.vue';
export default {
  components: { SingersListItem },
  name: "SingersList",
	props: {
		singers: {
			type: Array,
			default() {
				return [];
			}
		}
	},
  data() {
    return {
     
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
.singers {
	width: 100%;
}
</style>
