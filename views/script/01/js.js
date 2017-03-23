
/*var time=10;
if(time<20){
    console.log("Good day");

}
else{
    console.log("Good evening");
}
/!*1*!/
var shijian=30;
if(shijian<10){
    console.log("Good")
}
else if(shijian>=10&&shijian<20){
    console.log(" ok")
}
else{
    console.log(" no")
}
var num=1;
if(num===1){
    console.log("num is equal to 1");
}
var number=0;
if(num===1){
    console.log("num is equal to 1");
}
else {
    console.log("num is not equal to 1,the value of num is "+number);
}
var month=5;
if(month===1){
    console.log("January");
}
else if(month===2){
    console.log("February");
}
else if (month===3){
    console.log("march");
}
else {
    console.log("Month is not January,Fe")
}
var d=new Date().getDay();
switch(d){
    case 0:
        x="今天是星期天";
        console.log(x);
        break;
    case 1:
        x="今天是星期一";
        console.log(x);
        break;
    case 2:
        x="今天是星期二";
        console.log(x);
        break;
    case 3:
        x="今天是星期三";
        console.log(x);
        break;
    case 4:
        x="今天是星期四";
        console.log(x);
        break;
    case  5:
        x="今天是星期五";
        console.log(x);
        break;
    case  6:
        x="今天是星期六";
        console.log(x);
        break;
}*/

/*var x=null;
switch (typeof x){
    case "string":
        b="x是字符串";
        console.log(b);
        break;
    case "number":
        b="x是数字";
        console.log(b);
        break;
    case "boolean":
        b="x是布尔值";
        console.log(b);
        break;
    case "undefined":
        b="x是undefined";
        console.log(b);
        break;
    case "object":
        b="x是object";
        console.log(b);
        break;
}*/

/*var x=0;
while (x<=9){
    x++;
    console.log(x);
}*/

/*var x=1;
var i=1;
while (x<100){
    i=i*x;
    console.log(x+"的阶乘是"+i);
    x++;
}
var x=1;
var y=0;
while(x<=100){
    y=y+x;
    x++;
}
console.log(y);*/

/*for(x=0;x<10;x++){
    console.log(x);
}
var i=0;
for(x=0;x<=100;x++){
    i=i+x;
}
console.log(i);
var y=0;
var p=0;
for(x=1;x<=100;x++){
   if(x%2==0){
       y=y+x;
   }
   else{
       p=p+x;
    }
}
console.log(p-y);
for(i=1;i<=9;i++){
    for(j=1;j<=i;j++){
        console.log(i+"*"+j+"="+j*i);
    }
}*/


/*var i=0;
do{
    console.log(i);
    i++;
}
while (i<10);

var m=0;
do{
    console.log("the number is "+m);
    m++;
}
while (m<6);*/

/*var obj={
    "first":"first",
    "zoo":"zoo",
    "2":"2"
};
for(var i in obj){
    console.log(i);
}*/
/* Created by ASUS on 2017/3/20.*/

/*
var person={
    name:"刘兵",
    age: "18",
    height: "170cm",
    tags:['js','web','mobile'],
    city:"成都",
    zhangxiang:"帅"
};*/


/*var string="abcdefg";
var d=Array;
d=string.split("");
d.reverse();
console.log(string);


var number=[1,10,31,33,37,48,60,70,80];
var x=1;
var k=number.indexOf(x);
if(x==1){
    console.log(number.indexOf(1));
}
else if(x==10){
    console.log(number.indexOf(10));
}
else if(x==31){
    console.log(number.indexOf(31));
}
else if(x==33){
    console.log(number.indexOf(33));
}
else if(x==37){
    console.log(number.indexOf(37));
}
else if(x==48){
    console.log(number.indexOf(48));
}
else if(x==60){
    console.log(number.indexOf(60));
}
else if(x==70){
    console.log(number.indexOf(70));
}
else if(x==80){
    console.log(number.indexOf(80));
}
else {
    console.log("-1")
}

str = "abddaabcdeff";
str1 = str.replace("abddaabcdeff","abcdef");
document.write(str + "<br>");
document.write(str1+ "<br>");


var i,a,b,c;
for(i=100;i<1000;i++){
    a=parseInt(i/100);
    b=parseInt((i-a*100)/10);
    c=parseInt(i-a*100-b*10);
    if( a*a*a+b*b*b+c*c*c == i){
        document.write(i+"<br>");
    }}*/

/*var b=1000,c=0.0325,d=1,a;
a=b*Math.pow(1+c,d);
document.write(Math.pow(1+c,d)+"<br>");
document.write(a);*/

/*

var x1=prompt("x1"),x2=prompt("x2"),y1=prompt("y1"),y2=prompt("y2");
var a=Math.pow(x2-x1,2);
var b=Math.pow(y2-y1,2);
alert(Math.sqrt(a+b));
*/


/*var porint1={x1:0,y1:0};
var porint2={x2:0,y2:4};
var porint3={x3:4,y3:4};
var side1=Math.sqrt(Math.pow(porint2.y2-porint1.y1,2)+Math.pow(porint2.x2-porint1.x1,2));
var side2=Math.sqrt(Math.pow(porint3.y3-porint2.y2,2)+Math.pow(porint3.x3-porint2.x2,2));
var side3=Math.sqrt(Math.pow(porint1.y1-porint3.y3,2)+Math.pow(porint1.x1-porint3.x3,2));
var s=(side1+side2+side3)*0.5;
var area=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
document.write(s+"<br>");
document.write(area);*/

