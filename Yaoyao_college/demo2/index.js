var text = document.getElementById("text");
var tip1 = document.getElementById("tip1");
var password = document.getElementById("password");
var tip2 = document.getElementById("tip2");
var pwd_2 = document.getElementById("pwd_2");
var tip3 = document.getElementById("tip3");
var email = document.getElementById("email");
var tip4 = document.getElementById("tip4");
var tel = document.getElementById("tel");
var tip5 = document.getElementById("tip5");
var button = document.getElementById("button");

var istrue = false;

//定义获取输入的字符数的函数
var getByteLen = function(val){
    var len = 0;
    for (var i = 0; i < val.length; i++) {
         var a = val.charAt(i);
         //如果为汉字，字符数就加2
         if (a.match(/[^\x00-\xff]/ig) != null) 
        {
            len += 2;
        }
        else
        {
            len += 1;
        }
    }
    return len;
}

//名称的规则提示
function text_tip(){
    tip1.innerHTML="必填，长度为4-16个字符";
}

//验证名称的函数
function verify_text(){
    //获取输入的字符数
    var lens = getByteLen(text.value);
    if(lens==0){
        text.style.border=2+'px'+' '+'solid'+' '+'red';
        tip1.innerHTML="姓名不能为空";
        tip1.style.color="red";
        istrue = false;
    }
    else if(lens>=4 && lens<=16){
        text.style.border=2+'px'+' '+'solid'+' '+'#67BB4C';
        tip1.innerHTML="名称可用";
        tip1.style.color="#67BB4C";
        istrue = true;
    }
    else{
        text.style.border=2+'px'+' '+'solid'+' '+'red';
        tip1.innerHTML="姓名格式不正确";
        tip1.style.color="red";
        istrue = false;
    }
}

//密码的规则提示
function password_tip(){
    tip2.innerHTML="必填，长度为4-16个数字或字母";
}

//验证密码的函数
function verify_password(){
    //获取输入的字符数
    var lens = getByteLen(password.value);
    if(lens==0){
        password.style.border=2+'px'+' '+'solid'+' '+'red';
        tip2.innerHTML="密码不能为空";
        tip2.style.color="red";
        istrue = false;
    }
    else if(lens>=4 && lens<=16){
        password.style.border=2+'px'+' '+'solid'+' '+'#67BB4C';
        tip2.innerHTML="密码可用";
        tip2.style.color="#67BB4C";
        istrue = true;
    }
    else{
        password.style.border=2+'px'+' '+'solid'+' '+'red';
        tip2.innerHTML="密码格式不正确";
        tip2.style.color="red";
        istrue = false;
    }
}

//确认密码的规则提示
function pwd_2_tip(){
    tip3.innerHTML="请再次确认密码";
}

//验证确认密码的函数
function verify_pwd_2(){
    //获取输入的字符数
    var lens = getByteLen(pwd_2.value);
    var password_1 = password.value;
    var password_2 = pwd_2.value;
    if(lens==0){
        pwd_2.style.border=2+'px'+' '+'solid'+' '+'red';
        tip3.innerHTML="密码不能为空";
        tip3.style.color="red";
        istrue = false;
    }
    else if(password_1==password_2){
        pwd_2.style.border=2+'px'+' '+'solid'+' '+'#67BB4C';
        tip3.innerHTML="密码输入一致";
        tip3.style.color="#67BB4C";
        istrue = true;
    }
    else{
        pwd_2.style.border=2+'px'+' '+'solid'+' '+'red';
        tip3.innerHTML="两次密码输入不一致";
        tip3.style.color="red";
        istrue = false;
    }
}

//邮箱的规则提示
function email_tip(){
    tip4.innerHTML="请输入邮箱";
}

//验证确认密码的函数
function verify_email(){
    var email_1 = email.value;
    //匹配邮箱的正则表达式
    var re = /^[a-zA-Z\d]+[a-zA-Z\d\.]*\@+[a-zA-Z\d]+\.+[a-z]{2,6}$/;
    if(re.test(email_1)){
        email.style.border=2+'px'+' '+'solid'+' '+'#67BB4C';
        tip4.innerHTML="邮箱输入正确";
        tip4.style.color="#67BB4C";
        istrue = true;
    }
    else{
        email.style.border=2+'px'+' '+'solid'+' '+'red';
        tip4.innerHTML="邮箱格式不正确";
        tip4.style.color="red";
        istrue = false;
    }
}

//手机号码的规则提示
function tel_tip(){
    tip5.innerHTML="请输入手机号";
}

//验证手机号码的函数
function verify_tel(){
    var tel_1 = tel.value;
    //匹配手机的正则表达式
    var re = /^1(3|4|5|7|8)[0-9]\d{8}$/;
    if(re.test(tel_1)){
        tel.style.border=2+'px'+' '+'solid'+' '+'#67BB4C';
        tip5.innerHTML="手机号输入正确";
        tip5.style.color="#67BB4C";
        istrue = true;
    }
    else{
        tel.style.border=2+'px'+' '+'solid'+' '+'red';
        tip5.innerHTML="手机格式不正确";
        tip5.style.color="red";
        istrue = false;
    }
}

//点击提交按钮进行综合验证
button.onclick=function(){
    if(istrue && text && password.value!="" && pwd_2.value!="" && email.value!="" && tel.value!=""){
        alert("提交成功！");
        return true;
    }
    else{
        alert("输入有误！");
        return false;
    }
}
