<template>
  <div class="sidebar">
    <WindowButtons />
    <div class="menu-section">
      <p class="section-title">menu</p>
      <ul class="menu">
        <li class="menu-item active">
          <icon name="music"></icon>
          <span class="title">Songs</span>
        </li>
        <li class="menu-item">
          <icon name="th-large"></icon>
          <span class="title">Albums</span>
        </li>
        <li class="menu-item">
          <icon name="th-list"></icon>
          <span class="title">Genres</span>
        </li>
        <li class="menu-item">
          <icon name="microphone"></icon>
          <span class="title">Artists</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import WindowButtons from './window-buttons';
export default {
  name: 'SideBar',
  components: {
    WindowButtons,
  },
};
</script>

<style lang="scss" scoped>
@import './sidebar.scss'
</style>
