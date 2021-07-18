<template>
  <div>
    <form class="comment-form">
      <h1 class="title">
        Give us some advice to improve!
      </h1>
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
    <div class="cards">
      <v-card
        v-for="post in $store.state.posts"
        :key="post.id"
        class="mx-auto card"
        max-width="400"
      >
        <v-card-title>{{ post.id }}</v-card-title>
        <v-card-text v-if="post.show" class="text--primary">
          <div class="post-title">
            {{ post.title }}
          </div>
          <div class="post-message">
            {{ post.body }}
          </div>
        </v-card-text>

        <v-card-text v-if="!post.show" class="text--primary">
          <v-text-field
            v-model="editedTitle"
            label="Title"
            required
          />

          <v-text-field
            v-model="editedBody"
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

          <v-btn
            color="orange"
            text
            @click="cancelBtn(post)"
          >
            Cancel
          </v-btn>
        </v-card-text>

        <v-card-actions v-if="post.show">
          <v-btn
            color="orange"
            text
            @click="editBtn(post)"
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
  </div>
</template>
  </div>
</template>

<script>

export default {
  css: ['~/assets/index.css'],

  data () {
    return {
      title: '',
      body: '',
      editedTitle: '',
      editedBody: ''
    }
  },

  async mounted () {
    await this.$store.dispatch('initPost')
  },

  methods: {
    async createPost () {
      await this.$store.dispatch('createPost', { title: this.title, body: this.body })
      this.title = ''
      this.body = ''
    },

    async updatePost (post, editedTitle, editedBody) {
      await this.$store.dispatch('updatePost', {
        post,
        editedTitle: this.editedTitle,
        editedBody: this.editedBody
      })
    },

    editBtn (post) {
      this.$store.dispatch('editBtn', post)
      this.editedTitle = post.title
      this.editedBody = post.body
    },

    cancelBtn (post) {
      this.$store.dispatch('cancelBtn', post)
    },

    deletePost (post) {
      this.$store.dispatch('deletePost', post)
    }

  }
}
</script>
