<template>
  <div>
    <div v-if="loading" class="loading-bars">
      <div class="dark"></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="component" v-else>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style>
html {
  min-height: 180px;
}
@-webkit-keyframes appShellBackground {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes appShellBackground {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes appShellBackground {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.loading-bars > div {
  border-radius: 4px;
  background: #f2f2f2;
  background: linear-gradient(
    to right,
    #f2f2f2 0%,
    #f2f2f2 36%,
    darken(#f2f2f2, 20%) 51%,
    #f2f2f2 64%,
    #f2f2f2 100%
  );
  background-size: 600% 600%;
  animation: appShellBackground 5s ease-in infinite;
  height: 40px;
  margin-bottom: 40px;
  opacity: 0.5;
}
.loading-bars > .dark {
  opacity: 1;
}
.loading-bars {
  padding: 40px 50px 50px;
}
@media screen and (max-width: 480px) {
  .loading-bars {
    padding: 1.5em;
  }
}
</style>
