<template>

  <div class="scan-view view">
    Сканирование...

    <router-link to="/contact">DBG</router-link>
  </div>

</template>

<script>
import store from '../store/index.js';

export default {
  name: 'scan',
  mounted() {
    let vm = this;
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        console.log(result.text);
        store.dispatch('fetchContact', result.text);
        console.log(1);
        vm.$router.push('contact');
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          "formats" : "QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
      }
   );
  },
}
</script>

<style>
  .scan-view {
    font-size: 24px;
    color: #78beFF;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Lato Black';
  }
</style>
