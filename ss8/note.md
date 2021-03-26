// expland cmp-07


create a new file components:
> create <template> <=> add template tag into App.vue
> import and define components in main.js
> ...
> components/file.vue:
>> add template core
>> add script export
>> add emits: [], if u want to export custom emit func
>> add method for emit
>> switch App.vue
>> add template tag || add emit to collect data by emit func 
<!-- <none-friend @add-contact="addContact"></none-friend> -->
>> define func in App.vue



>> so NoneFriend.vue and emit ['add-contact] has created for add new infor from NoneFriend-template to friends App.vue
>> all of this course 97 is: create from >> create emit > setup emit from > add to App.vue > emitfunc get data by form > process in App.methods and push data to friends 

>> define emits.evet in App.vue:
>> <friend-contact @delete="deleteContact"> 

>> methods: function()
>> deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },

>> use
>> <button @click="$emit('delete', id)">Delete</button>


