<template>
  <section id="twoup" class="clearfix">
    <section id="leftup" class="ideas">
      <h1><a href="/dashboard">Ideas</a>
      </h1>
      <a id="new_entry" href="/write">New entry</a>
    <figure id="ideas_hero">
      <img src="https://d1yg14i6wd46hx.cloudfront.net/assets/icons/home_head-dbab5dfc62ae55c8cc9473101fa0c40edac45e0b067902b65cadd82acf5dc617.png" class="ideas_hero" alt="Brain" />
    </figure>
          <div class="describer">
            <p>Create and work on ideas, links, and thoughts for posts here.</p>
            </p>
          </div>
      <div id="quickform_container">
        <form id="quickform" class="keyable" action="/posts" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="K4B/oXImOJN84qASHU5nP6aDCq8DTaGvVt8RFL3EoAm0zGGshWTEDf+u1V8y1u6lQr7F60997jhd9hInK412dw==" />
          <input id="quick_idea" type="text" value="true" name="quick_idea" style="display: none;" />
          <label for="post_title">New idea</label>
          <div class="pulseline input"></div>
          <textarea placeholder="Start typing an idea title here..." class="pane_input autosize title" rows="1" name="post[title]" id="post_title">
  </textarea>
  </form>    </div>
      <ul class="listing ideas">
        <li class="idea">
          <a href="/dfsdf-1/edit">
            <span class="title">dfsdf</span>
          </a>
        </li>
        <li class="idea">
          <a href="/dfsdf/edit">
            <span class="title">dfsdf</span>
          </a>
        </li>
        <li class="idea">
          <a href="/new-idea/edit">
            <span class="title">New Idea</span>
          <span class="wordcount">
            <span class="wordcount_mark">|</span>
            <span class="wordcount_words">3&nbsp;Words</span>
          </span>
          </a>
        </li>
      </ul>

    </section>
    <section id="rightup" class="published">


      <h2><a href="/dashboard">Published</a>
      </h2>
      <ul class="listing published">
        <li class="published" v-for="post in posts">
          <a :href="post.link">
            <span class="kudo">1</span>
            <span class="title">{{ post.title.rendered }}</span>
          <span class="wordcount">
            <span class="wordcount_mark">||||</span>
            <span class="wordcount_words">507&nbsp;Words</span>
          </span>
          </a>
        </li>
      </ul>

    </section>
  </section>
</template>

<script>
import wp from '../api.js'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  asyncComputed: {
    posts: function () {
      return wp.posts().param('status', 'publish').then(response => response)
    },
    drafts: function () {
      return wp.posts().param('status', '').then(response => response)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form#quickform ::-webkit-input-placeholder {
  color: #38BEA0;
}
form#quickform textarea:-moz-placeholder,
form#quickform :-moz-placeholder { /* Firefox 18- */
  color: #777;
}
form#quickform textarea::-moz-placeholder,
form#quickform ::-moz-placeholder {  /* Firefox 19+ */
  color: #777;
}
form#quickform :-ms-input-placeholder {
  color: #38BEA0;
}
form#quickform label {
  color: #38BEA0;
}
form#quickform.active label {
  color: #70d725;
}
li:hover a span.wordcount:hover {
  color: #38BEA0;
}
section#leftup ul.ideas li:hover a {
  background-color: #38BEA0;
}
div.describer_published {
  background-color: #38BEA0;
}
#new_entry:hover {
  background-color: #38BEA0;
  border-color: #38BEA0;
}
@keyframes xPulse
  {
  0% {
    border-color: #fff;
  }
  50% {
    border-color: #38BEA0;
  }
  100% {
    border-color: #fff;
  }
}
@-moz-keyframes xPulse
  {
  0% {
    border-color: #fff;
  }
  50% {
    border-color: #38BEA0;
  }
  100% {
    border-color: #fff;
  }
}
@-webkit-keyframes xPulse
  {
  0% {
    border-color: #fff;
  }
  25% {
    border-color: #38BEA0;
  }
  100% {
    border-color: #fff;
  }
}
form div.input_box.active {
  border-color: #38BEA0;
}
</style>
