<style lang="scss">
  .codeacola {
    display: block;
    position: relative;
    width: 100%;
  }
</style>

<template>
  <div class="codeacola">

    <header class="codeacola__header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
    </header>

    <slot/>

  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
