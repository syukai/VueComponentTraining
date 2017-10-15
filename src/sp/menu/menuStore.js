import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// サーバー側でのタイムアウト判定に使用
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
// CSRF対策
// axios.defaults.headers[document.head.querySelector('meta[name="_csrf_header"]').getAttribute('content')]
//      = document.head.querySelector('meta[name="_csrf"]').getAttribute('content');


export default new Vuex.Store({
    state:{
        data_list: [],
        showLoading:false   // 処理中画面表示
    },
    // 同期処理はmutationsに記述してcommitで呼び出し
    mutations: {
        setData(state, data){
            state.data_list = data;
        }
    },
    // 非同期処理はactionsに記述してdispatchで呼び出し
    actions: {
        getData(context,{key}){
            // axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
            return axios.get("/getdata/"+key)
                .then((res) => {
                    context.commit('setData',res.data);
                });
        }
    }




})
