//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyARZvNwpklwrv1S4dMbx8fItcUZqQ1I_-k",
      authDomain: "kwitterclass-93.firebaseapp.com",
      databaseURL: "https://kwitterclass-93-default-rtdb.firebaseio.com",
      projectId: "kwitterclass-93",
      storageBucket: "kwitterclass-93.appspot.com",
      messagingSenderId: "269102753406",
      appId: "1:269102753406:web:b8afbcb2f0f6867c6d9a2f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }

getData();
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
      document.getElementById("msg").value="";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }
