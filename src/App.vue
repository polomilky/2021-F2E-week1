<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="sass">
  p, span, h1, button, div, input
    font-family: SF Pro Text
    font-style: normal
</style>
<style scoped lang="sass">
</style>
