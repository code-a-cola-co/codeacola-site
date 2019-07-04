<style lang="scss">
  .codeacola-copyright {
    padding: 40px 0;
    text-align: left;
    background-color: $color-primary;
    color: $color-lightest-gray;

    &__logo {
      display: block;
      margin: 0 auto;
    }
  }
</style>

<template>
  <section class="section codeacola-copyright">
    <div class="container">
      <div class="row">

        <div class="col-12">

          <div class="codeacola-copyright__teaser">&copy;{{ year }} {{ $static.metaData.siteName }}. Some rights reserved.</div>

        </div>

      </div>
    </div>
  </section>
</template>

<static-query>
  query {
    metaData {
      siteName,
    },
  }
</static-query>

<script>
  import Logo from '@/components/sections/Logo.vue';

  export default {
    name: 'Copyright',
    data() {
      return {
        year: (new Date()).getFullYear(),
      };
    },
  }
</script>
