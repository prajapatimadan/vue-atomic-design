<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
     <div id="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/activities">Activities</RouterLink>
     </div>
</template>

<style scoped>
#nav {
  font-size: 12px;
  text-align: center;
}

 #nav a.router-link-exact-active {
  color: var(--color-text);
}

 #nav a.router-link-exact-active:hover {
  background-color: transparent;
}

 #nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: #FFF;
}

 #nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  #nav {
    text-align: center;
  }
}

</style>