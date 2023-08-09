<script>
// import HelloWorld from '../HelloWorld.vue';
import Nav from '../organisms/nav/index.vue';
export default {
  components: {
    'v-nav': Nav,
  },
};
</script>
<template>
    <header>
        <div><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" /></div>
        <div class="wrapper">
            <!-- <HelloWorld msg="You did it!" /> -->
           <v-nav/>
        </div>

    </header>
</template>
<style scoped>
header {
    height: 60px;
    display: flex;
    background-color: rgba(146, 44, 201);
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 10;
}

.logo {
    display: block;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
    }

    header .wrapper {
        display: flex;
    }

    nav {
        text-align: center;
        font-size: 1rem;
    }
}
</style>