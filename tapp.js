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
var time = moment($("#Military-Time").val().trim(), "HH:mm").format("X");
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

  var name = childSnap.val().Tname;
  var des = childSnap.val().destination;
  var time = childSnap.val().time;
  var frequency = childSnap.val().frequency;
  var current = moment(time, "hh:mm").subtract(1, "years"); 
  var diffTime = moment().diff(moment(current), "minutes");
  var Remainder = diffTime % frequency;
  var minutes = frequency - Remainder;
  var nextArrival = moment(diffTime).format("HH:mm"); 


  console.log(name);
  console.log(des);
  console.log(time);
  console.log(frequency);
  console.log(moment());


  $("#train-table > tbody").append("<tr><td>" + name + "</td><td>" + des + "</td><td>" +
  frequency + "</td><td>" + nextArrival + "</td><td>" + minutes + "</td></tr>");
});