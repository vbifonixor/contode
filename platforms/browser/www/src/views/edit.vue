<template>
  <div class="edit-view view">
    <h1 class="view--heading">Редактировать мою визитку</h1>
    <img class="contact-picture" :src='myVcard.face' id="photo" @click="takeAPicture">
    <input type="text" name="" v-model="myVcard.firstName" placeholder="Имя" class="edit-view--input">
    <input type="text" name="" v-model="myVcard.lastName" placeholder="Фамилия" class="edit-view--input">
    <input type="text" name="" v-model="myVcard.phone" placeholder="Телефон (+7xxxxxxxxxx)" class="edit-view--input">
    <input type="text" name="" v-model="myVcard.email" placeholder="Email" class="edit-view--input">
    <input type="text" name="" v-model="myVcard.company" placeholder="Компания" class="edit-view--input">
    <input type="text" name="" v-model="myVcard.title" placeholder="Должность" class="edit-view--input">
    <a class="button button--primary" @click="saveToLocalStorage"><i class="fa fa-check"></i> Готово</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import localStore from 'store';

export default {
  computed: {
    ...mapGetters({
      myVcard: 'getMyVcard'
    })
  },
  mounted() {
  },
  methods: {
    saveToLocalStorage() {
      localStore.set('myVcard', this.myVcard);
      console.log(localStore.get('myVcard'));
      this.$router.push('my');
    },
    takeAPicture() {
      console.log('taking a photo OF YOU');
      navigator.camera.getPicture((image) => {
        document.querySelector('#photo').src = image;
      }, (e) => {console.error(e)},
        {
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA,
        });
    }
  }
}
</script>
<style>

  .edit-view--input {
    border: 0;
    outline: 0;
    padding: 10px 20px;
    border-bottom: 2px solid #78beff;
    margin-bottom: 15px;
    font-size: 20px;
    font-family: 'Source Sans Pro';
    font-weight: 300;
  }

</style>
