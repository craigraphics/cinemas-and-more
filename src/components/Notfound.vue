<template>
  <section class="not-found-wrapper">
    <div class="aligner-flex">
      <div class="not-found">
        <h1>Not found :(</h1>
        <img src="../assets/404.jpg" class="img-fluid d-block" alt="404 image" />
        <router-link
          :to="{ name: 'home'}"
          class="btn lg btn-success">
          <span v-translate>Take me home!</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" >
  .not-found-wrapper {
    display: flex;
    align-items: center;
    min-height: 80vh;
    justify-content: center;
  }

  .aligner-flex {
      flex: none;
      max-width: 50%;
  }

  .not-found {
    width: 100%;
    padding: .8em 1em 0;
    border-radius: 3px;
    text-align: center;
  }
</style>
