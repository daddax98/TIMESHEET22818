


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

$("#submit").on("click", function (event) {

  event.preventDefault();

  var empName = $("#empName").val().trim();
  var empRate = $("#empRate").val().trim();
  var startDate = $("start-year").val().trim();

  
  database.ref().push({
    empName: empName,
    empRate: empRate,
    startDate: startDate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});
