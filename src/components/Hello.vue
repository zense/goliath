<template>
  <div class="hello">
    <div v-for="post in posts">
      <h1>{{ post.title }}</h1>
    </div>
  </div>
</template>

<script>
import WPAPI from 'wpapi'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  asyncComputed: {
    posts: function () {
      var wp = new WPAPI({ endpoint: 'http://localhost/wordpress/index.php/wp-json/' })
      return wp.posts().then(response => response)
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
