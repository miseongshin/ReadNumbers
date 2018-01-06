var tellmethisnumber = {
	color : {
		darks : ["376a82", "c23333","db7d3a","378241"]
		,lights : ["afc3cd", "e7adad","f1cbb0","afcdb3"]
	}
	,bindAll : function(){
		var $enterInput = document.getElementsByClassName("ENTER")[0];
		$enterInput.onkeydown = function (){
			tellmethisnumber.changedNum($enterInput.value);
		}
		$enterInput.onkeypress = function (){
			tellmethisnumber.changedNum($enterInput.value);
		}

			tellmethisnumber.init(), 3000

		

		console.log(parseInt(tellmethisnumber.color.darks[0], 16)-parseInt(tellmethisnumber.color.lights[0], 16));
		console.log(parseInt(tellmethisnumber.color.darks[1], 16)-parseInt(tellmethisnumber.color.lights[1], 16));
		console.log(parseInt(tellmethisnumber.color.darks[2], 16)-parseInt(tellmethisnumber.color.lights[2], 16));
		console.log(parseInt(tellmethisnumber.color.darks[3], 16)-parseInt(tellmethisnumber.color.lights[3], 16));
	
	}
	,changedNum : function(value){
			var enterLength = value.length;
			console.log(value);
			if (enterLength == 0 ) {
				tellmethisnumber.init();
			}else{
				tellmethisnumber.setColor(enterLength);
				tellmethisnumber.setResultView();
			}

	}
	,setResultView : function(){
		document.getElementsByClassName("output")[0].style.display='block';
		document.getElementsByClassName("output")[0].style.display='block';
		document.getElementsByClassName("other-section")[0].style.display='block';
	}
	,setColor : function(length){
		console.log(length);
		var darkColor;
		var lightColor;

		if (length < 4) {
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
		//디자인
		tellmethisnumber.setColor(0);
		document.getElementsByClassName("output")[0].style.display="none";
		document.getElementsByClassName("other-section")[0].style.display="none";
	}
};

window.onload= function(){
  tellmethisnumber.bindAll();
  tellLang.bindAll();
}


/*parseInt("afc3cd", 16)
(255).toString(16)
*/