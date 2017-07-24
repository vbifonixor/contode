<template>
  <div class="main-view view">
    <div class="logo">Contode</div>
    <router-link to="/scan" class="button button--primary">Добавить контакт</router-link>
    <router-link to="/my" class="button button--secondary">Моя визитка</router-link>
  </div>
</template>
<script>
import localStore from 'store';
import store from '../store';
export default {
  name: 'main',
  mounted() {
    // Getting info from LocalStorage if presented
    let myVcard = localStore.get('myVcard');
    if(myVcard && (myVcard.firstName || myVcard.lastName || myVcard.phone || myVcard.email)) {
        store.dispatch('floodMyVcard', myVcard);
        console.log('flooded');
        console.log(store);
    }
  }
}
</script>

<style>

  .main-view {
  }

  .logo {
    color: #78BEFF;
    font-size: 48px;
    font-family: 'Lato';
    font-weight: 700;
    text-align: center;
    margin-bottom: 60px;
  }

</style>
