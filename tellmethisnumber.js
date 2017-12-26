var tellmethisnumber = {
	backgroundColor : {
		default : "#c23333"
	}
	,numberColor : {
		default : "#e7adad"
	}
	,init : function(){
		$(".input").mousedown(function(){
			console.log("움짐");
		});
		/*$(".output").hide();*/
	}

	
};



$(document).ready(function(){
	tellmethisnumber.init();
});