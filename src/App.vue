<template>
  <router-view></router-view>
</template>

<script>
import './assets/reset.css';
import './assets/main.css';
import StartPage from '@/components/StartPage.vue';

export default {
  data() {
    return {

    }
  },

  components: {
    StartPage,
  },
}
</script>

<style>

</style>
