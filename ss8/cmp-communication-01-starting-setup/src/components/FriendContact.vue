<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  //   props: [
  //   'name',
  //   'phone',
  //   'emailAddress'
  // ],

  props: {
    name: {
      type: String,
      require: true,
      default: '0',
      // default: function(){},
      // validator: function(){
      //   return name === '1' || value === '0'
      // }
    },
    phone: {
      type: String,
      require: true,
      default: '0'
    },
    emailAddress: {
      type: String,
      require: true,
      default: '0'
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>