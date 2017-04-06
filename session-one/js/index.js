//总工程
var myFirst={
	init:function(){
		this.scroll();
		this.firstScreen();
	},
	scroll:function(){
		$('#first').addClass('active');
		//屏幕元素
		var $show=$('#allShow');
		//延时器
		var timer;
		// 鼠标滑轮滚动后执行的函数
	    //Firefox只识别DOMMouseScroll
	    var mousewheelevt=(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll": "mousewheel";
	    //为上下键提供翻页功能
	    document.onkeydown=function(e){
	    	var num=-120;
	    	if(mousewheelevt=='DOMMouseScroll'){
	    		num=-num;
	    	}
	    	switch(e.which){
	    		case 38:
	    		
	    		mousewheelEvent(null, num);
	    		break;
	    		
	    		case 40:
	    		mousewheelEvent(null, -num);
	    		return false;
	    		break;
	    	}
	    }
	    
	    function mousewheelEvent(e, delta) {
	        //如果在短时间连续滚动滑轮，那么默认只滚一个屏幕
			clearTimeout(timer);
			timer=setTimeout(function(){
				
				//屏幕内有几个屏的内容
				var theIndex=$show.find('.active').index();
				//屏幕内的屏元素
				var $divShow=$show.children('div');
				//滑轮的动向,用原生js来代替滚动
				var conrert =delta;
				if(mousewheelevt=='mousewheel'){
					conrert=-conrert;
				}
				theIndex=0-theIndex;
				if (conrert > 0) {
			        // 向上滚
			        if(theIndex==0){
			        	//如果已经是第一屏，就不能再向上滚
			        	return;
			        	
			        }
			        
			        theIndex++;
			        
			    } else if (conrert < 0) {
			        // 向下滚
			        if(-theIndex==$divShow.length-1){
			        	
			        	//如果已经是最后一屏，就不能再向下滚
			        	return;
			        }
			       
			        theIndex--;
			    };
			    //console.log(conrert);
			    //屏幕滚动
			    $show.stop().css('top',theIndex*100+'%');
			    //表示现在显示的是哪一个屏幕的内容
			    $divShow.removeClass('active')
			    .eq(theIndex>0?(theIndex):(-theIndex)).addClass('active');
			},300)
	        
	    }
	                 
	    //判断是否是IE
	    if (document.attachEvent) {
	    	
	        document.attachEvent("on"+mousewheelevt, function(e) {
	            mousewheelEvent(e, e.wheelDelta);
	        });
	    }
	
	    //FireFox(DOMMouseScroll)、Chrome、Opera、safari
	    else if (document.addEventListener) {
	    	
	        document.addEventListener(mousewheelevt, function(e) {
	            e=e || window.event;
	            if(e.detail){//Firefox
	                mousewheelEvent(e, e.detail*40);
	            }
	            else if(e.wheelDelta){
	                mousewheelEvent(e, e.wheelDelta);
	            }
	        }, false);
	    }

	},
	firstScreen:function(){
		
		
	}
}

//方法
;var methods={
	func1:function(){
		console.log(1);
	},
	func2:function(){
		console.log(2);
	}
	
}