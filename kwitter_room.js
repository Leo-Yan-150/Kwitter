var firebaseConfig = {
      apiKey: "AIzaSyDVzuXEGBeTEdgIv37qks-RVoT4lkO10A4",
      authDomain: "kwitter1-96c53.firebaseapp.com",
      databaseURL: "https://kwitter1-96c53-default-rtdb.firebaseio.com",
      projectId: "kwitter1-96c53",
      storageBucket: "kwitter1-96c53.appspot.com",
      messagingSenderId: "657743082848",
      appId: "1:657743082848:web:914ab58fd6e588525cda05"
    };
    firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location = "index.html";
}