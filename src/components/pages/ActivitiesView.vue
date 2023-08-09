<template>
    <div class="activities">
        <v-activities-list />
    </div>
</template>
  
<script>
import ActivitiesList from '../molecules/activity-list/index.vue';

export default {
    name: 'activities',
    components: {
        'v-activities-list': ActivitiesList,
    },
};
</script>
<style>
 .activities {
    display: flex;
    align-items: center;
    
  }
</style>