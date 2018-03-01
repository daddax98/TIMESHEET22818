var config = {
  apiKey: "AIzaSyDplRdYwljxQ6IuOybOFxdg3zGic13qGZA",
  authDomain: "timesheet-7adc2.firebaseapp.com",
  databaseURL: "https://timesheet-7adc2.firebaseio.com",
  projectId: "timesheet-7adc2",
  storageBucket: "timesheet-7adc2.appspot.com",
  messagingSenderId: "183171403258"
};
 firebase.initializeApp(config);

var database = firebase.database();

$("#add-employee-btn").on("click", function(event) {
  event.preventDefault();

  var empName = $("#employee-name-input").val().trim();
  var empRole = $("#role-input").val().trim();
  var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
  var empRate = $("#rate-input").val().trim();

  var newEmp = {
    name: empName,
    role: empRole,
    start: empStart,
    rate: empRate
  };

  database.ref().push(newEmp);

  console.log(newEmp.name);
  console.log(newEmp.role);
  console.log(newEmp.start);
  console.log(newEmp.rate);

  alert("Employee successfully added");

  $("#employee-name-input").val("");
  $("#role-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  var empName = childSnapshot.val().name;
  var empRole = childSnapshot.val().role;
  var empStart = childSnapshot.val().start;
  var empRate = childSnapshot.val().rate;

  console.log(empName);
  console.log(empRole);
  console.log(empStart);
  console.log(empRate);

  var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

  var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  console.log(empMonths);

  var empBilled = empMonths * empRate;
  console.log(empBilled);

  $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
  empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
});
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
