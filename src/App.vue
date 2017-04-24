<template>
  <div id="app">
    <router-view></router-view>
    <br  />

    <!-- text area........................-->

    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'
export default
{
  name: 'app',
  data: function () {
    return {
      input: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
}
</script>

<style scoped>
div > textarea {
  display: inline-block;
  width: 500px;
  height : 700px;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}

blockquote {
  font-size: 1.25rem;
  padding-left: 20px;
  margin-left: 20px;
  border-left: 4px solid gray;
}
</style>
