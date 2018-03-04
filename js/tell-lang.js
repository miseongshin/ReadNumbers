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
    langUnitSize: {
        "0" : 4,
        "1" : 3,
        "2" : 4,
        "3" : 4
    },
    info: {
        and: ["그리고", "and", "と", "和"]
        ,selReadLang: ["숫자 읽기 언어", "Numeric reading language : ", "数字を読む言語 : ", "数字阅读语言："]
        ,tellNumTitle: ["숫자 좀 말해줘요.", "TELL ME THIS NUMBER", "この番号を言ってくれ", "告诉我这个数字"]
        ,enterNum: ["숫자 입력.", "Enter The Number.", "番号を入力", "输入号码"]
        ,langKo: ["한국어", "KOREAN", "韓国", "韩国语"]
        ,langEn: ["영어", "English", "アメリカ", "英语"]
        ,langJp: ["일본어", "Japanese", "日本", "日本语"]
        ,langZh: ["중국어", "Chinese", "中国", "中国语"]
        ,placeholder:["숫자를 입력해주세요. 예) 1234", "Enter The Number ex) 1234", "番号を入力してください。 例) 1234","输入号码。 例子) 1234"]
        ,headerInfo : ["다국어 숫자읽기, 숫자를 입력하면 설명이 나옵니다."]
        ,footerText: [
        "<br><a href='https://miseongshin.github.io/'>신 미성</a> 제작 2017년 12월 - 2018년 3월"
        ,
        "<br>Created by <a href='https://miseongshin.github.io/'> miseongShin</a> in Dec 2017 - Mar 2018"
        ,
        "<br><a href='https://miseongshin.github.io/'>申美星</a> 製作2017年12月 - 2018年3月"
        ,
        "<br><a href='https://miseongshin.github.io/'> 申美星 </a>创建, 在2017年12月 - 2018年3月"
        ]
    },
    langUnitArr: {
    	0 : ["","만","억","조","경","해","서","양","구","간","정","재","극","항아사","아승기","나유타","불가사의","무량대수"],
        1 : ["","Thousand","Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion","Septillion","Octillion","Nonillion","Decillion","Undecillion","Duodecillion","Tredecillion","Quattuordecillion","Quindecillion","Sexdecillion","Septendecillion","Octodecillion","Novemdecillion","Vigintillion","Centillion"],
        2 : ["","万","億","兆","京","垓","𥝱","穰","溝","澗","正","載","極","恒河沙","阿僧祇","那由他","不可思議","無量大数"],
        3 : ["","万","亿","兆","京","垓","秭","穰","溝","澗","正","載","極","恒河沙","阿僧祇","那由他","不可思議","無量大數"]
    },
    lang1Arr : {
    	0 : ["영","일","이","삼","사","오","육","칠","팔","구" ],
        1 : ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine", "Ten", "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen" ],
        2 : ["零","一","二","三","四","五","六","七","八","九" ],
        3 : ["〇","一","二","三","四","五","六","七","八","九" ]
    },
    lang10Arr : {
    	0 : ["","십","백","천"],
        1 : ["","ty","Hundred","Thousand"],
        2 : ["","十","百","千"],
        3 : ["","十","百","千"] 
    },
    lang20Arr : {
        1 : ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"]
    },
    toolong : {
        0 : "숫자가 너무 길어서 읽을 수 없습니다. " ,
        1 : "", 
        2 : "",
        3 : ""
    },
    bindAll: function() {

        $tellLang.init();
    },
    setLanguage: function() {
        var langNum = $tellLang.getSiteLang();
        var lang = ['korean','english','japanese','chinese'];
        var btnNum = 2;
        for (var i = 1; i < lang.length+1; i++) {
            if (i==langNum) {
                $("btn-1").removeClass(lang[i]).addClass(lang[langNum]);
                $("#btn-1").attr("value",langNum); 
            } else {
                $("#btn-"+btnNum).removeClass(lang[i]).addClass(lang[i]);
                $("#btn-"+btnNum).attr("value",i);      
                btnNum++;   
            }
        }
        $tellLang.setSiteLang(langNum);
    },
    getSiteLang : function(){
        var lang = navigator.language || navigator.userLanguage;
        var num = $tellLang.lang[lang.substring(0, 2)];
        if (typeof num == "undefined") {
            alert("Not supporting the language of your browser, We provide in English.");
            num = 1;
        }
        return num;
    },
    setSiteLang: function(num) {

        if ($("footer").html()==$tellLang.info.footerText[num]) {
            return false;
        }

        $("#1stLang").val(num);

        $("header .and").text($tellLang.info.and[num]);
        $(".korean").text($tellLang.info.langKo[num]);
        $(".english").text($tellLang.info.langEn[num]);
        $(".japanese").text($tellLang.info.langJp[num]);
        $(".chinese").text($tellLang.info.langZh[num]);
        $("footer").html($tellLang.info.footerText[num]);
        $("#ENTER").attr("placeholder", $tellLang.info.placeholder[num]);


/*    var $titleImage = $("main .title-image>img") ;
    if ($titleImage.attr('src') =="") {
        $titleImage.css('height', 0);
        $titleImage.attr('src', "./image/title/number-title-header-"+Object.keys($tellLang.lang)[num]+".png");
        var maxWidth = $titleImage.css('max-width');
        $titleImage.animate({width: maxWidth}, 1000);
    } else {
       
    }*/
    $(".title-image>img").attr('src', "./image/title/number-title-header-"+Object.keys($tellLang.lang)[num]+".png");


},
init: function() {
    $tellLang.setLanguage();
}
}