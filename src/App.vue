<template>
  <div id="app">
    <div class="wrapper">
      <Navigation  v-if="currentUser"></Navigation>
      <router-view/>
			</div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Navigation from './views/Navigation.vue'
    export default {
        components: {Navigation},
        computed:{
          ...mapState(['currentUser'])
        }
    }
</script>