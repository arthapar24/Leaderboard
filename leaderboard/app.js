(function()  {


var config = {
  apiKey: "AIzaSyAcPiM5u26hO8mdo5-xGOMof2AX5ju4jyU",
  authDomain: "auth-b3878.firebaseapp.com",
  databaseURL: "https://auth-b3878.firebaseio.com",
  projectId: "auth-b3878",
  storageBucket: "auth-b3878.appspot.com",
  messagingSenderId: "813145341914"
};
firebase.initializeApp(config);

var ref = firebase.database().ref("Usernames");

ref.on("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();
    console.log(childData);
  });
});


}());
