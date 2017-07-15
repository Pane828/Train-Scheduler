var config = {
    apiKey: "AIzaSyABTNbJWFi1ny9mNGCW4tAfzADSwpI8NqE",
    authDomain: "eric-project-72b21.firebaseapp.com",
    databaseURL: "https://eric-project-72b21.firebaseio.com",
    projectId: "eric-project-72b21",
    storageBucket: "eric-project-72b21.appspot.com",
    messagingSenderId: "722035688076"
  };

firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function(event) {

  
event.preventDefault();

console.log("this worked");
alert("Hello");

var name = $("#Train-Name").val().trim();
var des = $("#Destination").val().trim();
var time = $("#Military-Time").val().trim();
var frequency = $("#Frequency").val().trim();

database.ref().push({
      Tname: name,
      destination: des,
      time: time,
      frequency: frequency
    });  

alert("train scheduled");

  $("#Train-Name").val("");
  $("#Destination").val("");
  $("#Military-Time").val("");
  $("#Frequency").val("");
});

database.ref().on("child_added", function(childSnap) {

  // Store everything into a variable.
  var name = childSnap.val().Tname;
  var des = childSnap.val().destination;
  var time = childSnap.val().time;
  var frequency = childSnap.val().frequency;

  console.log(name);
  console.log(des);
  console.log(time);
  console.log(frequency);

  var timeFormat = moment.unix(time).format("MM/DD/YY");

  $("#train-table > tbody").append("<tr><td>" + name + "</td><td>" + des + "</td><td>" +
  frequency + "</td><td>" + "next arrival" + "</td><td>" + "minutes away" + "</td></tr>");
});