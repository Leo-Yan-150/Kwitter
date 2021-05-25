var firebaseConfig = {
      apiKey: "AIzaSyDVzuXEGBeTEdgIv37qks-RVoT4lkO10A4",
      authDomain: "kwitter1-96c53.firebaseapp.com",
      databaseURL: "https://kwitter1-96c53-default-rtdb.firebaseio.com",
      projectId: "kwitter1-96c53",
      storageBucket: "kwitter1-96c53.appspot.com",
      messagingSenderId: "657743082848",
      appId: "1:657743082848:web:914ab58fd6e588525cda05"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("username");
var room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
names = message_data['Name'];
message = message_data['Message'];
like = message_data['likes'];
name_with_tag = "<h4>" + names + "<img class='user_tick' src='tick.png'</h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning' id='"+firebase_message_id+"' value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
} });  }); }
getData();
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
Name:user_name,
Message:msg,
likes:0
});

document.getElementById("msg").value = "";
}
function logout(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location = "index.html";
}

function updateLike(message_id){
console.log("like button clicked - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log("updated_likes");
firebase.database().ref(room_name).child(message_id).update({
likes: updated_likes
});
}