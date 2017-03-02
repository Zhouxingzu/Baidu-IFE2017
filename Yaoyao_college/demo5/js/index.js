//封装获取元素的函数
var getElem = function(element){
    return document.getElementById(element);
}

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
        if(parseInt(y)<=-240){
            //到达顶部停止移动
        }
        else{
            var newstr = baseDeg.replace(y," "+(parseInt(y)-40)+"px");
            redblock.style.transform = newstr; 
        }  
    }
    //向下移动
    if((deg-180)%360==0){
        if(parseInt(y)>=120){
            //到达底部停止移动
        }
        else{
            var newstr = baseDeg.replace(y," "+(parseInt(y)+40)+"px");
            redblock.style.transform = newstr; 
        }  
    }
    //向左移动
    if((deg-270)%360==0){
        if(parseInt(x)<=-240){
            
        }
        else{
            var newstr = baseDeg.replace(x,(parseInt(x)-40)+"px,");
            redblock.style.transform = newstr; 
        }  
    }
    //向右移动
    if((deg-90)%360==0){
        if(parseInt(x)>=120){
            //到达右边界停止移动
        }
        else{
            var newstr = baseDeg.replace(x," "+(parseInt(x)+40)+"px,");
            redblock.style.transform = newstr; 
        }  
    }
}

//向屏幕的左侧移动一格，方向不变
var TRA_LEF = function(){
    var baseDeg = redblock.style.transform;
    var rel_x = /\-*\d+\w{2}\,/g;   //匹配x轴的正则表达式:[100px,]
    var x = baseDeg.match(rel_x)[0];
    var newstr = baseDeg.replace(x,(parseInt(x)-40)+"px,");
    redblock.style.transform = newstr; 
}

//向屏幕的右侧移动一格，方向不变
var TRA_RIG = function(){
    var baseDeg = redblock.style.transform;
    var rel_x = /\-*\d+\w{2}\,/g;   //匹配x轴的正则表达式:[100px,]
    var x = baseDeg.match(rel_x)[0];
    var newstr = baseDeg.replace(x,(parseInt(x)+40)+"px,");
    redblock.style.transform = newstr; 
}

//向屏幕的上面移动一格，方向不变
var TRA_TOP = function(){
    var baseDeg = redblock.style.transform;
    var rel_y = /\s+\-*\d+\w{2}/g;   //匹配y轴的正则表达式:[ 100px]
    var y = baseDeg.match(rel_y)[0];
    var newstr = baseDeg.replace(y," "+(parseInt(y)-40)+"px");
    redblock.style.transform = newstr; 
}

//向屏幕的下面移动一格，方向不变
var TRA_BOT = function(){
    var baseDeg = redblock.style.transform;
    var rel_y = /\s+\-*\d+\w{2}/g;   //匹配y轴的正则表达式:[ 100px]
    var y = baseDeg.match(rel_y)[0];
    var newstr = baseDeg.replace(y," "+(parseInt(y)+40)+"px");
    redblock.style.transform = newstr; 
}

//方向转向屏幕左侧，并向屏幕的左侧移动一格
var MOV_LEF = function(){
    var baseDeg = redblock.style.transform;
    var rel = /\-*\d+[a-z]{3}/g;   //匹配角度数值的正则表达式
    var deg = baseDeg.match(rel)[0];
    //用-90度替换旧角度
    var newDeg = baseDeg.replace(deg,-90+"deg");
    redblock.style.transform = newDeg; 
    toGo();
}

//方向转向屏幕上面，向屏幕的上面移动一格
var MOV_TOP = function(){
    var baseDeg = redblock.style.transform;
    var rel = /\-*\d+[a-z]{3}/g;   //匹配角度数值的正则表达式
    var deg = baseDeg.match(rel)[0];
    //用0度替换旧角度
    var newDeg = baseDeg.replace(deg,0+"deg");
    redblock.style.transform = newDeg; 
    toGo();
}

//方向转向屏幕右侧，向屏幕的右侧移动一格
var MOV_RIG = function(){
    var baseDeg = redblock.style.transform;
    var rel = /\-*\d+[a-z]{3}/g;   //匹配角度数值的正则表达式
    var deg = baseDeg.match(rel)[0];
    //用0度替换旧角度
    var newDeg = baseDeg.replace(deg,90+"deg");
    redblock.style.transform = newDeg; 
    toGo();
}

//方向转向屏幕下面，向屏幕的下面移动一格
var MOV_BOT = function(){
    var baseDeg = redblock.style.transform;
    var rel = /\-*\d+[a-z]{3}/g;   //匹配角度数值的正则表达式
    var deg = baseDeg.match(rel)[0];
    //用0度替换旧角度
    var newDeg = baseDeg.replace(deg,180+"deg");
    redblock.style.transform = newDeg; 
    toGo();
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
    else if(text.value=="TRA LEF"){
        TRA_LEF();
    }
    else if(text.value=="TRA TOP"){
        TRA_TOP();
    }
    else if(text.value=="TRA RIG"){
        TRA_RIG();
    }
    else if(text.value=="TRA BOT"){
        TRA_BOT();
    }
    else if(text.value=="MOV LEF"){
        MOV_LEF();
    }
    else if(text.value=="MOV TOP"){
        MOV_TOP();
    }
    else if(text.value=="MOV RIG"){
        MOV_RIG();
    }
    else if(text.value=="MOV BOT"){
        MOV_BOT();
    }
}