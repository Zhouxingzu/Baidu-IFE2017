//获取元素
var getElem = function(selector){
    return document.getElementById(selector);
}

//获取元素样式
var getCls = function(element){
    return element.getAttribute("class");
}

//设置元素样式
var setCls = function(element,cls){
    return element.setAttribute("class",cls);
}

//为元素添加样式
var addCls = function(element,cls){
    var baseCls = getCls(element);
    if(baseCls.indexOf(cls)===-1){
        setCls(element,baseCls+" "+cls);
    }
}

//为元素删除样式
var removeCls = function(element,cls){
    var baseCls = getCls(element);
    if(baseCls.indexOf(cls)!=-1){
        setCls(element,baseCls.replace(cls,' ').replace(/\s+/g,' '));
    }
}

var student = getElem("student");
var notstudent = getElem("notstudent");
var list1 = getElem("list1");
var list2 = getElem("list2");
var select1 = getElem("select1");
var select2 = getElem("select2");

//定义城市和学校
var city = [
    {
        "name":"请选择",
        "school":["请选择"]
    },
    {
        "name":"北京",
        "school":["请选择","北京大学","清华大学","北京师范大学"]
    },
    {
        "name":"上海",
        "school":["请选择","上海交通大学","上海师范大学","上海科技大学","上海工业大学"]
    },
    {
        "name":"重庆",
        "school":["请选择","重庆大学","重庆工商大学","重庆师范大学","重庆交通大学"]
    }
]

//默认状态显示在校生选项卡
if(student.checked){
    addCls(list1,"active");
    removeCls(list2,"active");
}

function check(){
    if(student.checked){
    addCls(list1,"active");
    removeCls(list2,"active");
    }
}
function check2(){
    if(notstudent.checked){
    addCls(list2,"active");
    removeCls(list1,"active");
    }
}

//动态添加option
function addOption(num){  
    //添加num个选项
    for(var i=0; i<num; i++){
        select2.options.add(new Option("text","value")); //这个兼容IE与firefox 
    }
} 

function selectChange(){
    for(var i=0; i<city.length; i++){
        if(select1.value==city[i].name){
            //先删除所有选项option
            select2.options.length=0;
            //再动态添加相应数量的option
            addOption(city[i].school.length);
            for(var j=0; j<city[i].school.length; j++){
                select2.options[j].value = city[i].school[j];
                select2.options[j].innerHTML = city[i].school[j];
            }
        }
    }
}