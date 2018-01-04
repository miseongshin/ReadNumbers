var tellLang = {
	lang : {
		ko : 0
		,en : 1
		,jp : 2
	}
	,info :{
		writer : ["신미성", "Miseong Shin", "申美星"]
		,tellNumTitle : ["숫자좀 읽어줘","TELL ME THIS NUMBER","この番号を教えて"]
		,langKo : ["한국어", "KOREAN","韓国"]
		,langEn : ["영어","English","アメリカ" ]
		,langJp : ["일본어","Japanese","日本"]
	}
	,setLanguage : function(num){
		setTimeout(function() { 
			document.getElementById("lang-ko").text = tellLang.info.langKo[num];
			document.getElementById("lang-en").text = tellLang.info.langEn[num];
			document.getElementById("lang-jp").text = tellLang.info.langJp[num];
			document.getElementById("writer").text = tellLang.info.writer[num];
			document.getElementById("tellNum-title").text = tellLang.info.tellNumTitle[num];
			document.getElementById("tellme-title").textContent = tellLang.info.tellNumTitle[num];
			}, 10);
		

	}
	, init : function(){
		var lang = navigator.language || navigator.userLanguage;
		/*tellLang.setLanguage(lang);*/
	}
}

