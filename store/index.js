export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts (state, data) {
    state.posts = data
  },

  pushPost (state, post) {
    state.posts.unshift(post)
  },

  setPost (state, { id, title, body }) {
    const postIndex = state.posts.findIndex(item => item.id === id)

    this._vm.$set(state.posts, postIndex, {
      title,
      body,
      id,
      show: true
    })
  },

  removePost (state, id) {
    const removeItem = state.posts.findIndex(item => item.id === id)
    state.posts.splice(removeItem, 1)
  },

  setShow (state, { id, show }) {
    const postIndex = state.posts.findIndex(item => item.id === id)
    state.posts[postIndex].show = show
  }
}

export const actions = {

  async initPost ({ commit }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    data.forEach((item) => { item.show = true })

    commit('setPosts', data)
  },

  async createPost ({ commit }, { title, body }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    const post = await res.json()
    post.show = true
    post.id = Math.floor(Math.random() * 10000)
    // console.log(post)
    commit('pushPost', post)
  },

  async updatePost ({ commit }, { post, editedTitle, editedBody }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: post.title,
        body: post.body,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    await res.json()
    commit('setPost', {
      id: post.id,
      title: editedTitle,
      body: editedBody
    })
    commit('setShow', {
      id: post.id,
      show: true
    })
  },

  editBtn ({ commit, state }, post) {
    state.posts.forEach((item) => {
      if (item.id !== post.id) {
        commit('setShow', {
          id: item.id,
          show: true
        })
      }
    })

    commit('setShow', {
      id: post.id,
      show: !post.show
    })
  },

  cancelBtn ({ commit, state }, post) {
    const postIndex = state.posts.findIndex(item => item.id === post.id)

    state.posts.forEach((item) => {
      if (item.id === postIndex) {
        commit('setShow', {
          id: item.id,
          show: true
        })
      }
    })

    commit('setShow', {
      id: post.id,
      show: true
    })
  },

  deletePost ({ commit }, post) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'DELETE'
    })

    commit('removePost', post.id)
  }
}
