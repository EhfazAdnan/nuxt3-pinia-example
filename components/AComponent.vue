<template>
  <div>
    <p>A Component</p>
    <p>Count: {{ store.count }}</p>
    <button @click="store.increment()">+</button>
    <button @click="store.decrement()">-</button>
    <hr />
  </div>
</template>

<script setup>
  // import required store
  import { useCounterStore } from '~~/store/counter';
  // initialize pinia store
  const store = useCounterStore();
</script>

<style scoped>

</style>