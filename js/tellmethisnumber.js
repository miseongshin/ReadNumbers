var tellmethisnumber = {
	color : {
		darks : ["376a82", "c23333","db7d3a","378241"]
		,lights : ["afc3cd", "e7adad","f1cbb0","afcdb3"]
	}
	,bindAll : function(){
		document.getElementById("ENTER").onkeyup = function (){
			tellmethisnumber.changedNum();
		}
/*		$enterInput.onkeypress = function (){
			tellmethisnumber.changedNum();
		}*/



		tellmethisnumber.init();	
	}
	,changedNum : function(){
		 tellmethisnumber.getEnterOutNum();


		var inputNum = parseInt(document.getElementById("ENTER").value.trim());
		
/*		if ( inputNum.isNaN) {
			console.log("숯자");
		} 
*/

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
	,getEnterOutNum : function (){
		var enterText = document.getElementById("ENTER").value;
		var enterArr = tellmethisnumber.getEnterArr(enterText);
		document.getElementById("commaNum").innerHTML = enterArr.toString();
		tellmethisnumber.setColor(enterText.length);
		

	},getEnterArr : function(enterText){
		enterText.replace(/[^0-9]/gi, "");
		var startENum = Math.ceil(enterText.length/3) -1;
		var enterArr = new Array();
		var enterTemp = enterText;
		for (var i = startENum; i >= 0; i--) {
			var place = Math.floor(enterTemp / Math.pow(1000,i));
			enterArr[startENum-i] = place;
			enterTemp = enterTemp - place * Math.pow(1000,i);
		}
		return enterArr;
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