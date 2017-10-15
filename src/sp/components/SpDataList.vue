<template>
    <div id="data_list" class="sc-data">
        <div class="title">
            <h2>データ</h2>
        </div>
        <div class="body">
            <!--/* 3件だけ表示 */-->
            <div v-for="n in (datalist.length > 3?3:(datalist.length))">
                {{datalist[n-1].id}}-{{datalist[n-1].value}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'data_list',
    props:['datalist'],
    components:{
        Message
    }
//    computed:{
//    }
  
}
</script>

<style lang="scss" scoped>
.sc-data {
	margin-bottom: 29px;
}
.sc-data .title {
	margin-bottom: 9px;
	position: relative;
	width: 100%;
}
.sc-data .title h2 {
	display: inline-block;
	font-size: 20px;
	font-weight: bold;
	line-height: 32px;
	margin: auto 2px;
	vertical-align: middle;
}
.sc-data .title icon {
	display: inline-block;
	vertical-align: middle;
}
.sc-data .title .sc-badge {
	background: #FF4247;
	border-radius: 10px;
	color: #FFF;
	display: inline-block;
	font-size: 14px;
	font-weight: bold;
	height: 20px;
	line-height: 20px;
	min-width: 20px;
	padding: 0 5px;
	text-align: center;
	vertical-align: middle;
}
.sc-data .title .link {
	bottom: 2px;
	color: #333;
	display: inline-block;
	font-size: 15px;
	position: absolute;
	right: 0;
}
</style>
>

</style>
