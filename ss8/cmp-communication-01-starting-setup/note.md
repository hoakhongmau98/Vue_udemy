props: [
    'value', 'value', ...
]

U define a new value in App.vue template +=> Value can access in FriendContact by: props: ['value', 'value']
after that, the template tag in FriendContact must be only {{value}} || not this.value. And all value define in friendcontact has disable


if u wanto change a props from father(App.vue) in Son(Friendcontac.vue). U CAN'T
|| 
U have to add a new value for this value and now u can change it.



props have 2 type: 
     props: [
     'name',
     'phone',
     'emailAddress'
   ],
*******************************
  props: {
    name: {
      type: String,
      require: true,
      default: '0',
       default: function(){},
       validator: function(){
         return name === '1' || value === '0'
       }
    },