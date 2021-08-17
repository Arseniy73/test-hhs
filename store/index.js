import { v4 } from 'uuid'

export const state = () => ({
  items: [
    {
      id: v4(),
      name: 'Первый элемент'
    },
    {
      id: v4(),
      name: 'Второй элемент'
    },
    {
      id: v4(),
      name: 'Третий элемент'
    }
  ]
})

export const getters = {
  items: state => state.items
}

export const mutations = {
  addItem (state, name) {
    state.items.push({
      id: v4(),
      name
    })
  },
  removeItem (state, id) {
    state.items.splice(state.items.findIndex(item => item.id === id), 1)
  }
}

export const actions = {
  addItem: ({ commit }, params) => {
    commit('addItem', params)
  },
  removeItem: ({ commit }, params) => {
    commit('removeItem', params)
  }
}
