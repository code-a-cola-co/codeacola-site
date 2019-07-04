<style lang="scss">
</style>

<template>
  <Layout>

    <Logo />

    <Github />

    <Copyright />

  </Layout>
</template>

<script>
import Logo from '@/components/sections/Logo';
import Github from '@/components/sections/Github';
import Copyright from '@/components/sections/Copyright';

export default {
  name: 'Index',
  components: {
    Logo,
    Github,
    Copyright,
  },
}
</script>
