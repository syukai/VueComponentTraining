<template>
<div id="sc-main">
	<div class="sc-wrapper clearfix">
		
		<div class="sc-block1 clearfix">
		
			<!--/* メッセージ */-->
			<dataListComponent id="sc-messege1" class="sc-messege1" v-bind:datalist="$store.state.data_list">
			</dataListComponent>

		</div>
	</div>
	<loading-modal
		:isLoading="$store.state.showLoading">
	</loading-modal>
</div>  
</template>

<script>

import dataListComponent from '../components/SpDataList.vue'
import loadingModal from '../../components/LoadingModal.vue'
export default {
	data:function(){
		return {orgvalue:''};
	}
    ,components:{
		messageListComponent
		,loadingModal
	}
//	,methods:{
//	}
}
</script>

<style lang="scss" scoped>

</style>
