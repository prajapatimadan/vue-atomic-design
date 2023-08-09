<template>
    <a :href="link.url" v-bind:alt="link.alt" class="link">{{ link.name }}</a>
  </template>
  
  <script>
  export default {
    name: "Link",
    props: ["link"]
  };
  </script>
  <style>
.link
{
  text-decoration: none;
  color: #FFF;
  transition: 0.4s;
}

@media (hover: hover) {
  .link:hover {
    background-color: lightslategrey;
  }
}
</style>