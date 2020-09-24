<template>
  <div class="row">
    <div class="col-md-3">
      <div class="card">
        <div class="card-header"><i class="fa fa-search"></i> Search movies</div>
        <div class="card-body">
          <form action="">
            <div class="form-group"><label for="software">Category</label> <select name="category_id" id="category_id"
                                                                                   class="form-control form-control-sm">
              <option value="">All</option>
              <option value="1"> Фильм</option>
              <option value="2"> Мультфильм</option>
              <option value="3"> Сериал</option>
            </select></div>
            <div class="form-group"><label for="actor_id">Actors</label> <select multiple="multiple" name="actor_id[]"
                                                                                 id="actor_id"
                                                                                 class="form-control form-control-sm">
              <option value="">All</option>
              <option value="1"> Анджелина Джоли</option>
              <option value="2"> Вин Дизель</option>
              <option value="3"> Том Хенкс</option>
              <option value="4"> Джим Керри</option>
              <option value="5"> Брюс Уиллис</option>
            </select></div>
            <div class="form-group"><label for="genre_id">Genres</label> <select multiple="multiple" name="genre_id[]"
                                                                                 id="genre_id"
                                                                                 class="form-control form-control-sm">
              <option value="">All</option>
              <option value="1"> Триллер</option>
              <option value="2"> Комедия</option>
              <option value="3"> Ужастик</option>
            </select></div>
            <div class="form-group"><label for="genre_id">Sotring</label> <select multiple="multiple" name="sort_rate"
                                                                                  id="genre_id"
                                                                                  class="form-control form-control-sm">
              <option value="" selected="selected">Latest</option>
              <option value="1">By Rating</option>
            </select></div>
            <div class="form-group">
              <div class="btn-group btn-block">
                <button type="submit" href="#" class="btn btn-primary"><i class="fa fa-search"></i> Search
                </button>
                <a href="/movies" class="btn btn-danger"><i class="fa fa-refresh"></i> Reset
                </a></div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-9">
      <div class="row">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
      </div>
      <div class="row">
        <div class="col-md-12">
          <nav>
            <ul class="pagination">
              <li aria-disabled="true" aria-label="« Previous" class="page-item disabled"><span aria-hidden="true"
                                                                                                class="page-link">‹</span>
              </li>
              <li aria-current="page" class="page-item active"><span class="page-link">1</span></li>
              <li class="page-item"><a href="http://kinoha.itis.today/movies?page=2" class="page-link">2</a></li>
              <li class="page-item"><a href="http://kinoha.itis.today/movies?page=3" class="page-link">3</a></li>
              <li class="page-item"><a href="http://kinoha.itis.today/movies?page=4" class="page-link">4</a></li>
              <li class="page-item"><a href="http://kinoha.itis.today/movies?page=5" class="page-link">5</a></li>
              <li class="page-item"><a href="http://kinoha.itis.today/movies?page=2" rel="next" aria-label="Next »"
                                       class="page-link">›</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "../../components/pages/MovieCard";

export default {
  components: {
    MovieCard
  },

  async asyncData({$axios}) {
    const response = await $axios.get('http://kinoha.itis.today/api/movies');

    return {
      movies: response.data.data
    }
  }
}
</script>

<style scoped>

</style>
