<template>
    <transition name="toast"
        v-on:after-enter="toastAfterEnter">
        <div v-if="$store.state.toast.show"
            id="toast"
            style="width:50%">
            <label>{{$store.state.toast.text}}</label>
        </div>
    </transition>
  
</template>

<script>
export default {
  name: 'toast'
  ,props:['isShow', 'text']
  ,methods:{
    //toast表示完了時処理
    toastAfterEnter(){
        //2秒後に閉じる
        setTimeout(()=>
            // this.$store.commit('toastClose')
            this.$emit('toastClose')
        , 2000);
    }
  }

}
</script>

<style lang="scss" scoped>
#toast{
    position:fixed;
    margin:auto;
    left: 0;
    right:0;
    top:30px;
    opacity:1;
    z-index:10000;
    background-color: rgba(0,0,0,0.8);
    white-space: nowrap;
    border-radius: 5px;
    // width:50%;   // styleで指定
    label{
        color:#fff;
        margin:auto;
        text-align:center;
        width:100%;
    }
    &.toast-enter{
        top:-30px;
        opacity:0;
    }
    &.toast-leave-to{
        opacity:0;
    }
    &.toast-enter-active{
        transition: opacity 1s linear, top 1s ease;
    }
    &.toast-leave-active{
        transition: opacity 1s linear;
        opacity:0;
    }    
    // toast-enter-active toast-enter-to
    // .toast-enter-to{
    //     top:30px;
    //     opacity:1;
    // }
}
</style>
