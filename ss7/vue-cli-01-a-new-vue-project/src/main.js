import { createApp } from 'vue';

import App from './App.vue';

import friend from './components/friends.vue';

const app  = createApp(App);

app.component('frienddetails', friend)

createApp(App).mount('#app');
