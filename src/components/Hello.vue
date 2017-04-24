<template>
  <div class="hello">
<!--getting all the post .............-->

  <div id="container">
    <button v-on:click="POST">POST</button>
  </div>

  <!--visiting url part............................-->

  <p>
    Visit: <a v-bind:href="url">{{cleanUrl}}</a>
  </p>
  <input type="text" class="form-control" v-model="url" />
  <button @click="humanizeUrl" class="btn btn-primary">Reference Site</button>

  </div>
</template>

<script>

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
</style>
