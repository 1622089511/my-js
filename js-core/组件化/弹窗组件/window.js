define(function (){
    
    function Window(){};
    Window.prototype={
    		alert:function (content){
    			var box = $('<div class="box"></div>');
    			box.appendTo("body");
    			box.html(content);
    		},
    		confirm : function (){
    		    
    		},
    		promt : function (){
    		    
    		}
    	}
    
    //暴漏
    return {
    	Window :  Window
    }
})
