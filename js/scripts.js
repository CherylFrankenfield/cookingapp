var gallon = function(gallon) {
	outPut = (gallon * 0.264172);
  return outPut.toPrecision(3)
  }

 var cup = function(cup){
 	outPut =  (cup * 4.16667);
 	return outPut.toPrecision(3)
 }

  var getLiter = parseFloat(prompt("What's wrong with you people? " + "How meany liter."));

  var gallonLiter = gallon(getLiter);
  var cupLiter = cup(getLiter);

  alert("Your cal in gallon's " + gallonLiter + ". Your cal in cup's "+ cupLiter + ".");

 