/*var date=new Date(2016,3,0);

var a=date.getDate();
var b=date.getMonth();
document.write("febuary "+b+" has "+a+" day");*/


/*var date=new Date;
var q=date.getDate();
var m=date.getMonth()+1;
var y=date.getFullYear();
var h1=(q+parseInt(26*(m+1)/10)+y%100+parseInt(y%100/4)+parseInt(j/4)+j*5)%7;
if(h1=3){
    document.write("星期三")
}*/


/*
var time=new Date;
var a=time.getFullYear();
var b=time.getMonth()+1;
var c=time.getDate();
var d=time.getHours();
var f=time.getMinutes();
var o=("87,81,97,76,74,94,90,76,64,76");
var j=o.split(",");
var temp=0;
for(var k=0;k<j.length;k++){
    var x=j[k];
   var z= Number(x);
       temp=temp+z;
}

document.write("小明：87  小花：81  小天：76"+"<br>"+"小张：74  小小：94  小五：76"+"<br>"+"小迪：64  小曼：76  小西：90"+"<br>"+"小红：97"+"<br>");
document.write("平均分："+temp/10+"<br>"+a+"年"+b+"月"+c+"日 "+d+":"+f);
*/


/*
array1=[1,2,3,4,5];
array2=["nice","to","meet","you,","!"];
array3=[{x:1},{y:2}];
array4=[true,false,null,undefined];
for(var a=0;a<array1.length;a++){
    b=array1[a];
    document.write(b+"<br>");
}
array1.length=3;
document.write(array1+"<br>");
array1.push("6,7");
document.write(array1+"<br>");
array1.unshift("0");
document.write(array1+"<br>");

for(var q=0;q<array2.length;q++){
    c=array2[q];

    document.write(c+"<br>");
}
array2.length=3;
document.write(array2);*/

/*
var array=[0,1];
for(var k=2;k<=100;k++){
    array.push(array[k-1]+array[k-2]);
}
document.write(array);
console.log(array);*/


//公约数
/*var s=[];
for(var i=1;i<=498;i++){
    var a=498%i,
        b=1000%i;
    if(a==b){
        if(a==0){
            s.push(i);
        }
    }
}
console.log(s);
var max=s.filter(function(x){
    return x>1;
});
console.log(max);*/



/*var m=498,n=1000;
 a=n%m;
 if(a==0){
 document.write(n);
 }
 else {
 a=m%a;
 if (a==0){
 document.write(a);
 }
 else {
 document.write(a);
 }

 }
 */



/*
var o=prompt(),p=prompt();
var l=1;
for(i=0;i<p;i++){
    l*=o;
}
document.write(l);
*/



/*
var b=0;
var array=[1, 2, 3, 4, 5, 6];
array.forEach(function (value) {
    b+=value;
});
console.log(b);
var a=[];
array.forEach(function (value) {
    a.push(value+1);
});
console.log(a);
var c=[];
var d=array.map(function (value) {
   return c.push(value*value);
});
console.log(c);*/


/*
var a=[3,35,7,42,14,2];
var min=a.filter(function (x) {
    return x<30;
});
console.log(min);
var k=a.filter(function (x) {
    return x%2==0;
});
console.log(k);*/
//形参；
/*
var n;
function s(x,y) {
    return n=2*arguments[0]+3*arguments[1];
}
s(2,3);
console.log(n);*/


//取最小值；
/*
 var min;
 function a() {
 for(var i=0;i<arguments.length;i++) {
 min=arguments[0];
 if(arguments[i]<min) {
 min = arguments[i];
 }
 }
 return min;
 }
 a(1,123,500,115,44,88);
 console.log(min);*/


//各位数之和
/*
var i=0;
console.log(n);
function n(){
    for(var j=0;j<arguments.length;j++){
        i=i+arguments[j];
    }
    return i;
}
var k=Number(123),
    a=(k-k%100)/100,
    b=(k%100-k%100%10)/10,
    c=k%100%10;
n(a,b,c);
console.log(i);*/

/*//各位数字之和
var str="523",
    b=0,
    num=str.split("");
num.forEach(function (value) {
    b+=Number(value);
});
console.log(b);*/

/*
//利率；
var q="3200",
    p=Number(q),
    i;
if(3000<p<5000){
    i=p*0.05;
}
else if(5000<p<10000){
    i=p*0.07;
}
else if(10000<p<2e2){
    i=p*0.1;
}
else if(p>20000){
    i=p*0.12;
}
else {
    i=0;
}
console.log(i);*/


/*
var a=[4,-23,47,39,2,16,398],
    k=0,
    b=[];
for (var i=0;i<a.length+1;i++) {
    for (var j = 0; j < i+1; j++) {
        if (a[j] > a[j + 1]) {
            k = a[j];
            a[j] = a[j + 1];
            a[j + 1] = k;
        }
        b = a;
    }
}
console.log(b);
*/


var a=[5,78,41,15,26,9,69,35,48,28],
    k=0,
    b=[];
for (var i=0;i<=a.length+1;i++) {
    for (var j = 0; j <=i+1; j++) {
        if (a[j] > a[j + 1]) {
            k = a[j];
            a[j] = a[j + 1];
            a[j + 1] = k;
        }
        b = a;
    }

}
console.log(b);

