var $tell = {
	color: {
		darks: ["376a82", "c23333", "db7d3a", "378241"],
		lights: ["afc3cd", "e7adad", "f1cbb0", "afcdb3"]
	},
	bindAll: function() {
		$(document).on("keyup", "input[type=number]", function(e) {
			if ($tell.isNotNumKey(event)) {
				ENTER.value = ENTER.value.replace(/[^0-9]/g, "");

				return false;
			}
			$tell.changedNum();
		});

		$(document).on("change", ".1st-lang-select", function(e) {
			var siteLangNum = $(".1st-lang-select").val();
			$tell.setUpSiteView(siteLangNum);
			$tell.changedNum();
		});

		$(document).on("change", ".2st-lang-select", function(e) {
			$tell.changedNum();
		});

		$tell.init();
	},
	changedNum: function() {
		enterLength = $("#ENTER").val().trim().length;
		if (enterLength == 0) {
			$("main .title-image img").show();
			$("header .title-image img").hide();
		} else {
			$("main .title-image img").hide();
			$("header .title-image img").show();
		}
		$tell.setColor(enterLength)
		$tell.getEnterOutNum();
	},
	getEnterOutNum: function() {
		var enterText = $("#ENTER").val();
		var enterArr = $tell.getEnterArr(3, enterText);
		$(".out-number h1").html(enterArr.toString());

		var lang1 =  $(".1st-lang-select").val();
		var readArr = $tell.getReadArr($tellLang.langUnitSize[lang1], enterText, lang1);
		var readText = $tell.getArrToText(readArr);
		$(".out-read-lang1 h1").html(readText);

		var lang2 = $(".2nd-lang-select option:selected").val();
		var readArr2 = $tell.getReadArr($tellLang.langUnitSize[lang2], enterText, lang2);
		var readText2 = $tell.getArrToText(readArr2);
		$(".out-read-lang2 h1").html(readText2);
	},
	getArrToText: function(readArr) {
		var readText = "";
		for (var i = readArr.length - 1; i >= 0; i--) {
			readText += readArr[readArr.length - 1 - i] + " ";
		}
		return readText;
	},
	getReadArr: function(num, enterText, lang) {
		if (lang != 0 && lang != 1 && lang != 2 && lang != 3) {
			alert("not allowed Language");
			return false;
		}
		var langArr = new Array();

		if (parseInt(enterText) ==0) {
			langArr[0] = $tellLang.lang1Arr[lang][0];
			return langArr;
		}
		var enterArr = $tell.getEnterArr(num, enterText);

        //영어
        if (lang == $tellLang.lang['en']) {
        	var space = " ";
        	var plural = "s";
        	for (var i = enterArr.length - 1; i >= 0; i--) {
        		var inputNum = enterArr[i] + "";
        		var readUnit = "";
        		var remainingNum = "";

                //3자리 수로 저장
                if (inputNum.length == 1) {
                	inputNum = "00" + inputNum;
                } else if (inputNum.length == 2) {
                	inputNum = "0" + inputNum;
                }

                //100
                var num100 = inputNum.substring(0, 1);
                if (num100 != 0) {
                	readUnit += space + $tellLang.lang1Arr[lang][num100];
                	readUnit += space + $tellLang.lang10Arr[lang][2];
                	if (num100 != 1) {
                		readUnit += plural+space;
                	}
                }

                //10
                var num10 = inputNum.substring(1, 3);
                if ( 0 < num10 && num10 <= 19) {
                	readUnit += space + $tellLang.lang1Arr[lang][parseInt(num10)] + space;
                } else {
                	var tenthDigit = num10 / 10;
                	var FirstDigit = num10 % 10;
                	if (tenthDigit > 1) {
                		var tenSeat = Math.floor(num10 / 10);
                		readUnit += space + $tellLang.lang20Arr[lang][tenSeat];
                	}

                	if (tenthDigit > 0 && FirstDigit > 0) {
                		readUnit +="-"; 
                	} 

                	if (FirstDigit > 0) {
                		readUnit += $tellLang.lang1Arr[lang][(num10 % 10)]+ space;
                	}
                }

                //units  	
                if (readUnit.length != 0) {
                	readUnit += $tellLang.langUnitArr[lang][enterArr.length - i - 1];
                	if ((readUnit != $tellLang.lang1Arr[lang][1]) && (i != enterArr.length - 1)) {
                		readUnit += plural;
                	}
                }
                langArr[i] = readUnit;

           }

      } else {
            //한중일 
            for (var i = enterArr.length - 1; i >= 0; i--) {
            	var inputNum = enterArr[i];
            	var inputNumLength = inputNum.length;
            	var readUnit = "";
            	for (var j = inputNumLength - 1; j >= 0; j--) {
            		var num = inputNum.substring(inputNumLength - (j + 1), inputNumLength - j);
            		if (num != 0) {
            			if ((j == 0 || num != 1) || lang == 3) {
            				readUnit += $tellLang.lang1Arr[lang][num];
            			}
            			readUnit += $tellLang.lang10Arr[lang][j];
            		}
            	}
            	if (readUnit.length != 0) {
            		readUnit += $tellLang.langUnitArr[lang][enterArr.length - i - 1];
            	}
            	langArr[i] = readUnit;
            }
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
 	var keyID = $tell.getKeyNum(event);

 	if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8) {
 		return false;
 	} else {
 		return true;
 	}
 },
 getKeyNum: function(event) {
 	var keyID = (event.which) ? event.which : event.keyCode;
        $(".mobile-space").text($(".mobile-space").text()+"|"+keyID);
        return keyID;
   },
   setResultView: function() {
/*          document.getElementsByClassName("output")[0].style.display = 'block';
          document.getElementsByClassName("output")[0].style.display = 'block';
          document.getElementsByClassName("other-section")[0].style.display = 'block';*/
     },
     setColor: function(length) {
     	var darkColor;
     	var lightColor;

     	if (length < 4) {
     		darkColor = "#" + $tell.color.darks[length];
     		lightColor = "#" + $tell.color.lights[length];

     	} else {

     	}

     	$(".dark-color").css("backgroundColor" , darkColor);
     	$(".light-color").css("backgroundColor" , lightColor);

     	$tell.setResultView();
     },
     setUpSiteView: function(siteLangNum) {
     	$(".1st-lang-select").val(siteLangNum);
     	if (siteLangNum == 1) {
     		$(".2nd-lang-select").val(0);
     	} else {
     		$(".2nd-lang-select").val(1);
     	}

     	$(".1st-lang-select option[value=" + siteLangNum + "]").hide();
     	$(".1st-lang-select option[value!=" + siteLangNum + "]").show();
     	$(".2nd-lang-select option[value=" + siteLangNum + "]").hide();
     	$(".2nd-lang-select option[value!=" + siteLangNum + "]").show();

     	$tellLang.setSiteLang(siteLangNum);
     },
     init: function() {
        //색상 초기화
        $tell.setColor(0);
        //디자인 초기화
        $("main .title-image img").show();
        $("header .title-image img").hide();
        //읽기 셀렉트 박스 초기화
        var siteLangNum = $tellLang.getSiteLang();
        $tell.setUpSiteView(siteLangNum);

        $("#ENTER").val("");
   }
};

$(document).ready(function() {
	$tell.bindAll();
	$tellLang.bindAll();
});