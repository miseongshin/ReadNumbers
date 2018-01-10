var tellmethisnumber = {
	color : {
		darks : ["376a82", "c23333","db7d3a","378241"]
		,lights : ["afc3cd", "e7adad","f1cbb0","afcdb3"]
	}
	,bindAll : function(){
		document.getElementById("ENTER").onkeydown = function (){
			tellmethisnumber.changedNum();
		}
/*		$enterInput.onkeypress = function (){
			tellmethisnumber.changedNum();
		}*/



		tellmethisnumber.init();	
	}
	,changedNum : function(){
		var enterText = document.getElementById("ENTER").value.trim();
		
		
		 tellmethisnumber.getEnterOutNum(enterText);


		var inputNum = parseInt(document.getElementById("ENTER").value.trim());
		
		if ( inputNum.isNaN) {
			console.log("숯자");
		} 

		console.log("작동"+enterText);

/*			var inputNum = document.getElementsByClassName("ENTER")[0].value; 
			var ouputNum = "";

			if (inputNum == "" ) {
				tellmethisnumber.init();
			}else{
				ouputNum = tellmethisnumber.getReadNumber(inputNum);
				if (ouputNum =='false') {
					return false;
				} 
				tellmethisnumber.setColor(inputNum.length);
			}

			console.log(inputNum + "|" + ouputNum);*/
			//document.getElementById("ENTER").value = ouputNum;
	}
/*	,getReadNumber : function(inputNum){
		var ouputNums = new Array();
		var ouputNum = "";
		if (typeof inputNum != 'number') {
			alert("number is only allowed");
			document.getElementById("ENTER").value = "";
			return false;
		} 
		var tempNum = Number(inputNum);
		var count = (inputNum.langth)/3;
		console.log("count["+count+"], langth["+inputNum.langth);
		for (var i = count - 1; i >= 0; i--) {
			ouputNums[(count-i-1)] = tempNum % 1000;
			tempNum = tempNum / 1000;
		}

		for (var i = count - 1; i >= 0; i--) {
			ouputNum += ouputNums[(count-i-1)];
		}
		console.log("ouputNum",ouputNum);
		return inputNum;
	}*/
	,getEnterOutNum : function (enterText){
		enterText.replace(/[^0-9]/gi, "");
		enterArrayCnt= Math.floor(enterText.length/3);
		enterArrayCnt = enterArrayCnt;
		enterTemp = enterText;
		var enterArr = new Array();
		for (var i = enterArrayCnt - 1; i >= 0; i--) {
			enterArr[i] =  enterTemp %1000;
			enterTemp =Math.floor(enterTemp /1000);
		}

		outEnter = "";
		for (var i = enterArr.length - 1; i >= 0; i--) {
			outEnter = outEnter +enterArr[i]+",";
		}
		console.log(outEnter);




	}
	,setResultView : function(){
		document.getElementsByClassName("output")[0].style.display='block';
		document.getElementsByClassName("output")[0].style.display='block';
		document.getElementsByClassName("other-section")[0].style.display='block';
	}
	,setColor : function(length){
		var darkColor;
		var lightColor;

		if (length < 4) {
			darkColor = "#" + tellmethisnumber.color.darks[length];
			lightColor = "#" + tellmethisnumber.color.lights[length];

		} else {

		}

		/*console.log(darkColor ," | ",lightColor);*/
		document.getElementsByClassName("dark-color")[0].style.backgroundColor= darkColor;
		document.getElementsByClassName("light-color")[0].style.backgroundColor= lightColor;
		document.getElementsByClassName("light-color")[1].style.backgroundColor= lightColor;

		tellmethisnumber.setResultView();
	}
	,init : function(){
		//디자인 초기화
		tellmethisnumber.setColor(0);
		//읽기 박스 초기화
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