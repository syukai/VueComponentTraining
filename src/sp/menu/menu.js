import Vue from 'vue'
import store from './menuStore.js'
import menuMain from './menu.vue'
import VueJsModal from 'vue-js-modal'
Vue.use(VueJsModal, {
    dialog: true
  });

var menuApp = new Vue({
    el:'#sc-main',
    // template: '<menuMain/>',
    store,
    // components:{menuMain}
    render:(h)=>h(menuMain)

    // 起動時処理
    ,created(){
        this.$store.dispatch('getMyMessage');
        this.$store.dispatch('loadSchedulePlan');
        keepSession.keepsession();
    }
});
