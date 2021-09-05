<template>
  <div class="dash">
    <h1>Manage Routes</h1>
    <router-link to="/">back</router-link>

    <div class="add-route">
      <button @click="openModal()" v-if="!showNewRouteForm">
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
form {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
}
input {
  margin-bottom: 10px;
  text-align: center;
}
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
button {
  margin: 10px;
}
</style>