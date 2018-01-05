var tellLang = {
	lang : {
		"ko" : 0
		,"en" : 1
		,"ja" : 2
	}
	,info :{
		writer : ["신미성", "Miseong Shin", "申美星"]
		,tellNumTitle : ["숫자 좀 말해줘요.","TELL ME THIS NUMBER","この番号を言ってくれ"]
		,enterNum : ["숫자 입력.","Enter The Number.","番号を入力"]
		,langKo : ["한국어", "KOREAN","韓国"]
		,langEn : ["영어","English","アメリカ" ]
		,langJp : ["일본어","Japanese","日本"]
		,footerText : [
		 "이 사이트는 <a href='https://howsecureismypassword.net'>[내 비밀번호는 얼마나 안전할까?]</a>의 복제 사이트 입니다."+
		 "<br>학습을 위한 <a href='https://github.com/CloneProject'>클론 프로젝트</a>의 일부로 만들었습니다. "+
		 "<br>신 미성 제작 2017년 12월 18일 - 2018년 1월 18일"
		 ,
		 "This site is a clone site of <a href='https://howsecureismypassword.net'>HOW SECURE IS MY PASSWORD?</a>."+
		 "<br>It was created as part of a <a href='https://github.com/CloneProject'>CLONE PROJECT</a> for a studing."+
		 "<br>Created by miseongShin in Dec 18, 2017 - Jan 18, 2018"
		 ,
		 "このサイトは、<a href='https://howsecureismypassword.net'>[パスワードはどのように安全か？]</a>の複製サイトです。"+
         "<br>学習のための<a href='https://github.com/CloneProject'>クローンプロジェクト</a>の一部として作成しました。"+
         "<br>新美声製作2017年12月18日 - 2018年1月18日"
		 ]
	}
	,setLanguage : function(){
		var lang = navigator.language || navigator.userLanguage;
		var num = tellLang.lang[lang.substring(0,2)];
		if(typeof num == "undefined"){
			num =1;
		}
			document.getElementById("writer").text = tellLang.info.writer[num];
			document.getElementById("tellNum-title").text = tellLang.info.tellNumTitle[num];
			document.getElementById("tellme-title").textContent = tellLang.info.tellNumTitle[num];
			document.getElementsByTagName("title")[0].text = tellLang.info.tellNumTitle[num];
			document.getElementById("ENTER").placeholder = tellLang.info.enterNum[num];
			document.getElementById("lang-ko").text = tellLang.info.langKo[num];
			document.getElementById("lang-en").text = tellLang.info.langEn[num];
			document.getElementById("lang-jp").text = tellLang.info.langJp[num];
			document.getElementsByTagName("footer")[0].innerHTML  = tellLang.info.footerText[num];
	}
	, init : function(){
		tellLang.setLanguage();
	}
}

