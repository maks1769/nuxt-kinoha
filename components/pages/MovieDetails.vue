<template>
  <div class="card">
    <div class="card-header text-uppercase">{{ details.name }}</div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-4"><img
          :src="details.logo"
          alt="" class="img-fluid card-img-top"></div>
        <div class="col-md-8">
          <table class="table table-listing table-hover table-align-middle">
            <tbody>
            <tr>
              <td style="width: 200px;"><i class="fa fa-gamepad"></i> Category</td>
              <td><a href="/movies?category_id=3">{{ details.category.name }}</a></td>
            </tr>
            <tr>
              <td><i class="fa fa-user"></i> Actors</td>
              <td><a href="/movies?actor_id[]=3">{{ details.actors[0].name }}</a>
                /
                <a href="/movies?actor_id[]=2">{{ details.actors[1].name }}</a></td>
            </tr>
            <tr>
              <td><i class="fa fa-camera"></i> Genres</td>
              <td><a href="/movies?genre_id[]=3">{{ details.genres[0].name }}</a></td>
            </tr>
            <tr>
              <td><i class="fa fa-calendar"></i> Released at</td>
              <td>{{ details.released_at }}</td>
            </tr>
            <tr>
              <td><i class="fa fa-star"></i> Rating</td>
              <td>
                <div>Total Rate</div>
                <div>{{ details.total_rate }}</div>
                <hr>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10">
          <ul class="timeline">
            <li>
              {{ details.description }}
            </li>
          </ul>
        </div>
      </div>
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['details']
}
</script>

<style scoped>

</style>
