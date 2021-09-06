<template>
  <div class="dash">
    <h1>Manage Routes</h1>
    <router-link to="/">Home</router-link>

    <div class="add-route">
      <button
        class="new-route-button"
        @click="openModal()"
        v-if="!showNewRouteForm"
      >
        Add New Route
      </button>
      <new-route-form v-else @closeModal="closeModal()"></new-route-form>
      <routes-list></routes-list>
    </div>
  </div>
</template>

<script>
import NewRouteForm from "../components/NewRouteForm.vue";
import RoutesList from "../components/RoutesList.vue";

export default {
  data() {
    return {
      showNewRouteForm: false,
      routes: [],
    };
  },
  components: {
    "new-route-form": NewRouteForm,
    "routes-list": RoutesList,
  },
  methods: {
    updateRoutes() {},
    closeModal() {
      this.updateRoutes();
      this.showNewRouteForm = false;
    },
    openModal() {
      this.showNewRouteForm = true;
    },
  },
};
</script>

<style scoped>
/* Without this workaround, autofill will disrupt v-model, causing fields to appear blank according to data() */
:-webkit-autofill {
  /* Expose a hook for JavaScript when auto fill is shown. */
  /* JavaScript can capture 'animationstart' events */
  animation-name: onAutoFillStart;
  transition: background-color 50000s ease-in-out 0s;
}
:not(:-webkit-autofill) {
  /* Expose a hook for JS onAutoFillCancel */
  /* JavaScript can capture 'animationstart' events */
  animation-name: onAutoFillCancel;
}
a,
.new-route-button {
  margin: 15px 10px 5px 10px;
}
</style>