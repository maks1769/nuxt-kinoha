<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">
        Kinoha
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left Side Of Navbar -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a href="/movies" class="nav-link">Movies</a>
          </li>
          <li class="nav-item dropdown">
            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false" v-pre>
              Actors <span class="caret"></span>
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <nuxt-link v-for="actor in actors" :key="actor.id"
              :to="`movies/?actor_id[]=${actor.id}`" class="dropdown-item"
              >{{ actor.name }}</nuxt-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false" v-pre>
              Genres <span class="caret"></span>
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <nuxt-link v-for="genre in genres" :key="genre.id"
                         :to="`movies/?genre_id[]=${genre.id}`" class="dropdown-item"
              >{{ genre.name }}</nuxt-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false" v-pre>
              Categories <span class="caret"></span>
            </a>

            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <nuxt-link v-for="category in categories" :key="category.id"
                         :to="`movies/?actegory_id[]=${category.id}`" class="dropdown-item"
              >{{ category.name }}</nuxt-link>
            </div>
          </li>
        </ul>

        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto">
          <!-- Authentication Links -->
          <li class="nav-item">
            <a class="nav-link" href="http://kinoha.itis.today/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://kinoha.itis.today/register">Register</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    actors: [],
    genres: [],
    categories: [],
  }),

  async created() {
    const actors = await this.$axios.get('/actors');
    const genres = await this.$axios.get('/genres');
    const categories = await this.$axios.get('/categories');

    this.actors = actors.data;
    this.genres = genres.data;
    this.categories = categories.data;
  }
}
</script>

<style scoped>

</style>
