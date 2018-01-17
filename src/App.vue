<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Loader
      :loading="showLoader">
      <HelloWorld/>
    </Loader>
  </div>
</template>

<script>
import Loader from './components/Loader';
import HelloWorld from './components/HelloWorld';

const FAKE_LOADING_TIME = 3000;
export default {
  name: 'App',
  data() {
    return {
      showLoader: true,
    };
  },
  components: {
    Loader,
    HelloWorld,
  },
  created() {
    /* Emulate an API call, stop showing the loader after 3s */
    new Promise((resolve) => {
      setTimeout(() => {
        /* Resolve with a truthy value that we will use */
        resolve(true);
      }, FAKE_LOADING_TIME);
    }).then((data) => {
      if (data) {
        /* Stop showing the loader since we have the data. */
        this.showLoader = false;
      } else {
        /* Handle things in another way. */
      }
    });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
