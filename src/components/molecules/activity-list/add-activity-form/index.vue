<template>
    <v-form>
        <v-text-field append-icon="fa fa-add" @click:append="add" color="gray"
            :error-messages="v$.newActivityTitle.$errors.map(e => e.$message)" @input="v$.newActivityTitle.$touch"
            @keydown.enter.prevent="add" :label="`Add Activity`" name="newActivityTitle" v-model="state.newActivityTitle" />
    </v-form>
</template>
  
<script>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { minLength, required } from '@vuelidate/validators';

export default {
    setup() {
        const state = reactive({
            newActivityTitle: '',
        })
        const v$ = useVuelidate({
            newActivityTitle: { minLength: minLength(3), required },
        }, state)
        return { state, v$ }
    }, methods: {
        add() {
            if (!this.v$.$invalid) {
                this.$store.dispatch('activity/add', this.state.newActivityTitle.trim());
                this.state.newActivityTitle = ''
                this.v$.$reset()
            }
        }
    }
};
</script>