<template>
  <div class="row">
    <div class="col-md-12">
      <MovieDetails :details="details"/>
      <div class="card mt-4">
        <div class="card-header">Comments</div>
        <div class="card-body">
          <MovieComments v-for="comment in comments" :key="comment.id" :comment="comment"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieDetails from "../../components/pages/MovieDetails";
import MovieComments from "../../components/pages/MovieComments";

export default {
  components: {
    MovieDetails,
    MovieComments
  },

  async asyncData({$axios, params}) {
    const details = await $axios.get(`/movies/${params.id}`);
    const comments = await $axios.get(`/movies/${params.id}/comments`);

    return {
      details: details.data,
      comments: comments.data.data
    }
  },
}
</script>

<style scoped>

</style>
