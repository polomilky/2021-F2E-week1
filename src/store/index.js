import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全台灣/有縣市
    isSearchTaiwan: null,
    // 縣市名稱
    searchCountry: null,
  },
  mutations: {
    setIsSearchTaiwanData(state, isSearchTaiwanData) {
      state.isSearchTaiwan = isSearchTaiwanData;
    },
    setSearchCountryData(state, searchCountryData) {
      state.searchCountry = searchCountryData;
    },
  },
  actions: {
  },
  modules: {
  }
})
