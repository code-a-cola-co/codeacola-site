<style lang="scss">
  .codeacola-logo {
    padding: 40px 0;
    text-align: center;
    background-color: $color-lighter-gray;
    border-bottom: 1px solid $color-light-gray;

    &__logo {
      display: block;
      margin: 0 auto 6px;
    }
  }
</style>

<template>
  <section class="section codeacola-logo">
    <div class="container">
      <div class="row">

        <div class="col-12">

          <g-image alt="code@cola logo" class="codeacola-logo__logo" src="@/assets/images/logo.png" width="340" />

          <div class="codeacola-logo__text">{{ $static.metaData.siteDescription.toLowerCase() }}</div>

        </div>

      </div>
    </div>
  </section>
</template>

<static-query>
  query {
    metaData {
      siteDescription,
    },
  }
</static-query>

<script>
  export default {
    name: 'Logo',
  }
</script>
