<template>
  <AppBar />
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9 col-lg-9 col-xs-9 main-page">
        <main class="all-height">
          <router-view />
        </main>
      </div>
      <div class="col-md-3 col-lg-3 col-xs-3 sidebar-height">
        <p class="text-white" style="font-weight: bolder; text-align: left">
          Popular movies
        </p>
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
.main-page {
  left: 0;
  background-color: black;
}
.sidebar-height {
  height: 100%;
  position: fixed;
  height: 100vh;
  right: 0;
}
</style>
<script>
import AppBar from "./components/AppBar.vue";
import Sidebar from "./components/Sidebar.vue";
import HomeView from "./views/HomeView.vue";
export default {
  components: {
    AppBar,
    Sidebar,
    HomeView,
  },
  data() {
    return {
      movies: [],
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
.sidebar-height {
  overflow-y: scroll;
  background-color: black;
  top: 0;
  z-index: 1;
  padding-top: 5%;
}
.sidebar-height::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(225, 32, 32);
  border-radius: 10px;
}
.bg-color-back {
  background-color: black;
}
</style>
