
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBPcObR33DH1T1eTCXsTLD-nQHNbsCcYJY",
      authDomain: "kwitter2-a5a6b.firebaseapp.com",
      projectId: "kwitter2-a5a6b",
      storageBucket: "kwitter2-a5a6b.appspot.com",
      messagingSenderId: "75325708456",
      appId: "1:75325708456:web:141712644074508b2c8a9d",
      measurementId: "G-2GZ9T47HPT"
    };
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names );
      row="<div clas='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"></div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";

}
