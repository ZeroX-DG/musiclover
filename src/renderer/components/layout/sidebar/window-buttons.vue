<template>
  <div class="window-button-group">
    <div class="window-button" @click="closeApp">
      <icon name="times" scale="0.6"></icon>
    </div>
    <div class="window-button">
      <icon name="window-maximize" scale="0.6"></icon>
    </div>
    <div class="window-button">
      <icon name="minus" scale="0.6"></icon>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WindowButtons',
  methods: {
    closeApp() {
      this.$electron.remote.BrowserWindow.getFocusedWindow().close();
    },
  },
};
</script>

<style lang="scss">

.window-button-group {
  height: 100%;
  display: flex;
  align-items: center;
  height: 30px;
  padding: 5px 10px;

  .window-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 8px;
    cursor: pointer;
    transition: box-shadow 0.3s;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8292af;
    -webkit-app-region: no-drag;

    &:hover {
      box-shadow: inset 0 0 2px #000000;
    }
  }

  &:first-child {
    margin-left: -8px;
  }
}

</style>
