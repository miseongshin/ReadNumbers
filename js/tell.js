var $tell = {
	color: {//http://paletton.com/#uid=70f0u0kllll25TkbJuIuXbYUK2z
		darks: ['7CC47C'
		,'74B786','6FAE8A','6AA88D','66A290','629B92','5D9393','628D97','65899B','68869D','6A83A0','6C81A2','6E7EA4'
		,'707CA6','7379A8','7676AB','7F72A8','8171A8','8470A7','866EA6','896DA5','8C6CA4','8F6BA3','9369A2','9867A1'
		,'9F659F','AF6FA3','BB77A5','C47CA4','CC81A5','D486A4','F59B9B','F5A59B','F5AE9B','F5B59B','F5BA9B','F5BF9B'
		,'F5C49B','F5C89B','F5CB9B','F5CE9B','F5D19B','F5D49B','F5D79B','F5D99B','F5DC9B','F5DE9B','F5E19B','F5E39B'
		,'F5E59B','F5E89B','F5EA9B','F5ED9B','F5EF9B','F5F29B','F5F59B','ECF299','E5EF97','DDEC96','D7EA94','D0E792'
		,'F5D79B','F5D99B','F5DC9B','F5DE98','F5E198','F5E39B','7974AA','7C73A9'],
		lights: ['E3F3E3'
		,'E0F0E4','E0F0E4','E0F0E4','DBEAE6','D9E9E6','D8E7E7','D9E5E8','DAE4E9','DBE3E9','DCE2EA','DCE2EA','DDE1EB'
		,'DEE1EB','DFE0EC','E0E0ED','E2DEEC','E2DEEC','E3DEEC','E3DDEB','E4DDEB','E5DDEB','E6DCEB','ECDCEA','E8DBEA'
		,'EADAEA','EEDEEB','F1E1EB','F3E3EC','F5E5EC','F7E7ED','FFEEEE','FFF0EE','FFF2EE','FFF3EE','FFF4EE','FFF5EE'
		,'FFF6EE','FFF7EE','FFF7EE','FFF8EE','FFF8EE','FFF9EE','FFF9EE','FFFAEE','FFFAEE','FFFBEE','FFFBEE','FFFCEE'
		,'FFFDEE','FFFEEE','FFFEEE','FFFFEE','FDFFEE','FCFEED','FAFDEC','F9FCEC','F7FCEB','FFFCEE','FFFDEE','FFFDEE'
		,'FFF9EE','FFFAEE','FFFAEE','FFFBEE','FFFBEE','FFFCEE','E0DFEC','E1DFEC']	
	},
	bindAll: function() {

		$(document).on("keyup", "input[type=number]", function(e) {
			var $ENTER = $("#ENTER");
			var enterValue = $ENTER.val();

			var regex = /[^0-9]/g;
			if ($tell.isNotNumKey(e) || regex.test(enterValue) ) {
				enterValue = enterValue.replace(regex, "");
				$ENTER.val(enterValue);
			}
			$tell.changedNum();
			var moveOffset = $("header").offset();
			$('html, body').animate({scrollTop : moveOffset.top}, 700);
		});

		$(document).on("click", ".lang", function(e) {
			var $lang1 = $("#1stLang");
            var $lang2 = $("#2ndLang");
            $lang2.val($(this).attr("value"))
			if ($lang2.val().length ==0) {
				var siteLangNum = $(this).val();
				$lang1.val(siteLangNum);
				$tell.setUpSiteView(siteLangNum);
				$tell.changedNum();
				$('#ENTER').focus();				
			} 

            $tell.setColor($("#ENTER").val().length);
            $tellLang.setSiteLang($lang2.val());
            $tell.changedNum();

		});

		$tell.init();
	},
	changedNum: function() {
		$tell.setDisplay();
        $("#ENTER").val($("#ENTER").val().trim());
		var enterLength = $("#ENTER").val().length;
		$tell.setColor(enterLength)
		$tell.getEnterOutNum();
	},
	getEnterOutNum: function() {
		var enterText = $("#ENTER").val();
		var enterArr = $tell.getEnterArr(3, enterText);
		$(".out-number h1").html(enterArr.toString());

		var lang1 = $("#1stLang").val();
		var readArr = $tell.getReadArr($tellLang.langUnitSize[lang1], enterText, lang1);
		var readText = $tell.getArrToText(readArr);
		$(".out-read-lang1 h1").html(readText);

/*		var lang2 = $(".2nd-lang-select option:selected").val();
		var readArr2 = $tell.getReadArr($tellLang.langUnitSize[lang2], enterText, lang2);
		var readText2 = $tell.getArrToText(readArr2);
		$(".out-read-lang2 h1").html(readText2);*/
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
      	if (enterText.length > 72) {
      		langArr[0] = $tellLang.toolong[lang];
      		return langArr;
      	} 
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

 	if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID==229) {
 		return false;
 	} else {
 		return true;
 	}
 },
 getKeyNum: function(event) {
 	var keyID = (event.which) ? event.which : event.keyCode;
 	return keyID;
 },
 setResultView: function() {

 },
 setColor: function(length) {

 	var colorNum = Math.floor(length);
 	var darkColor = $tell.color.darks[colorNum];
 	var lightColor = $tell.color.lights[colorNum];



 	$(".dark-color").css("backgroundColor" , "#"+darkColor);
 	$(".light-color").css("backgroundColor" ,"#"+lightColor);

    $("#btn-1").css("backgroundColor" , "#"+lightColor);
    $("#btn-2").css("backgroundColor" , "#"+lightColor);
    $("#btn-3").css("backgroundColor" , "#"+lightColor);
    $("#btn-4").css("backgroundColor" , "#"+lightColor);
    if($("#2ndLang").val().length == 0){
        $("#btn-"+$("#1stLang").val()).css("backgroundColor" , "#"+darkColor);
    }else{
        $("#btn-"+$("#2ndLang").val()).css("backgroundColor" , "#"+darkColor);
    }
    
  


 	$tell.setResultView();
 },
 setUpSiteView: function(siteLangNum) {
 	$tellLang.setSiteLang(siteLangNum);
 },
 setDisplay : function(){
 	var enterLength = $("#ENTER").val().trim().length;
 	if (enterLength == 0) {
 		$("main .title-image img").show();
 		$("header .title-image img").hide();
 		$(".number-infomation").hide();
 		$(".facebook-like").hide();
 		$("footer").css({"position":"absolute","bottom":"0px"});
 	} else {
 		$("main .title-image img").hide();
 		$("header .title-image img").show();
 		$(".number-infomation").show();
 		$(".facebook-like").hide();
 		$("footer").css({"position":"relative","bottom":""});
 	}
 },
 setButton : function(lang1, lang2){
        //
 },
 init: function() {
        //색상 초기화
        $tell.setColor(0);
        //디자인 초기화
        $tell.setDisplay();
        //읽기 버튼 초기화
        var siteLangNum = $tellLang.getSiteLang();
        $tell.setUpSiteView(siteLangNum);

        $("#ENTER").val("");
   }
};

$(document).ready(function() {
	$tell.bindAll();
	$tellLang.bindAll();
});