<template>
  <div class="route-detail">
    <span>1</span> <span>stop1</span> <span>-</span> <span>stop2</span>
    <span>123 km</span> <span>56 min</span>
    <span>
      <span>$1.23</span>
      <button class="edit-button"><i class="fas fa-edit"></i></button>
      <button class="delete-button"><i class="far fa-trash-alt"></i></button>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.route-detail {
  display: flex;
  justify-content: space-between;
  margin: 0 1em;
}
.delete-button {
  border: 1px solid rgba(0, 0, 0, 0.35);
  background-color: red;
  color: white;
  border: 0;
  border-radius: 5px;
  width: 25px;
  text-align: center;
}
.edit-button {
  border: 1px solid rgba(0, 0, 0, 0.35);
  background-color: blue;
  color: white;
  border: 0;
  border-radius: 5px;
  width: 25px;
  text-align: center;
}
button {
  margin-left: 5px;
}
button:hover {
  cursor: pointer;
}
</style>