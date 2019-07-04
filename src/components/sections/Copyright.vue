<style lang="scss">
  .codeacola-copyright {
    padding: 40px 0;
    text-align: left;
    background-color: $color-primary;
    color: $color-lightest-gray;

    &_github {
      display: inline-block;
    }

    &__github {
      display: inline-block;
      float: right;
       a {
         &:link,
         &:visited,
         &:active,
         &:hover {
           color: $color-lightest-gray;
           @include font-size-map($h4-font-size, 0.5);
         }
       }
    }
  }
</style>

<template>
  <section class="section codeacola-copyright">
    <div class="container">
      <div class="row">

        <div class="col-12">

          <span class="codeacola-copyright__teaser">&copy;{{ year }} {{ $static.metaData.siteName }}. Some rights reserved.</span>

          <span class="codeacola-copyright__github">
            <a href="https://github.com/code-a-cola" title="code-a-cola@github" target="_blank">
              <i class="codeacola-copyright__github fa fa-github"></i>
            </a>
          </span>

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
