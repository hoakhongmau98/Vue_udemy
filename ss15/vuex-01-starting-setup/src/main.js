import { createApp } from 'vue';
import { createStore } from 'vuex'


import App from './App.vue';

const store = createStore({
    state(){
        return{
            counter: 0,
        }
    },
    // eslint-disable-next-line no-undef
    mutations: {
        increment(state){
            state.counter = state.counter + 215;
        }
    }
})

const app = createApp(App);

app.use(store)
app.mount('#app');
