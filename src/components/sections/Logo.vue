<style lang="scss">
  .codeacola-logo {
    padding: 40px 0;
    text-align: center;
    background-color: $color-primary;

    &__logo {
      display: block;
      margin: 0 auto;
    }

    &__teaser {
      font-family: $font-another-hand;
    }
  }
</style>

<template>
  <section class="section codeacola-logo">
    <div class="container">
      <div class="row">

        <div class="col-12">

          <g-image alt="code@cola logo" class="codeacola-logo__logo" src="@/assets/images/logo.png" width="340" />

          <div class="codeacola-logo__teaser">{{ $static.metaData.siteDescription.toLowerCase() }}</div>

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
  import Logo from '@/components/sections/Logo.vue';

  export default {
    name: 'Logo',
  }
</script>
