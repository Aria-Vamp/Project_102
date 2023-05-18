function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : " adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "index.html";
}

function getdata() {firebase.database().ref("/").on ('value',
function (snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childkey = 
childSnapshot.key;
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
Room_names = childkey;

});});}
getdata();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "index.html";
}