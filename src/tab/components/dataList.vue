<template>
    <div id="data_list" class="sc-data">
        <VuePerfectScrollbar class="body ps-content" v-bind:settings="perfectScrollbarSettings">
            <div v-for="data in datalist" >
              {{data.id}}-{{data.value}}
            </div>
        </VuePerfectScrollbar>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar/index.vue'
export default {
    name: 'data_list',
    data: function(){
        return{
            perfectScrollbarSettings: {maxScrollbarLength: 390}
        }
    },
    props:['datalist']
    ,components:{
        VuePerfectScrollbar
    }
//    ,computed:{
//    }
}
</script>

<style lang="scss" scoped>
.sc-data {
	width: 100%;
    .title {
        height: 32px;
        margin-bottom: 10px;
        position: relative;
        text-align: center;
        width: 100%;
        h2 {
            display: inline-block;
            font-size: 20px;
            font-weight: bold;
            line-height: 32px;
            margin: auto 2px;
            vertical-align: middle;
        }
        icon {
            display: inline-block;
            vertical-align: middle;
        }
        .sc-badge {
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
        .link {
            bottom: 2px;
            color: #333;
            display: inline-block;
            font-size: 15px;
            position: absolute;
            right: 0;
        }
    }
    .body {
        height: 390px;
        overflow: auto;
        padding-right: 12px;
        -webkit-overflow-scrolling: touch;
        // overflow-scrolling: touch;
        width: 100%;
    }
    .unread .list-body {
        font-weight: bold;
    }
    .list-body {
        background: #F2F2F2;
        font-size: 16px;
        line-height: 1.4;
        margin: 0 0 4px;
        overflow: hidden;
        padding: 13px 80px 13px 13px;
        width: 100%;
    }
    .list-body .date {
        display:inline-block;
        font-size: 15px;
        line-height: 1.1;
        margin: 0 0 5px;
        padding: 0 15px 0 0;
        position: relative;
        vertical-align: middle;
    }
    .list-body .date .badge {
        background: #FF4247;
        border-radius: 50%;
        display: none;
        font-size: 0;
        height: 9px;
        line-height: 0;
        margin: -5px 0 0;
        min-width: 0;
        padding: 0;
        position: absolute;
        right: 0;
        top: 50%;
        width: 9px;
    }
    .unread .list-body .date .badge {
        display: block;
    }
    .list-body p {
        clear: left;
        font-size: 16px;
        line-height: 1.4;
        margin: 0;
        width: 100%;
    }    
}
.cl2 .sc-data {
	float: right;
	padding-right: 12px;
	padding-top: 12px;
	/*width: 47.7867%;*/
	width:  47.65625%;
 }
</style>
