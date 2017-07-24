<template>
  <div class="my-view view">
    <h1 class="view--heading">Моя визитка</h1>
    <div class="my-view--qr-code" id="qr"></div>
    <router-link class="button button--primary" to="edit"><i class="fa fa-pencil"></i> Редактировать</router-link>
    <router-link class="button button--secondary" to="/"><i class="fa fa-angle-double-left"></i> Вернуться</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import QRCode from 'qrcodejs';

export default {
  computed: {
    ...mapGetters({
      json: 'getMyVcardJSON'
    })
  },
  mounted() {
    let qr = new QRCode(document.querySelector('#qr'), this.json,
    {
      width: 200,
      height: 200,
    });
  }
}
</script>

<style>

  .my-view--qr-code {
    width: 80vw;
    height: 80vw;
    margin: 40px 0;
    text-align: center;
  }

  .my-view--qr-code img {
    margin: 0 auto;
  }

</style>
