var text = document.getElementById("text");
        var button = document.getElementById("button");
        var tips = document.getElementById("tips");

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
        
        button.onclick=function(){
            //获取输入的字符数
            var lens = getByteLen(text.value);
            if(lens==0){
                text.style.border=2+'px'+' '+'solid'+' '+'red';
                tips.innerHTML="姓名不能为空";
                tips.style.color="red";
                return false;
            }
            else if(lens>=4 && lens<=16){
                text.style.border=2+'px'+' '+'solid'+' '+'#67BB4C';
                tips.innerHTML="姓名格式正确";
                tips.style.color="#67BB4C";
            }
            else{
                text.style.border=2+'px'+' '+'solid'+' '+'red';
                tips.innerHTML="姓名格式不正确";
                tips.style.color="red";
                return false;
            }
        }