function myReady(fn){
	//判断浏览器
	if( document.addEventListener ){
		document.addEventListener("DOMContentLoaded",fn,false);
	} else{
		IEcontentLoaded(fn);
	}
			
	//IE模拟
	function IEcontentLoaded(fn){
		var d = window.document;
		var done = false;
		//只执行一次的回调init函数
		var init = function(){
			if(!done){
				done=true;
				fn();
			}
		};
						
		//IE
		(function(){
			try{
				//dom树未创建完成的时候抛出错误
				d.documentElement.doScroll('left');
			}catch(e){
				//延迟再试一次，return递归
				setTimeout(arguments.callee, 50);
				return;
			}//没有错误的时DOM树创建完毕，然后立即执行用户回调
			init();
		})();
		
		
		//监听document加载状态
		d.onreadystatechange = function(){
			if(d.readyState == 'complete'){
				d.onreadystatechange = null;
				init();
			}	
		};	
	}	
}