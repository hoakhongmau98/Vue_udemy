<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enterName" />
    </div>
    <div>
      <label>phone</label>
      <input type="tel" v-model="enterTel" />
    </div>
    <div>
      <label>E-mail</label>
      <input type="@email" v-model="enterEmail" />
    </div>
    <div>
      <button>Add contact</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enterName: '',
      enterTel: '',
      enterEmail: '',
    };
  },
  methods: {
    submitData() {
      // this.$emit('add-contact' are important for export emit 
       this.$emit('add-contact',this.enterName, this.enterTel, this.enterEmail);
    },
  },
};
</script>
