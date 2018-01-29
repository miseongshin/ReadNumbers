var $tellLang = {
    data: {
        langKind: ["zero4", "zero3", "サイトの言語を変更:"]
    },
    lang: {
        "ko": 0,
        "en": 1,
        "ja": 2,
        "zh": 3
    },
    info: {
        comment: ["그리고", "and", "と", "和"],
        selReadLang: ["숫자 읽기 언어 : ", "Numeric reading language : ", "数字を読む言語 : ", "数字阅读语言："],
        tellNumTitle: ["숫자 좀 말해줘요.", "TELL ME THIS NUMBER", "この番号を言ってくれ", "告诉我这个数字"],
        enterNum: ["숫자 입력.", "Enter The Number.", "番号を入力", "输入号码"],
        langKo: ["한국어", "KOREAN", "韓国", "韩国语"],
        langEn: ["영어", "English", "アメリカ", "英语"],
        langJp: ["일본어", "Japanese", "日本", "日本语"],
        langZh: ["중국어", "Chinese", "中国", "中国语"],
        footerText: [
            "이 사이트는 <a href='https://howsecureismypassword.net'>[내 비밀번호는 얼마나 안전할까?]</a>의 복제 사이트 입니다." +
            "<br>학습을 위한 <a href='https://github.com/CloneProject'>클론 프로젝트</a>의 일부로 만들었습니다. " +
            "<br><a href='https://miseongshin.github.io/'>신 미성</a> 제작 2017년 12월 18일 - 2018년 2월 24일",
            "This site is a clone site of <a href='https://howsecureismypassword.net'>HOW SECURE IS MY PASSWORD?</a>." +
            "<br>It was created as part of a <a href='https://github.com/CloneProject'>CLONE PROJECT</a> for a studing." +
            "<br>Created by <a href='https://miseongshin.github.io/'> miseongShin</a> in Dec 18, 2017 - Fab 24, 2018",
            "このサイトは、<a href='https://howsecureismypassword.net'>[パスワードはどのように安全か？]</a>の複製サイトです。" +
            "<br>学習のための<a href='https://github.com/CloneProject'>クローンプロジェクト</a>の一部として作成しました。" +
            "<br><a href='https://miseongshin.github.io/'>申美星</a>製作2017年12月18日 - 2018年2月24日",
            "这个网站是<a href='https://howsecureismypassword.net'>安全是我的密码?</a>的克隆网站。" +
            "<br>它是作为<a href='https://github.com/CloneProject'> CLONE PROJECT </a>的一部分创建的，用于学习。" +
            "<br>在2017年12月18日 - 2018年1月18日由<a href='https://miseongshin.github.io/'> 申美星 </a>创建"
        ]
    },
    langUnitArr: {
    	0 : ["","만","억","조","경","해","서","양","구","간","정","재","극","항아사","아승기","나유타","불가사의"]
    },
    lang1Arr : {
    	0 : ["","일","이","삼","사","오","육","칠","팔","구" ]
    },
    lang10Arr : {
    	0 : ["","십","백","천"] 
    },
    bindAll: function() {
        $(document).on("change",".1st-lang-select",function(e){
            var num = $(".1st-lang-select option:selected").val();
                $tellLang.setSiteLang(num);
                console.log(num);
        });
        $tellLang.init();
    },
    setLanguage: function() {
        var num = $tellLang.getSiteLang();
        $tellLang.setSiteLang(num);
    },
    getSiteLang : function(){
        var lang = navigator.language || navigator.userLanguage;
        var num = $tellLang.lang[lang.substring(0, 2)];
        if (typeof num == "undefined") {
            num = 1;
        }
        return num;
    },
    setSiteLang: function(num) {
        var imagePath;
        var comment1 = "";
        var comment2 = "";
        if (num == 0 ) {
           imagePath = "./image/title/number-title-header-ko.png";

        } else {
            imagePath = "./image/title/number-title-header-en.png";

        }

        if (num ==1 ) {
            comment1 = "in";
        }else{
            comment1 = "";
        }
        $("header .comment1").text(comment1);
        $("header .comment2").text($tellLang.info.comment[num]);
        $("header .title-image img").attr('src',imagePath);
        $(".korean").text($tellLang.info.langKo[num]);
        $(".english").text($tellLang.info.langEn[num]);
        $(".japanese").text($tellLang.info.langJp[num]);
        $(".chinese").text($tellLang.info.langZh[num]);

        /*document.getElementById("select-site-lang").innerHTML = $tellLang.info.selSiteLang[num];*/
        /*document.getElementById("select-read-lang").innerHTML = $tellLang.info.selReadLang[num];*/
        /*document.getElementById("tellme-title").textContent = $tellLang.info.tellNumTitle[num];*/
   /*     document.getElementsByTagName("title")[0].text = $tellLang.info.tellNumTitle[num];
        document.getElementById("ENTER").placeholder = $tellLang.info.enterNum[num];
        document.getElementsByTagName("footer")[0].innerHTML = $tellLang.info.footerText[num];
*/

    },
    init: function() {
        $tellLang.setLanguage();
    }
}