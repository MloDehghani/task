  var firebaseConfig = {
    apiKey: "AIzaSyDD8HFhWuYMdfZJFIunB6pd6DpfUgmp_dA",
    authDomain: "sell-ddbff.firebaseapp.com",
    databaseURL: "https://sell-ddbff-default-rtdb.firebaseio.com",
    projectId: "sell-ddbff",
    storageBucket: "sell-ddbff.appspot.com",
    messagingSenderId: "84830964061",
    appId: "1:84830964061:web:37617a2a508304250b40b4",
    measurementId: "G-1TSSWB2M0E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

let database =firebase.database()
let ref = database.ref('users')



function saveToFireBase() {
	let data = {
		name: document.getElementById('inputName').value,
		email: document.getElementById('inputEmail').value,
	}
	ref.push(data)
}