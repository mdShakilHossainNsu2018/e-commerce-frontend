export const state = () => ({
  products: [
    {id:1, title: 'title 1', price: 25, description: 'details for title 1'},
    {id:2, title: 'title 2', price: 20, description: 'details for title 2'},
    {id:3, title: 'title 3', price: 286, description: 'details for title 3'},
    {id:4, title: 'title 4', price: 2433, description: 'details for title 4'},
    {id:5, title: 'title 5', price: 264, description: 'details for title 5'},
    {id:6, title: 'title 6', price: 2334, description: 'details for title 6'},

  ]
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}
