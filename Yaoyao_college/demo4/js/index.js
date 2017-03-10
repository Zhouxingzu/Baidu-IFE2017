//封装获取元素的函数
var getElem = function(element){
    return document.getElementById(element);
}

var canvas = document.getElementById("myCanvas");
var cxt = canvas.getContext("2d");
{
    //画里面边框线
    for(var i=80;i<440;i+=40){
        cxt.beginPath();
        cxt.strokeStyle = "#D7D7D7";
        cxt.moveTo(i,40);
        cxt.lineTo(i,440);
        cxt.stroke();
        cxt.moveTo(40,i);
        cxt.lineTo(440,i);
        cxt.stroke();
    }
}
{
    //画最外的边框线
    cxt.beginPath();
    cxt.strokeStyle = "black";
    cxt.moveTo(40,40);
    cxt.lineTo(440,40);
    cxt.lineTo(440,440);
    cxt.lineTo(40,440);
    cxt.lineTo(40,40);
    cxt.stroke();
}
//横排和竖排的数字
cxt.font="20px Arial";
for(var i=1; i<=9; i++){
    cxt.fillText(i,15+i*40,30);
    cxt.fillText(i,15,30+i*40);
}
cxt.fillText("10",410,30);
cxt.fillText("10",10,430);


var redblock = getElem("redblock");
var text = getElem("text");
var button = getElem("button");
var left = getElem("left");
var lastTop = 280;
//设定默认值
redblock.style.transform = "translate(0px, 0px) rotate(0deg)";

//向左旋转
var turnLeft = function(){
    var baseDeg = redblock.style.transform;
    var rel = /\-*\d+[a-z]{3}/g;   //匹配角度数值的正则表达式
    var deg = baseDeg.match(rel)[0];
    //用新的角度替换旧角度
    var newDeg = baseDeg.replace(deg,parseInt(deg)-90+"deg");
    redblock.style.transform = newDeg; 
}

//向右旋转
var turnRight = function(){
    var baseDeg = redblock.style.transform;
    var rel = /\-*\d+[a-z]{3}/g;   //匹配角度数值的正则表达式
    var deg = baseDeg.match(rel)[0];
    //用新的角度替换旧角度
    var newDeg = baseDeg.replace(deg,parseInt(deg)+90+"deg");
    redblock.style.transform = newDeg; 
}

//向头部方向移动一格
var toGo = function(){
    var baseDeg = redblock.style.transform;
    var rel_x = /\-*\d+\w{2}\,/g;   //匹配x轴的正则表达式:[100px,]
    var rel_y = /\s+\-*\d+\w{2}/g;   //匹配y轴的正则表达式:[ 100px]
    var rel = /\-*\d+[a-z]{3}/g;   //匹配角度数值的正则表达式
    var x = baseDeg.match(rel_x)[0];
    var y = baseDeg.match(rel_y)[0];
    var deg = parseInt(baseDeg.match(rel)[0]);

    //用新的移动距离替换旧移动距离
    //向上移动
    if(deg==0 || deg%360==0){
        if(parseInt(y)<=-200){
            //到达顶部停止移动
        }
        else{
            var newstr = baseDeg.replace(y," "+(parseInt(y)-40)+"px");
            redblock.style.transform = newstr; 
        }  
    }
    //向下移动
    if((deg-180)%360==0){
        if(parseInt(y)>=160){
            //到达底部停止移动
        }
        else{
            var newstr = baseDeg.replace(y," "+(parseInt(y)+40)+"px");
            redblock.style.transform = newstr; 
        }  
    }
    //向左移动
    if((deg-270)%360==0){
        if(parseInt(x)<=-200){
            
        }
        else{
            var newstr = baseDeg.replace(x,(parseInt(x)-40)+"px,");
            redblock.style.transform = newstr; 
        }  
    }
    //向右移动
    if((deg-90)%360==0){
        if(parseInt(x)>=160){
            //到达右边界停止移动
        }
        else{
            var newstr = baseDeg.replace(x," "+(parseInt(x)+40)+"px,");
            redblock.style.transform = newstr; 
        }  
    }
}

button.onclick = function(){
    if(text.value=="GO"){
        toGo();
    }
    else if(text.value=="TUN LEF"){
        turnLeft();
    }
    else if(text.value=="TUN RIG"){
        turnRight();
    }
     else if(text.value=="TUN BAC"){
        turnRight();
        turnRight();
    }
}