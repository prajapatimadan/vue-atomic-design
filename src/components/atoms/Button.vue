<template>
    <button
      @:click="action"
      v-bind:class="styleClass"
    >{{ title }}</button>
  </template>
  
  <script>
  export default {
    name: "Button",
    props: ["action","title","styleClass"]
  };
  </script>