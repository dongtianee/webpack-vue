<template>
  <div class="timer">
    <h3 :class="counter + ' timer__counter'">
      {{ time }}
    </h3>
  </div>
</template>
<style lang="postcss">
    .timer {
      margin-top: 200px;
      text-align: center;

      &__counter {
        transition: all ease-in .5s;
        color: #638efd;
        font-size: 40px;

        &--leave {
          opacity: .5
        }
      }
    }
</style>
<script>
export default {
  data() {
      return {
        time: this.$utils.formatDate(new Date()),
        counter: 'timer__counter--leave'
      };
    },
    mounted() {
      this.run()
    },
    methods: {
      run() {
        let vm = this;
        setInterval(_ => {
          vm.counter = '';
          vm.time = this.$utils.formatDate(new Date());
          setTimeout(_ => {
            vm.counter = 'timer__counter--leave';
          }, 500);
        }, 1000)
      }
    }
  };
</script>

