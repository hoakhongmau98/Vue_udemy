<template>
  <section>
    <h3>{{ $store.state.counter}}</h3>
    <button @click="addOne">add 1</button>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    addOne(){
      // call to mainjs/mutations || it like a func  
      this.$store.commit('increment');
    }
  }
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
</style>