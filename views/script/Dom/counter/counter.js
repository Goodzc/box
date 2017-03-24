var numresult;
var str;
function onclicknum(nums) {
    str = document.getElementById("nummessege");
    str.value = str.value + nums;
}
function onclickclear() {
    str = document.getElementById("nummessege");
    str.value = "";
}
function onclickresult() {
    str = document.getElementById("nummessege");
    numresult = eval(str.value);
    str.value = numresult;
}