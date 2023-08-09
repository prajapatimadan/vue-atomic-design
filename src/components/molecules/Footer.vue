<script>
import Nav from '../organisms/nav/index.vue';
import Text from '../atoms/Text.vue';
export default {
  components: {
    'v-nav': Nav,
    'v-text': Text
  },
};
</script>
<template>
    <footer>
        <div class="wrapper">
            <v-text msg="This is copywrite of samaple2" styleClass="copyRight"/>
            <v-nav/>
        </div>
    </footer>
</template>
<style scoped>
footer {
  max-height: 60px;
  background-color: gray;
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 5px 20px;
  text-align: center;
}
.copyRight{
    color: #fff;
}

@media (min-width: 1024px) {
  footer {
    place-items: center;
  }
}
</style>