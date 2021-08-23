<template>
    <form @submit.prevent='submitNewRoute'>
        <!-- The form -->
        <label for="code"></label>
        <input type="text" id='code'>
        <label for="type"></label>
        <input type="text" id='type'>
        <label for="stop1"></label>
        <input type="text" id='stop1'>
        <label for="stop2"></label>
        <input type="text" id='stop2'>
        <label for="stop3"></label>
        <input type="text" id='stop3'>
        <label for="stop4"></label>
        <input type="text" id='stop4'>
        <label for="pay"></label>
        <input type="text" id='pay'>
        <label for="duration"></label>
        <input type="text" id='duration'>
        <label for="distance"></label>
        <input type="text" id='distance'>

        <!-- Show buttons or "loading..." -->
        <div class="buttons" v-if="!loading">
            <button :click="submitNewRoute()" type="submit">Add New Route</button>
            <button :click="$emit('closeModal')">Cancel</button>
        </div>
        <div class="loading" v-else>
            <small>loading...</small>
        </div>

    </form>
</template>

<script>
export default {
    data(){
        return{
            code, type, stops = [], pay, duration, distance,
            loading: false,
        }
    },
    emits: ['closeModal'],
    methods: {
        submitNewRoute(){
            this.loading = true;
            // attempt submission

            // if success, emit close modal
            this.loading = false;
            this.$emit('closeModal')
        },
    },
    mounted() {
        this.code = ''
        this.type = 'M'
        this.stops = []
        this.pay = 0.00
        this.duration = 0.00
        this.distance = 0.0
    }
}
</script>

<style scoped>

</style>