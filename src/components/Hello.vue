<template>
  <div class="hello">
    <div v-for="post in posts">
      <h1>{{ post.title }}</h1>
    </div>
  </div>
</template>

<script>
import WPAPI from 'wpapi'
/* eslint-disable */
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: []
    }
  },
  created: function () {
    this.getPosts();
  },
  computed: {
    getPosts: function() {
      var self = this;
      var wp = new WPAPI({ endpoint: 'https://demo.wp-api.org/wp-json/' })
      wp.posts().param( 'before', new Date( '2016-09-22' ) ).get(function( err, data ) {
          if ( err ) {
              // handle err
          }
          self.posts = data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
