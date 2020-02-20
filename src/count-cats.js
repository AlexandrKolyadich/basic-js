module.exports = function countCats(backyard) {
	var number = 0;
  backyard.forEach(function(item, i,backyard){
  	if(item === "^^")
  		number++;
  });
  return number;
};
