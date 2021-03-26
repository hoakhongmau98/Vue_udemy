<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggDetails">Show details</button>
        <ul>
            <li>{{friend.name}}</li> 
            <li>{{friend.phone}}</li>
        </ul>
    </li>
</template>

<script>
export default{
    data(){
        return{
            detailarevisible: false,
            friend: {
                id: "manuel",
                name: "Manuel Lorenz",
                phone: "0123 45678 90",
                email: "manuel@localhost.com",
            }
        };
    },
    methods:{
        toggDetails(){
            this.detailarevisible = !this.detailarevisible;
        }
    }
};
</script>