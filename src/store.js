import ajax from '@/ajax';

const state = {
  nav: [],
  userInfo: {
    userName: 'UserName',
    avatar: require('@/assets/images/avatar.png')
  },
  messages: {},
  suggestions: [
    { message: '搜索提示一' },
    { message: '搜索提示二' },
    { message: '搜索提示三' }
  ]
};

const getters = {};

const mutations = {
  setUserInfo(store, value) {
    store.userInfo = value;
  },
  setMessages(store, value) {
    store.messages = value;
  },
  setNav(store, value) {
    store.nav = value;
  }
};

const actions = {
  initApp({ commit }) {
    ajax('userInfo').then(({ payload }) => {
      commit('setUserInfo', payload);
    });
    ajax('initApp').then(({ payload }) => {
      commit('setMessages', payload.messages);
      commit('setNav', payload.nav);
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
