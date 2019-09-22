
var ProfileApp = new Vue({
el: '#RandomProfileApp',
data: {
  users: {
    name:"",
    dob:"",
    age:"",
    email:"",
    nat:"",
    piture:"",
    phone:""
  }
},
methods: {
  fetchUsers() {
    fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(json => {ProfileApp.users = json});

    // Means the same at this
    // fetch('https://randomuser.me/api/')
    // .then(function(response) {return response.json()})
    // .then(function(json) {waitingApp.people = json});

  }
},
created() {
  this.fetchUsers()
}
});
