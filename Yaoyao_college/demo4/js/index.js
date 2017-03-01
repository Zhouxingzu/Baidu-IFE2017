//封装获取元素的函数
var getElem = function(element){
    return document.getElementById(element);
}

var redblock = getElem("redblock");
var text = getElem("text");
var button = getElem("button");
var left = getElem("left");
var right = getElem("right");

//向左旋转
var turnLeft = function(){
    //如果transform值存在
    if(redblock.style.transform){
        var baseDeg = redblock.style.transform;
        //提取角度数字的正则表达式
        var rel = /\-*\d+/;
        //获取当前角度的Number类型
        var deg = baseDeg.match(rel).join("");
        //将选择角度加上-90度
        redblock.style.transform = "rotate("+(parseInt(deg)-90)+"deg)"; 
    }
    //如果transform值不存在，添加属性
    else{
       redblock.style.transform = "rotate(-90deg)"; 
    }
}

//向右旋转
var turnRight = function(){
    if(redblock.style.transform){
        var baseDeg = redblock.style.transform;
        //提取角度数字的正则表达式
        var rel = /\-*\d+/;
        //获取当前角度的Number类型
        var deg = baseDeg.match(rel).join("");
        //将选择角度加上90度
        redblock.style.transform = "rotate("+(parseInt(deg)+90)+"deg)"; 
    }
    else{
       redblock.style.transform = "rotate(90deg)"; 
    }
}

//向头部方向移动一格
var toGo = function(){
    //获取当前的属性值
    var top = parseInt(getComputedStyle(redblock).top);
    var left = parseInt(getComputedStyle(redblock).left);
    if(redblock.style.transform){
        var baseDeg = redblock.style.transform;
        var rel = /\-*\d+/;
        var deg = baseDeg.match(rel).join("");
        if(deg==0 || deg%360==0){
            //到达顶部就停止移动
            if(top==0){
                redblock.style.top = top +"px";
            }
            else{
                //向上移动
                redblock.style.top = (top-40) +"px";
            }
        }
        else if((deg-90)%360==0){
            //到达右边界就停止移动
            if(left==360){
                redblock.style.left = left +"px";
            }
            else{
               //向右移动
                redblock.style.left = (left+40) +"px"; 
            }
        }
        else if((deg-180)%360==0){
            //到达底部边界就停止移动
            if(top==360){
                redblock.style.top = top +"px";
            }
            else{
                //向下移动
                redblock.style.top = (top+40) +"px";
            }

        }
        else if((deg-270)%360==0){
            //到达左边界就停止移动
            if(left==0){
                redblock.style.left = left +"px";
            }
            else{
                //向左移动
                redblock.style.left = (left-40) +"px"; 
            }
        }
    }
    else{
       redblock.style.transform = "rotate(0deg)"; 
       redblock.style.top = (top-40) +"px"; 
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