<template>
  <div class="home">
    <router-link to="alcool">Alcool</router-link> |
    <router-link to="sucuri">Sucuri</router-link> |
    <router-link to="fructe">Fructe/Decoruri</router-link>


    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {
    }
  }
</script>
