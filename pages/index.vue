<template>
 <div>
   <div class="row">
     <div class="col-md-12"><h3>Top movies</h3></div>
   </div>
   <div class="row">
     <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
   </div>
 </div>
</template>

<script>
import MovieCard from '../components/pages/MovieCard'
export default {
  components: {
    MovieCard
  },

  async asyncData({$axios}) {
    const response = await $axios.get('http://kinoha.itis.today/api/topMovies');

    return {
      movies: response.data
    }
  }
}
</script>

<style>

</style>
