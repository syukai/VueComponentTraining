<template>
    <transition name="loading-modal">
        <div v-if="isLoading"
            id="loadingModal">
            <img src="../img/ajax_loader.gif">
        </div>
    </transition>  
</template>

<script>
export default {
  name: 'loading-modal'
  ,props:['isLoading']
}
</script>

<style lang="scss" scoped>
#loadingModal{
    height:100%;
    width:100%;
    position: fixed;
    top:0;
    left:0;
    background:rgba(0, 0, 0, 0.2);
    z-index:10000;
    transition: opacity .1s ease;
    img{
        position: absolute;
        top:0;
        bottom:0;
        left: 0;
        right: 0;
        margin:auto;
    }

    .loading-modal-enter {
        opacity: 0;
    }

    .loading-modal-leave-active {
        opacity: 0;
    }

    .loading-modal-enter,
    .loading-modal-leave-active{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    
}
</style>
