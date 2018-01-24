var $tell = {
    color: {
        darks: ["376a82", "c23333", "db7d3a", "378241"],
        lights: ["afc3cd", "e7adad", "f1cbb0", "afcdb3"]
    },
    bindAll: function() {
        var ENTER = document.getElementById("ENTER");
        ENTER.onkeyup = function(event) {
            if ($tell.isNotNumKey(event)) {
                console.log("숫자아님");
                ENTER.value = ENTER.value.replace(/[^0-9]/g, "");
                return false;
            }

            if($tell.isNotReadNumPatton){

            }


            $tell.changedNum();
        }
       document.getElementById("selectSiteLang").addEventListener("select", $tell.setSiteLang(), false);

        $tell.init();
    },
    setSiteLang : function(){
       var test = document.getElementById("selectSiteLang").value;
       console.log(test);
    },
    changedNum: function() {
            $tell.getEnterOutNum();


            var inputNum = parseInt(document.getElementById("ENTER").value.trim());

            /*		if ( inputNum.isNaN) {
            			console.log("숯자");
            		} 
            */

            /*			var inputNum = document.getElementsByClassName("ENTER")[0].value; 
            			var ouputNum = "";

            			if (inputNum == "" ) {
            				$tell.init();
            			}else{
            				ouputNum = $tell.getReadNumber(inputNum);
            				if (ouputNum =='false') {
            					return false;
            				} 
            				$tell.setColor(inputNum.length);
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
        ,
    getEnterOutNum: function() {
        var enterText = document.getElementById("ENTER").value;
        var enterArr = $tell.getEnterArr(3, enterText);
        document.getElementById("tellme-title").innerHTML = enterArr.toString();
        var lang = 0;
        var readArr = $tell.getReadArr(4, enterText, lang);
        var readText = $tell.getArrToText(readArr);
        document.getElementById("tellme-read").innerHTML = readText;
        
    },
    getArrToText : function(readArr){
        var readText = "";
        for (var i = readArr.length - 1; i >= 0; i--) {
            readText += readArr[readArr.length - 1-i] +" ";
        }
        return readText;
    },
    getReadArr : function(num, enterText, lang){
        var langArr = new Array(); 
        var enterArr = $tell.getEnterArr(num, enterText);
        var enterArrLangth = enterArr.length;
        var count = 0;
        for (var i =  enterArrLangth - 1; i >= 0; i--) {
            var inputNum = enterArr[i];
            var inputNumLength = inputNum.length;
            var readUnit = "";
            for (var j = inputNumLength - 1; j >= 0; j--) {
                var num = inputNum.substring(inputNumLength-(j+1),inputNumLength-j);
                if(j == 0 || num != 1 ){
                     readUnit += $tellLang.lang1Arr[lang][num];
                }
                readUnit += $tellLang.lang10Arr[lang][j];
            }
            readUnit += $tellLang.langUnitArr[lang][count];
            count++;
            langArr[i]=readUnit;
        }
        return langArr;

    },
    getEnterArr: function(num, enterText) { //1234567
        $tell.checkNumKey;
        var enterArr = new Array();
        var enterLength = enterText.length; //7
        var maxNum = Math.ceil(enterLength / num); //3
        var tempEndNum = enterLength % num; //1

        var startNum;
        var endNum;
        for (var i = maxNum; i >= 1; i--) {
            if (i == maxNum) {
                startNum = 0; //0
                endNum = tempEndNum == 0 ? num : tempEndNum; //1
            } else {
                startNum = endNum; //3
                endNum = startNum + num; //6
            }
            enterArr[maxNum - i] = enterText.substring(startNum, endNum);
        }
        return enterArr;
    },
    isNotNumKey: function(event) {
        event = event || window.event;
        var keyID= $tell.getKeyNum(event);

        if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8) {
            return false;
        } else {
            return true;
        }
    },
    getKeyNum : function(event){
        var keyID = (event.which) ? event.which : event.keyCode;
        //console.log("keyID", keyID);
        return keyID;
    },
    setResultView: function() {
        document.getElementsByClassName("output")[0].style.display = 'block';
        document.getElementsByClassName("output")[0].style.display = 'block';
        document.getElementsByClassName("other-section")[0].style.display = 'block';
    },
    setColor: function(length) {
        var darkColor;
        var lightColor;

        if (length < 4) {
            darkColor = "#" + $tell.color.darks[length];
            lightColor = "#" + $tell.color.lights[length];

        } else {

        }

        /*console.log(darkColor ," | ",lightColor);*/
        document.getElementsByClassName("dark-color")[0].style.backgroundColor = darkColor;
        document.getElementsByClassName("light-color")[0].style.backgroundColor = lightColor;
        document.getElementsByClassName("light-color")[1].style.backgroundColor = lightColor;

        $tell.setResultView();
    },
    init: function() {
        //디자인 초기화
        $tell.setColor(0);
        //읽기 박스 초기화
        document.getElementsByClassName("output")[0].style.display = "none";
        document.getElementsByClassName("other-section")[0].style.display = "none";
    }
};

window.onload = function() {
    $tell.bindAll();
    $tellLang.bindAll();
}


/*parseInt("afc3cd", 16)
(255).toString(16)
*/