<template>
      <v-card class="activityCard">
        <v-toolbar color="gyay">
          <v-toolbar-title>Todo List</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-add-activity-form ref="addActivityForm" />
          <v-list subheader>
            <v-activity v-for="(activity, index) in activities" :key="index" :activity="activity" />
          </v-list>
        </v-card-text>
      </v-card>
    
  </template>
  
  <script>
  import Activity from './activity/index.vue';
  import AddActivityForm from './add-activity-form/index.vue';
  
  export default {
    name: 'ActivitiesList',
    components: {
      'v-activity': Activity,
      'v-add-activity-form': AddActivityForm,
    },
    data() {
      return {
      };
    },
    computed: {
      activities() {
        return this.$store.state.activity.activities;
      },
    },
    methods: {
      add() {
        this.$refs.addActivityForm.add();
      },
    },
  };
  </script>
<style>
.activityCard{
    width: 100%;
    
}
</style>