<script setup>
import Header from '../molecules/Header.vue';
import Footer from '../molecules/Footer.vue';
</script>
<template>
    <Header />
    <div style="display: flex; justify-content: space-between;width: 100%;padding: 80px 20px;">
        <div style="width: 100%; height: calc(100vh - 150px);overflow: auto;"><slot /></div>
        <div style="width: 350px;padding-left: 20px;height: calc(100vh - 150px);">
            <v-card style="height: 100%;padding: 10px">
                latest Activity
            </v-card>
            
        </div>
        
    </div>
    <Footer/>

</template>