function $(id){//id 是形参  是传进来的  $是函数名，
	return document.getElementById(id);//这是返回获取到的这个id的标签。
}

//$("text1").value; //$就相当于document.getElementById

/* 功能：返回true  和false 是否查找到这个数
	参数1:数组；参数2：目标；
	返回值：返回true  和false 是否查找到这个数
*/
function has(arr,n){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==n){
			return true;	
		}
	}
	return false;
}
/*功能：返回2个数之间的随机数；
	参数1：开始数；
	参数2：结束数；
	返回值：随机整数；
*/
function suiji(min,max){
	var num = max-min;
	num = paseInt(Match.random()*(num+1));
	return num+min;
}

/*
功能： 我的时间



*/

function formDate(date){//传入当前时间
	var date = new Date;//括号不写2为当前时间
	var year = date.getFullYear();//年
	var month = date.getMonth()+1;//月
	var day = date.getDate();//日
	var hours = date.getHours();//时
	var minutes = date.getMinutes();//分
	return year+"/"+month+"/"+day+"/"+hours+":"+minutes;
}