<template>
  <nav class="navbar navbar-inverse">
    <div class="container">
      <a class="navbar-brand" href="/"> {{$store.state.appTitle}}</a>
      <ul class="nav navbar-nav navbar-right">
        <li><router-link :to="{ name: 'home'}" class="nav-item nav-link"> Home </router-link></li>
        <li><router-link :to="{ name: 'movies', params: { pageNumber: 1 }}" class="nav-item nav-link"> Movies </router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
  }
</script>
