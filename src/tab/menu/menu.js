import Vue from 'vue'
import store from './menuStore.js'
import menuMain from './menu.vue'

var menuLayout = new Vue({
    el:'#sc-main'
    ,store
    ,render:(h)=>h(menuMain)
//    ,created(){
//    }
})

