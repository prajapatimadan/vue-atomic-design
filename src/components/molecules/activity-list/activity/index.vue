<template>
    <div style="display: flex;justify-content: stretch;width: 100%;align-items: center;border: 1px solid gray;">
        <div style="padding: 10px;">
            <input type="checkbox" style="color:gray" v-model="activity.done"/>
        </div>
        <div style="display: flex;justify-content: space-between;width: 100%;">
            <div v-html="activity.title" v-bind:class="[activity.done ? 'done' : '']"></div>
            <div style="width: 25px;"> <v-icon color="gray" @click="dialog = true" class="fas fa-trash fa-fw" style="font-size: 14px;"></v-icon>
        </div>
        </div>
    </div>
    <v-dialog v-model="dialog" max-width="240">
        <v-card>
            <v-card-title>Please Confirm</v-card-title>
            <v-card-text>Do you want to remove?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="gray" flat="flat" @click="dialog = false">
                    Cancel
                </v-btn>

                <v-btn color="gray" flat="flat" @click="remove(activity); dialog = false">
                    OK
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    name: 'Activity',
    props: ['activity'],
    data() {
        return {
            dialog: false,
        };
    },
    computed: {
        title() {
            return this.activity.title;
        },
    },
    methods: {
        ...mapActions('activity', [
            'toggle',
            'remove',
        ]),
    },
};
</script>
  
<style >
.done {
    text-decoration: line-through;
}
</style>