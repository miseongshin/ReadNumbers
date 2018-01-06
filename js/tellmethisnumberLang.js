var tellLang = {
	constant : {
		langCount : 4
	}
	,lang : {
		"ko" : 0
		,"en" : 1
		,"ja" : 2
	}
	,info :{
		selSiteLang : ["사이트 언어 변경 :", "Change Site Language:", "サイトの言語を変更:"]
		,selReadLang : ["숫자 읽기 언어 : ","Numeric reading language : ","数字を読む言語 : "]
		,tellNumTitle : ["숫자 좀 말해줘요.","TELL ME THIS NUMBER","この番号を言ってくれ"]
		,enterNum : ["숫자 입력.","Enter The Number.","番号を入力"]
		,langKo : ["한국어", "KOREAN","韓国"]
		,langEn : ["영어","English","アメリカ" ]
		,langJp : ["일본어","Japanese","日本"]
		,footerText : [
		 "이 사이트는 <a href='https://howsecureismypassword.net'>[내 비밀번호는 얼마나 안전할까?]</a>의 복제 사이트 입니다."+
		 "<br>학습을 위한 <a href='https://github.com/CloneProject'>클론 프로젝트</a>의 일부로 만들었습니다. "+
		 "<br><a href='https://miseongshin.github.io/'>신 미성</a> 제작 2017년 12월 18일 - 2018년 1월 18일"
		 ,
		 "This site is a clone site of <a href='https://howsecureismypassword.net'>HOW SECURE IS MY PASSWORD?</a>."+
		 "<br>It was created as part of a <a href='https://github.com/CloneProject'>CLONE PROJECT</a> for a studing."+
		 "<br>Created by <a href='https://miseongshin.github.io/'> miseongShin</a> in Dec 18, 2017 - Jan 18, 2018"
		 ,
		 "このサイトは、<a href='https://howsecureismypassword.net'>[パスワードはどのように安全か？]</a>の複製サイトです。"+
         "<br>学習のための<a href='https://github.com/CloneProject'>クローンプロジェクト</a>の一部として作成しました。"+
         "<br><a href='https://miseongshin.github.io/'>申美星</a>製作2017年12月18日 - 2018年1月18日"
		 ]
	}
	,bindAll : function(){
		var $siteLangs = document.getElementsByClassName("site-nation");
		for(var i = 0; i < $siteLangs.length; i++) {
            var siteLang = $siteLangs[i];
            siteLang.onclick = function() {
            	console.log(this.id.substring(11));
            	var num = this.id.substring(11);
            	tellLang.setUILang(num);
            }
        }

		tellLang.init();
	}
	,setLanguage : function(){
		var lang = navigator.language || navigator.userLanguage;
		var num = tellLang.lang[lang.substring(0,2)];
		if(typeof num == "undefined"){
			num =1;
		}

		tellLang.setUILang(num);	
	},
	setUILang : function (num){
		for (var i = tellLang.constant.langCount - 1; i >= 0; i--) {
			if (num == i) {
				document.getElementById("site-nation"+i).style.display='none';
			}else {
				document.getElementById("site-nation"+i).style.display='inline';;
			}
		}
			document.getElementById("select-site-lang").innerHTML = tellLang.info.selSiteLang[num];
			document.getElementById("select-read-lang").innerHTML = tellLang.info.selReadLang[num];
			document.getElementById("tellme-title").textContent = tellLang.info.tellNumTitle[num];
			document.getElementsByTagName("title")[0].text = tellLang.info.tellNumTitle[num];
			document.getElementById("ENTER").placeholder = tellLang.info.enterNum[num];
			document.getElementsByTagName("footer")[0].innerHTML  = tellLang.info.footerText[num];
	}
	, init : function(){
		tellLang.setLanguage();
	}
}

