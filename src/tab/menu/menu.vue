<template>
<div id="sc-main">
	<div class="sc-wrapper clearfix">
		<div class="cl2 clearfix">
			<!--/* データ */-->
			<dataListComponent
                id="data_list"
                class="sc-data"
                v-bind:dataList="$store.state.data_list">
			</dataListComponent>

		</div>
		
    <div id="app"></div>
	</div><!--/* .sc-wrapper */-->
</div><!--/* #sc-main */-->
</template>

<script>
import dataListComponent from '../components/dataList.vue'

export default {
  name:'menu-main'
  ,components:{
      dataListComponent
  }
}
</script>

<style lang="scss" scoped>

</style>
