//模拟获取JSON数据
var obj = {
    "score": [
        {
            "Name": "小明",
            "Chinese": "80",
            "Math": "90",
            "English": "70",
            "Total_score": "240"
        },
        {
            "Name": "小红",
            "Chinese": "90",
            "Math": "60",
            "English": "90",
            "Total_score": "240"
        },
        {
            "Name": "小亮",
            "Chinese": "60",
            "Math": "100",
            "English": "70",
            "Total_score": "230"
        },
         {
            "Name": "小周",
            "Chinese": "70",
            "Math": "100",
            "English": "80",
            "Total_score": "250"
        }
    ]
}

//添加td元素并设置样式
var addNode = function(i,pro,Newtr){
	var node = document.createElement("td");
	var textnode = document.createTextNode(obj.score[i][pro]);
	node.appendChild(textnode);
	node.setAttribute("class","title bg");
	Newtr.appendChild(node);
}

//添加整行的元素
var addDataName=function(i){
	var tr = document.createElement("tr");
	//向表格添加一行tr
	document.getElementById("tbody").appendChild(tr);
	//向新的tr添加元素
	addNode(i,"Name",tr);
	addNode(i,"Chinese",tr);
	addNode(i,"Math",tr);
	addNode(i,"English",tr);
	addNode(i,"Total_score",tr);
}

//动态添加所有元素
var addData=function(){
	for(var i=0; i<obj.score.length; i++){
		addDataName(i);
	}
}

addData();

//排序功能
var table_tbody = document.getElementById("tbody");
var table_tr = table_tbody.getElementsByTagName("tr");
var sortFunc = function(m,idx){
	//临时数组temp_arr保存被点击的表头对应的列内容
	var temp_arr = [];
	//temp_tr_arr保存临时tr数组
	var temp_tr_arr = [];

	//如果已经排序，则倒序
	if(idx){
		for(var j=0; j<table_tr.length; j++){
			temp_arr.push(table_tr[j].getElementsByTagName("td")[m].innerHTML);
			temp_tr_arr.push(table_tr[j].cloneNode(true));
		}
		//删除原来的表格元素
		var len = table_tr.length
		for(var i=0; i<len; i++){
			table_tbody.removeChild(table_tbody.getElementsByTagName("tr")[0]);
		}
		temp_arr.reverse();
		for(var k=0; k<temp_arr.length; k++){
			for(var j=0; j<temp_arr.length; j++){
				if(temp_arr[k]==temp_tr_arr[j].getElementsByTagName("td")[m].innerHTML){
					table_tbody.appendChild(temp_tr_arr[j]);
				}
			}
		}
	}
	//如果没有排序，则按数字从大到小排序
	else {
		for(var j=0; j<table_tr.length; j++){
			temp_arr.push(table_tr[j].getElementsByTagName("td")[m].innerHTML);
			temp_tr_arr.push(table_tr[j].cloneNode(true));
		}
		//删除原来的表格元素
		var len = table_tr.length
		for(var i=0; i<len; i++){
			table_tbody.removeChild(table_tbody.getElementsByTagName("tr")[0]);
		}
		temp_arr.sort(function(a,b){
			return b-a;
		});
		for(var k=0; k<temp_arr.length; k++){
			for(var j=0; j<temp_arr.length; j++){
				if(temp_arr[k]==temp_tr_arr[j].getElementsByTagName("td")[m].innerHTML){
					table_tbody.appendChild(temp_tr_arr[j]);
				}
			}
		}
	}
}

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var isFalse = [false,false,false,false];
//为元素设置排序属性
function starSort(element,i){
    element.onclick = function(){
        sortFunc(i,isFalse[i-1]);
        for(let j=0;j<isFalse.length; j++){
            isFalse[j]=false;
        }
        isFalse[i-1] = !(isFalse[i-1]);
    }
}

starSort(img1,1);
starSort(img2,2);
starSort(img3,3);
starSort(img4,4);