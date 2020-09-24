<template>
  <div class="container">
    <Navbar/>
    <main class="py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nuxt/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Navbar from "../components/layout/Navbar";

  export default {
    name: "bootstrap",

    components: {
      Navbar
    }
  }
</script>

<style scoped>

</style>
