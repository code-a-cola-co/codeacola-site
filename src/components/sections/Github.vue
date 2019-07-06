<style lang="scss">
  .codeacola-github {
    padding: 40px 0;
    text-align: center;
    margin-bottom: -30px;

    &__card {
      display: block;
      width: 100%;
      background: linear-gradient(to right, $color-secondary 0%, $color-primary 100%);
      color: $color-lightest-gray;
      margin: 0 0 30px;

      &--external {
        background: linear-gradient(to right, $color-darker-gray 0%, $color-darkest-gray 100%);
      }

      &__header {
        padding: 15px 30px;

        &__name {
          display: block;
          text-align: left;
          @include font-size-map($h4-font-size, 0.5);
        }

        &__publisher {
          display: block;
          text-align: left;
        }
      }

      &__body {
        padding: 0 30px;

        &__description {
          display: block;
          text-align: left;
        }

        &__url {
          display: block;
          text-align: center;
          padding: 30px 0;

          a {
            display: inline-block;
            border: 2px solid $color-lightest-gray;
            padding: 12px;
            font-weight: 700 !important;
            transition: all 0.25s ease-in-out;

            &:link,
            &:visited,
            &:active,
            &:hover {
              color: $color-lightest-gray;
              text-decoration: none;
            }

            &:hover {
              background-color: $color-lightest-gray;
              color: $color-primary;
            }
          }
        }
      }

      &__footer {
        background-color: $color-darker-gray;
        padding: 30px 15px 35px;

        &__clone {
          font-size: 0.75em;
        }
      }
    }
  }
</style>

<template>
  <section class="section codeacola-github">
    <div class="container">
      <div class="row">

        <div class="col-12">
          <div class="row">

            <div
              v-for="repo in repos"
              class="col-12 col-sm-6 col-md-4">

                <div :class="getCardClass(repo.external)">
                  <div class="codeacola-github__card__header">

                    <span class="codeacola-github__card__header__name">
                      {{ repo.name }}
                    </span>

                    <span class="codeacola-github__card__header__publisher">
                      {{ repo.publisher }}
                    </span>

                  </div>
                  <div class="codeacola-github__card__body">

                    <span class="codeacola-github__card__body__description">
                      {{ repo.description }}
                    </span>

                    <span class="codeacola-github__card__body__url">
                      <a :href="repo.url" :title="repo.url">view repository</a>
                    </span>

                  </div>
                  <div class="codeacola-github__card__footer">

                    <span class="codeacola-github__card__footer__clone">
                      {{ repo.clone }}
                    </span>

                  </div>
                </div>

            </div>

          </div>
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
  import repos from '@/lib/constents/repos';

  export default {
    name: 'Github',
    data() {
      return {
        repos
      };
    },
    methods: {
      getCardClass(external) {
        return external
          ? 'codeacola-github__card codeacola-github__card--external'
          : 'codeacola-github__card';
      }
    },
  }
</script>
