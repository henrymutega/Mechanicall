$(document).ready(function(){
$("#submit").click(function(){
  /*******Collecting Vehicle Model Details*****/
  var model = document.getElementById("cars");
  document.getElementById("model").innerHTML =
  (model.options[model.selectedIndex].text).toUpperCase();

  /*******Collecting Location Details*****/
  var location = document.getElementById("locationSelection");
  document.getElementById("loc").innerHTML =
  (location.options[location.selectedIndex].text).toUpperCase();

  y = model.options[model.selectedIndex].text;
  x = location.options[location.selectedIndex].text;

  if(y=="Nissan" || x=="Thika Road"){
    $("#ken, #jane, #oscar, #adams, #caka, #bill, #john").hide();
    $("#john").show();
    $("#jane").show();
    $("#ken").show();
  }else if(y=="Toyota"){
    $("#ken, #jane, #oscar, #adams, #caka, #bill, #john").hide();
    $("#oscar").show();
    $("#adams").show();
  }else if(y=="Range Rover"){
    $("#ken, #jane, #oscar, #adams, #caka, #bill, #john").hide();
    $("#oscar").show();
    $("#adams").show();
    $("#caka").show();
  }else if(y=="BMW"){
    $("#ken, #jane, #oscar, #adams, #caka, #bill, #john").hide();
    $("#oscar").show();
  }else if(y=="Volvo") {
    $("#ken, #jane, #oscar, #adams, #caka, #bill, #john").hide();
    $("#john").show();
    $("#jane").show();
    $("#bill").show();
  }else if(y=="Ford") {
    $("#ken, #jane, #oscar, #adams, #caka, #bill, #john").hide();
    $("#oscar").show();
    $("#jane").show();
  }else if(y=="--Select Your Car Model--" || x=="--Select Your Location--"){
    $("#ken, #jane, #oscar, #adams, #caka, #bill, #john").hide();
    alert("Enter your Car model and location to Find our Mechanics");
  }
})

$("#display").click(function(){
  $("#ken, #jane, #oscar, #adams, #caka, #bill, #john").toggle();
})
});
