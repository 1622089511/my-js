		function Tab(id){	    
		    this.oDiv = document.getElementById(id);
		    this.aBtn = this.oDiv.getElementsByTagName('input');
		    this.aDiv = this.oDiv.getElementsByTagName('div');

			var _this =this;												 //保存oTab		
			for(var i=0;i<this.aBtn.length;i++){
				this.aBtn[i].index = i;
				this.aBtn[i].onclick=function (){
				    _this.tab(this);											 //调用实例化对象传递当前btn的值
				}
			}
		}
		
		Tab.prototype.tab=function(oBtn){   
		    for(var i=0;i<this.aBtn.length;i++){
		    	this.aBtn[i].className='';
		    	this.aDiv[i].className = '';
		    }
		    oBtn.className = 'active';								 //要被点击的按钮改变，而不是new出来的对象，所以这里不用this
		    this.aDiv[oBtn.index].className = 'block';
		}