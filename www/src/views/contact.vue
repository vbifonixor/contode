<template>
  <div class="contact-view view">
    <img class="contact-picture" :src='contact.face'>
    <h1 class="contact-name">{{ contact.firstName }} {{ contact.lastName }}</h1>
    <p class="contact-job">{{ contact.title }} в <span class="contact-job--place">{{ contact.company }}</span></p>
    <p class="contact-entry contact-entry__phone">
      <i class="fa fa-fw fa-phone"></i>
      <a>{{ contact.phone }}</a>
    </p>
    <p class="contact-entry contact-entry__email"><i class="fa fa-fw fa-envelope"></i> <a>{{ contact.email }}</a></p>
    <a class="button button--primary button--bottomed" @click="createContact">
      <i class="fa fa-user"></i> Добавить в контакты
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'contact',
  computed: {
    ...mapGetters({
      contact: 'getCurrentContact'
    })
  },
  methods: {
    createContact() {
      let newContact = navigator.contacts.create();
      newContact.displayName = this.contact.firstName + ' ' + this.contact.lastName;
      newContact.nickname = newContact.displayName;

      let name = new ContactName();
      name.givenName = this.contact.firstName;
      name.familyName = this.contact.lastName;
      newContact.name = name;

      newContact.phoneNumbers = [new ContactField('mobile', this.contact.phone, true)];
      newContact.emails = [new ContactField('work', this.contact.email, true)];

      newContact.photos = [new ContactField('url', this.contact.face)];

      let vm = this;

      newContact.save(function() {
        alert('Контакт сохранён успешно!');
        vm.$router.push('/');
      });
    }
  }
}
</script>

<style>

  .contact-name {
    font-size: 26px;
    font-family: 'Lato';
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 0;
  }

  .contact-job {
    font-family: 'Source Sans Pro';
    font-size: 18px;
    font-weight: 300;
    margin-top: 10px;
  }

  .contact-job--place {
    font-weight: 700;
  }

  .contact-entry {
    font-size: 20px;
    font-family: 'Source Sans Pro';
    font-weight: 300;
    margin-top: 20px;
    margin-bottom: 0;
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
  }

  .contact-entry a {
    margin: 0 auto;
  }

  .button--bottomed {
    margin-top: 50px;
  }

  .demargined {
    margin: 5px;
  }

</style>
