<template>
  <div class="header">
    <div class="header__logo" />
    <h1 class="header__title">
      360前端星计划 · 2019
    </h1>
  </div>
</template>
<style lang="postcss">
    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 400px;
      background: url('../assets/img/bg.png') no-repeat #638efd;

      &__title {
        color: #fff
      }

      &__logo {
        color: #fff;
        height: 80px;
        width: 270px;
        background: url('../assets/img/logo.svg') no-repeat;
        background-size: 100%;
      }
    }
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

