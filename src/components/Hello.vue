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
import WPAPI from 'wpapi'
/* eslint-disable */
export default
{
  name: 'hello',
  data: function ()
  {
  return {
      posts: [],
      url:"",
      cleanUrl:""
  }
  },
  created: function ()
  {
      this.getPosts();
  },
  computed:
  {
      getPosts: function()
      {
        var self = this;
        var wp = new WPAPI({ endpoint: 'https://demo.wp-api.org/wp-json/' })
        wp.posts().get(function( err, data )
        {
          if ( err )
          {
          }
          self.posts = data
        })
      }
  },
  methods:
  {
    POST: function()
    {
      let full_list = `<tr><th>TITLE</th><th>CATEGORIES</th></tr>`;

      for (let i = 0; i < this.posts.length-2; i++)
      {
        full_list +=`<tr><td> ${this.posts[i].title.rendered}</td><td> ${this.posts[i].categories.rendered}</td><td>${this.posts[i].content.rendered}</td></tr>`;
      }
       const contain = document.querySelector('#container');
       contain.innerHTML = `<table cellspacing = "40"> ${full_list} </table>`;
    },
    humanizeUrl: function()
    {
      this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    }
    }
}

</script>
