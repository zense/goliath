<template>
  <div id="app">
    <figure id="loading">&nbsp;</figure>
    <nav id="overlord" class="dashboard">
      <figure id="logo_top" class="">
        <a href="/">Goliath</a>
      </figure>
      <h2 id="nav_title" class="">Dashboard</h2>
      <figure id="hamburger">
        <a href="#menu" id="hamburger_button">Menu</a>
      </figure>
      <ul id="dropdown" class="">
        <li class="dropdown_logo">
          <a href="/" class="logoize">svbtle</a>
        </li>
        <li><a href="https://svbtle.com/dashboard">dashboard</a></li>
        <li><a href="https://svbtle.com/write">new entry</a></li>
        <li><a href="http://arkokoley.svbtle.com" target="_blank">your blog</a></li>
        <li><a href="https://svbtle.com/subscribers">subscribers</a></li>
        <li><a href="https://svbtle.com/settings">settings</a></li>
        <li><a href="/help">help</a></li>
        <li><a rel="nofollow" data-method="delete" href="/logout">log out</a></li>
      </ul>
    </nav>
    <div id="whiteout"></div>
    <router-view></router-view>
    <div id="lights">&nbsp;</div>
    <Footer/>
  </div>
</template>

<script>
export default
{
  name: 'app',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
figure#logo_top a:hover {
  background-color: #38BEA0;
  background-image: url('https://a.svbtleusercontent.com/6jFISFHNx7mHWpbOWGsXx6d257PQ_medium.png');
}
figure#logo_top:hover {
  border-color: #38BEA0;
}
</style>
