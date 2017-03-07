
//加载Window类
require(['Window'],function (w){
    $('#box').on('click',function (){
        new w.Window().alert("welcome");
    }
})
