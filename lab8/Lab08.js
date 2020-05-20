
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

/*Global Variable Area */
let wrap = document.getElementById("wrap");
let buttonsList = document.getElementById("buttons").getElementsByTagName("span");
let left = document.getElementById("left");
let right = document.getElementById("right");
let clickFlag = true;
let time;
let index = 0;
let Distance = 600;
let table = document.getElementById("table");
let tds = table.getElementsByTagName("td");

function clear(){
    for(let i=0;i<buttonsList.length;i++){
        buttonsList[i].className="";
    }
}
function AutoGo(){
    let start = wrap.offsetLeft;
    let end = index * Distance * (-1);
    let change = end - start;
    // 使用timer添加动画效果
    let timer;
    let t = 0;
    let maxT = 30;
    clear();
    if(index === buttonsList.length){
        buttonsList[0].className = "on";
    }
    else{
        buttonsList[index].className = "on";
    }
    clearInterval(timer);
    timer = setInterval(function(){
        t++;
        if(t >= maxT){
            clearInterval(timer);
            clickFlag = true;
        }
        wrap.style.left = change/maxT*t + start + "px";
        if(index === buttonsList.length && t >= maxT){
            wrap.style.left = "0";
            index = 0;
        }
    },10);
}
function forward() {
    index++;
    if(index > buttonsList.length){
        index = 0;
    }
    AutoGo();
}
function backward() {
    index--;
    if(index < 0){
        index = buttonsList.length - 1;
        wrap.style.left = (index+1)*Distance*(-1)+"px";
    }
    AutoGo();
}
/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
left.onclick=function () {
    if(clickFlag){
        backward();
    }
    clickFlag = false;
};
right.onclick=function () {
    if(clickFlag){
        forward();
    }
    clickFlag = false;
};
/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
time=setInterval(forward,2000);
wrap.onmouseover=function () {
    clearInterval(time);
};
wrap.onmouseout=function () {
    time=setInterval(forward,2000);
};
/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
for (let i=0;i<buttonsList.length;i++){
    buttonsList[i].onclick=function () {
        index = i;
        AutoGo();
    }
}
/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
for (let i=0; i<tds.length; i++){
    let origin = tds[i].innerHTML;
    tds[i].onclick=function () {
        changename(tds[i]);
    };
}

function changename(s){
    /* 获得表格数据 */
    var name = $(s).html();
    // alert(name);
    /* 清空数据 */
    $(s).html("");
    s.onclick = null;
    /* 在td里面加一个表单 ,,并且添加失焦时间*/
    $(s).html("<input value='"+name+"'/>");
    /* 通过父标签的子标签得到input表单 */
    $(s).children("input").attr("onblur","nameblur(this)");
    /* 通过focus主动触发，获得焦点 */
    $(s).children("input").focus();
}
/* 表单失焦事件 */
function nameblur(inp){
    /* 判断表单内的值是否改变 */
    var val = $(inp).val();
    /* 在td里面加回来span,值就是val*/
    $(inp).parent().append(val);
    $(inp).parent().attr("onclick","changename(this)");
    /* 删除input标签 */
    $(inp).remove();
}

/*********************************************end*************************************/