# Lab8设计文档

16307110125 曲俊杰


## 1-3

对html页面进行了删减修改，删除了多余的5号图片

(```)
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
(```)
上述是实现核心功能的代码，主要搞定前进、后退操作，并且实现跳转动画即可实现流畅且合理的轮播效果


## 4
主要是通过滤清父子节点关系，修改html内容，此部分为了美观将表格&标题居中了，其他的html元素未做修改（添加了表格的id）

(```)
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
(```)

