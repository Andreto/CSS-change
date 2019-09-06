var changeData = [

]

for (i=0; i < changeData.length; i++){
  var elements = document.querySelectorAll(changeData[i][0]);
  for (var ii = 0; ii < elements.length; ii++) {
  	elements[ii].style = (changeData[i][1] + ": " + changeData[i][2] + ";");
  }
}
