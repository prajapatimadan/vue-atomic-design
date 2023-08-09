<script setup>
import {RouterView} from 'vue-router';
</script>
<template>
    <div id="app">
        <component :is="template">
            <RouterView/>
        </component>
    </div>
</template>
  
<script>
export default {
    computed: {
        template() {
            return `${this.$route.meta.template || 'DefaultTemplate'}-template`;
        },
    },
};
</script>
  