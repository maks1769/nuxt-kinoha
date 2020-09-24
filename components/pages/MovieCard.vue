<template>
  <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
    <div class="bg-white rounded shadow-sm"><nuxt-link :to="`/movies/${movie.slug}`"><img
      :src="movie.logo"
      alt="" class="img-fluid card-img-top" style="max-height: 170px;"></nuxt-link>
      <div class="p-4"><h5><nuxt-link :to="`/movies/${movie.slug}`" class="text-dark"> {{ movie.name }}</nuxt-link></h5>
        <div class="badge badge-success px-2 rounded-pill font-weight-normal"><i class="fa fa-gamepad"></i>
          {{ movie.category.name }}
        </div>
        <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
          <p class="small mb-0"><i class="fa fa-calendar"></i> <span class="font-weight-bold">{{ movie.released_at }}</span>
          </p>
          <div class="badge badge-success px-2 rounded-pill font-weight-normal"><i class="fa fa-star"></i>
            {{ movie.total_rate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MovieCard",

    props: ['movie']
  }
</script>

<style scoped>

</style>
