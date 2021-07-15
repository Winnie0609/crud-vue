<template>
  <div>
    <form>
      <v-text-field
        v-model="title"
        label="Title"
        required
      />
      <v-text-field
        v-model="body"
        label="Message"
        required
      />

      <v-btn
        class="mr-4"
        @click="createPost"
      >
        submit
      </v-btn>
    </form>

    <v-card
      v-for="post in posts"
      :key="post.title"
      class="mx-auto"
      max-width="400"
    >
      <v-card-title>Comment</v-card-title>

      <v-card-text v-if="post.show" class="text--primary">
        <div>{{ post.title }}</div>
        <div>{{ post.body }}</div>
      </v-card-text>

      <v-card-text v-if="!post.show" class="text--primary">
        <v-text-field
          v-model="post.title"
          label="Title"
          required
        />

        <v-text-field
          v-model="post.body"
          label="Message"
          required
        />

        <v-btn
          color="orange"
          text
          @click="updatePost(post)"
        >
          Submit
        </v-btn>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="orange"
          text
          @click="editPost(post)"
        >
          Edit
        </v-btn>

        <v-btn
          color="orange"
          text
          @click="deletePost(post)"
        >
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        { title: 'Luke', body: 'helllooooo', userId: 126 },
        { title: 'Leia', body: 'fsgdafsa', userId: 345 },
        { title: 'Rey', body: 'dfsdf', userId: 123 }
      ],
      title: '',
      body: '',
      show: true
    }
  },

  async mounted () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    data.forEach((item) => { item.show = true })
    // console.log(data)
    this.posts = data
  },

  methods: {
    createPost () {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: this.title,
          body: this.body,
          userId: 1
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        .then((post) => {
          // console.log(post)
          this.posts.unshift(post)
          post.show = true
          post.id = Math.floor(Math.random() * 10000)
          // console.log(post)
        })

      this.title = ''
      this.body = ''
    },

    updatePost (post) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: post.id,
          title: post.title,
          body: post.body,
          userId: 1
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => response.json())
        // .then(json => console.log(json))

      post.show = true
    },

    deletePost (post) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'DELETE'
      })

      const removeItem = this.posts.findIndex(item => item.id === post.id)
      this.posts.splice(removeItem, 1)
      // console.log(removeItem)
    },

    editPost (post) {
      this.$set(post, 'show', !post.show)
    }
  }
}
</script>
