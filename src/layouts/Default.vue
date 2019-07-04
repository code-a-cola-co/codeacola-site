<style lang="scss">
  .codeacola {
    display: block;
    position: relative;
    width: 100%;
  }
</style>

<template>
  <div class="codeacola">

    <slot/>

  </div>
</template>

<static-query>
query {
  metaData {
    siteName,
  },
}
</static-query>
