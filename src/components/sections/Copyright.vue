<style lang="scss">
  .codeacola-copyright {
    padding: 40px 0;
    background-color: $color-primary;
    color: $color-lightest-gray;

    &__teaser {
      display: inline-block;
      text-align: left;

      @include breakpoint-down('md') {
        display: block;
        text-align: center;
        margin-bottom: 6px;
      }
    }

    &__links {
      display: inline-block;
      float: right;
      text-align: right;

      @include breakpoint-down('md') {
        display: block;
        float: none;
        text-align: center;
      }

      &__twitter,
      &__github {
        display: inline-block;
        @include font-size-map($h6-font-size, 0.5);
        margin-right: 10px;

        &:link,
        &:visited,
        &:active,
        &:hover {
          color: $color-lightest-gray;
          text-decoration: none;
        }

        &:last-child {
          margin-right: 0;
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

          <span class="codeacola-copyright__links">
            <a
              href="https://twitter.com/codeacola"
              title="code-a-cola@twitter"
              target="_blank"
              class="codeacola-copyright__links__twitter">
              <i class="fa fa-twitter"></i>
            </a>
            <a
              href="https://github.com/code-a-cola"
              title="code-a-cola@github"
              target="_blank"
              class="codeacola-copyright__links__github">
              <i class="fa fa-github"></i>
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
  export default {
    name: 'Copyright',
    data() {
      return {
        year: (new Date()).getFullYear(),
      };
    },
  }
</script>
