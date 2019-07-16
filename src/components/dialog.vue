<template>
  <transition name="fade" v-if="flag">
    <div class="dialog" @click="$emit('closeDialog')">我是弹窗</div>
  </transition>
</template>

<script>
export default {
  props: ['flag']
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.2s linear;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.dialog {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #bbb;
  border-radius: 5px;
  text-align: center;
  background: #fff;
}
</style>
