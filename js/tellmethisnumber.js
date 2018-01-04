var tellmethisnumber = {
	color : {
		darks : ["376a82", "c23333","db7d3a","378241"]
		,lights : ["afc3cd", "e7adad","f1cbb0","afcdb3"]
	}
	,bindAll : function(){
		var $enterInput = document.getElementsByClassName("ENTER")[0];
		$enterInput.onkeydown = function (){
			tellmethisnumber.setColor($enterInput.value.length);
		}

		tellmethisnumber.init();

		console.log(parseInt(tellmethisnumber.color.darks[0], 16)-parseInt(tellmethisnumber.color.darks[1], 16));
		console.log(parseInt(tellmethisnumber.color.darks[1], 16)-parseInt(tellmethisnumber.color.darks[2], 16));
		console.log(parseInt(tellmethisnumber.color.darks[2], 16)-parseInt(tellmethisnumber.color.darks[3], 16));
		console.log(parseInt(tellmethisnumber.color.darks[3], 16)-parseInt(tellmethisnumber.color.darks[4], 16));
	
	}
	,setColor : function(length){
		console.log(length);
		var darkColor;
		var lightColor;

		if (0<= length && length < 4) {
			darkColor = "#" + tellmethisnumber.color.darks[length];
			lightColor = "#" + tellmethisnumber.color.lights[length];

		} else {

		}

		console.log(darkColor ," | ",lightColor);
		document.getElementsByClassName("dark-color")[0].style.backgroundColor= darkColor;
		document.getElementsByClassName("light-color")[0].style.backgroundColor= lightColor;
		document.getElementsByClassName("light-color")[1].style.backgroundColor= lightColor;
	}
	,init : function(){
		tellmethisnumber.setColor(0);
	}
};

window.onload= function(){
  tellmethisnumber.bindAll();
}


/*parseInt("afc3cd", 16)
(255).toString(16)
*/