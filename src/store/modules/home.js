const state = {
  all: {
    name: 'Ryan',
    obj: {
      age: 23,
      hobby: 'basketball'
    }
  }
}

const getters = {
  home: state => state.all
}

const actions = {

}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}