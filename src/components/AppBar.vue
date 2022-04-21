<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-color-back">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/movie">Películas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/tvshow">Tv Shows</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style>
.bg-color-back{
  background-color: black;
}
</style>