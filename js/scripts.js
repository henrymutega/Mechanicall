
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

var  y = model.options[model.selectedIndex].text;
var  x = location.options[location.selectedIndex].text;

  if(x =="Ngong Road"){
    $("#jane, #adams, #ken, #bill, #caka, #peter, #eduwin, #sheila, #mwangi, #yussuf, #mwanza, #mercy").hide();
    $("#oscar").show();
    $("#john").show();
  }else if(x=="Thika Road"){
    $("#oscar, #ken, #bill, #caka, #peter, #eduwin, #sheila, #mwangi, #yussuf, #mwanza, #mercy").hide();
    $("#jane").show();
    $("#adams").show();
  }else if(x=="Kiambu Road"){
    $("#oscar, #john, #jane, #adams, #caka, #peter, #eduwin, #sheila, #mwangi, #yussuf, #mwanza, #mercy").hide();
    $("#ken").show();
    $("#bill").show();
  }else if(x=="Eastlands"){
    $("#oscar, #john, #jane, #adams, #ken, #bill, #eduwin, #sheila, #mwangi, #yussuf, #mwanza, #mercy").hide();
    $("#caka").show();
    $("#peter").show();
  }else if(x=="Westlands") {
    $("#oscar, #john, #jane, #adams, #ken, #bill, #caka, #peter, #eduwin, #mwangi, #yussuf, #mwanza, #mercy").hide();
    $("#eduwin").show();
    $("#sheila").show();
  }else if(x=="Jogoo Road") {
    $("#oscar, #john, #jane, #adams, #ken, #bill, #caka, #peter, #eduwin, #sheila, #mwanza, #mercy").hide();
    $("#mwangi").show();
    $("#yussuf").show();
  }else if(x=="Nairobi CBD") {
    $("#oscar, #john, #jane, #adams, #ken, #bill, #caka, #peter, #eduwin, #sheila").hide();
    $("#mwanza").show();
    $("#mercy").show();
  }else if(y=="--Select Your Car Model--" || x=="--Select Your Location--"){
    $("#ken, #jane, #oscar, #adams, #caka, #bill, #john").hide();
    alert("Please Enter your Car model and location to Find our Mechanics.");
  }
})

$("#display").click(function(){
  $("#oscar, #john, #jane, #adams, #ken, #bill, #caka, #peter, #eduwin, #sheila, #mwangi, #yussuf, #mwanza, #mercy").toggle();
})
});
