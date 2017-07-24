import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  parsedContact: {

  },

  myVcard: {
    face: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    title: '',
  }
};

const modules = { };
const mutations = {
  contactFromJSON(state, payload) {


    let contact = JSON.parse(payload.slice(1));
    if(!contact.firstName || !contact.lastName || !contact.phone || !contact.email) {
      alert('Ошибка. Распознанный код не является контактом.');
      return;
    }
    state.parsedContact = contact;
  },

  floodVcard (state, payload) {
    state.myVcard = {
      ...payload
    };
  }
};
const getters = {
  getCurrentContact(state) {
    let contact = state.parsedContact;
    contact.phone = (/(\+[0-9]{1})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/).exec(contact.phone);
    contact.phone = contact.phone[1] + ' (' + contact.phone[2] + ') ' + contact.phone[3] + '-' + contact.phone[4] + '-' + contact.phone[5];
    return contact;
  },

  getMyVcard(state) {
    return state.myVcard;
  },

  getMyVcardJSON(state) {
    return JSON.stringify(state.myVcard);
  }
};
const actions = {
  fetchContact(context, payload) {
    context.commit('contactFromJSON', payload);
  },

  floodMyVcard(context, payload) {
    context.commit('floodVcard', payload);
  }
};

export default new Vuex.Store({
  state,
  modules,
  mutations,
  getters,
  actions,
});
