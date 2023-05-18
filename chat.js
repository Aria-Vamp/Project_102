// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAmvIIiHuI2W0O6Ezs7O1hwiH7Bi1ZgmWE",
    authDomain: "project101-af364.firebaseapp.com",
    projectId: "project101-af364",
    storageBucket: "project101-af364.appspot.com",
    messagingSenderId: "719414932784",
    appId: "1:719414932784:web:5efbbdd844e6cff1d0c4f5",
    measurementId: "G-QS1ERX6BD9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



