<template>
  <div class="window-wrapper">
    <SideBar />
    <slot></slot>
  </div>
</template>
<script>
import SideBar from './sidebar/sidebar';
export default {
  name: 'Layout',
  components: {
    SideBar,
  },
};
</script>
<style lang="scss">
@import 'layout.scss'
</style>
