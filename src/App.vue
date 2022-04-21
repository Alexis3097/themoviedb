<template>
  <AppBar />
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9 col-lg-9 col-xs-9 bg-color-back " >
        <main class="all-height">
          <router-view />
        </main>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-3 sidebar-height bg-color-back">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sidebar-height {
  height: 100vh;
}
</style>
<script>
import AppBar from "./components/AppBar.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    AppBar,
    Sidebar,
  },
  data() {
    return {
      movies:[],
    };
  },
  methods: {
    async getPopularMovies() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=ecaa4965ffbe006e64de9e316960fd4b&language=en-ES&page=1"
        );
        const array = await response.json();

        this.movies = array.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.sidebar-height{
  overflow-y: scroll
}
.bg-color-back{
  background-color: black;
}
</style>
