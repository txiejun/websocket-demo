/**
 * @Author cdtangxiejun
 * @Contact cdtangxiejun@jd.com
 * @Time 2017/12/9 下午6:10
 * @desc 客户端 http://websocket.org/echo.html
 */

window.onload=function(){
    var ws=new WebSocket("ws://127.0.0.1:8088");
    var oText=document.getElementById('message');
    var oSend=document.getElementById('send');
    var oClose=document.getElementById('close');
    var oUl=document.getElementsByTagName('ul')[0];
    ws.onopen=function(){
        oSend.onclick=function(){
            if(!/^\s*$/.test(oText.value)){
                ws.send(oText.value);
            }
        };

    };
    ws.onmessage=function(msg){
        var str="<li>"+msg.data+"</li>";
        oUl.innerHTML+=str;
    };
    ws.onclose=function(e){
        console.log("已断开与服务器的连接");
        ws.close();
    }
}
