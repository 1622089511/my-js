			//构造函数,全局变量变属性
			function Drag(id){
				this.obj = document.getElementById(id);		//全局变量
				this.disX = 0;							
				this.disY = 0;
			}
			//初始化
			Drag.prototype.init=function (){
			    var _this = this;												    //存对象
			    this.obj.onmousedown=function (e){			   //这里这个this.obj指的是div
			     	var e = e || window.event;
			     	_this.mousedown(e);							
			     	return false;												  //阻止默认事件
			    }		    
			}
			//原型方法
			Drag.prototype.mousedown=function (e){	    																	
			   	var _this = this;													
			    this.disX = e.clientX - this.obj.offsetLeft;
			    this.disY = e.clientY - this.obj.offsetTop;
			    
			    document.onmousemove= function (e){
			        var e = e || window.event;
			       	_this.mousemove(e);	  	
			    }
			    document.onmouseup = function (){
			        _this.mouseup();		
			    }
			}	
			Drag.prototype.mousemove= function (e){
			      this.obj.style.left = (e.clientX - this.disX) + 'px';
    			  this.obj.style.top = (e.clientY - this.disY) + 'px';
			}
			Drag.prototype.mouseup = function (){
			    document.onmousemove = document.onmouseup = null;
			}		
			