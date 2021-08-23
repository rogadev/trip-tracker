<template>
<div class="routes">
    <h1>Routes</h1>
    <button @click='openNewRouteModal'>Add New Route</button>
    <new-route-form></new-route-form>
    <p>List...</p>
</div>
</template>

<script>
import NewRouteForm from '../components/NewRouteForm.vue';
export default {
  components: { NewRouteForm },
    data(){return{
        showNewRouteModal: false,
        code, type, stops: [], pay, duration, distance
    }},
    methods: {
        openNewRouteModal() {
            this.showNewRouteModal = true;
        },
        closeNewRouteModal() {
            this.showNewRouteModal = false;
        },
    }
}
</script>

<style scoped>

</style>