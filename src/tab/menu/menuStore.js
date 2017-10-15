import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// サーバー側でのタイムアウト判定に使用
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
// CSRF対策
// axios.defaults.headers[document.head.querySelector('meta[name="_csrf_header"]').getAttribute('content')]
//     = document.head.querySelector('meta[name="_csrf"]').getAttribute('content');

export default new Vuex.Store({
    state:{
        data_list: []
    }
    ,mutations:{
        setDataList(state, dataList){
            state.data_list = dataList;
        }
    }
    ,actions:{
        getDataList(context,{key}){
            axios.get('/tab/getData/'+key)
                .then((res)=>{
                    context.commit('setDataList',res.data)
                }).catch((error)=>{
                    if(error.response.status!=undefined && (error.response.status===401 || error.response.status===403)){
                        // 認証エラー（タイムアウト等） 自画面を再読み込みすることでログイン画面にリダイレクト
                        window.location.href = "./";
                    }
                });
        }
    }


})