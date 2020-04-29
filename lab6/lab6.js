/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let num = 1;
    let imax;
    imax = (60 - second) / 5;
    if(imax > 9)
        imax = 9;
    for(let i = 0; i <= imax; i++){
        (function (i) {
            setTimeout(() => {
                console.log("1. "+hour+":"+minute+":"+second+" num:"+num);
                second+=5;
                if(second === 60){
                    minute+=1;
                    second="0";
                }
                num*=2;
                }, 5000*i)

        })(i)
    }
}

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    let regPhone = new RegExp('^1(3|4|5|6|7|8|9)\\d{9}$');
    let regMail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    console.log("2. The telephone is " + regPhone.test(telephone) + " and the mail is " + regMail.test(mail));
}


/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    let reg = /\b([a-z]+) \1\b/ig;
    let set = str.match(reg);
    set.sort();
    if(set.length > 10){
        set.length = 10;
    }
    console.log("3. "+set);
    return set;
}


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    let res = new Set();
    let wantLen = wantInput.length;
    let actLen =  actualInput.length;
    let reg = /[A-Z]/;
    let capslock = false;
    if(reg.test(actualInput)){
        capslock = true;
    }
    let capslockAdd = false;
    for(let i = 0, j = 0; i < wantLen; i++){
        if(wantInput.charAt(i) !== actualInput.charAt(j)) {
            if(!reg.test(wantInput.charAt(i)) || capslock) {
                res.add(wantInput.charAt(i).toUpperCase());
            }
            else{
                let lower = wantInput.charAt(i).toLowerCase();
                if(wantInput.indexOf(lower) !== -1 && actualInput.indexOf(lower) === -1){
                    res.add(wantInput.charAt(i).toUpperCase());
                }
                else if(wantInput.indexOf(lower) === -1 && !capslockAdd){
                    console.log("uncertain "+ wantInput.charAt(i));
                }
                else if(wantInput.indexOf(lower) !== -1 && actualInput.indexOf(lower) !== -1){
                    capslockAdd = true;
                }
            }
        }
        else{
            j++;
        }
    }
    let ans = Array.from(res);
    if (capslockAdd){
        ans[ans.length] = "CAPS LOCK";
    }
    console.log("4. " + ans);
    return res;
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    str = str.replace(/(^\s*)|(\s*$)/g, "");
    let strArray = str.split(" ");
    let len = strArray.length;
    let res = "";
    for (let i = 0; i < len; i++){
        if(strArray[i].match(/^[ ]*$/))
            continue;
        if(i === len-1) {
            res += strArray[0];
            continue;
        }
        res+=strArray[len-1-i]+" ";
    }
    return res;
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let map = new Map();
    let len = nums.length;
    let res=[];
    for(let i = 0; i < len; ++i) {
        map.set(nums[i],i);
        if (map.get(target - nums[i]) !== undefined) {
            //这里不能用map.get直接判读，因为0会算做false
            res[res.length] = [i, map.get(target - nums[i])];
        }
    }
    console.log("6. ");
    console.log(res);
    return res;
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出1，输入"bbbbb",输出2；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let n = str.length, ans = 0;
    let map = new Map(); // current index
    // try to extend the range [i, j]
    for (let j = 0, i = 0; j < n; j++) {
        if (map.get(str.charAt(j))) {
            i = Math.max(map.get(str.charAt(j)), i);
        }
        ans = Math.max(ans, j - i + 1);
        map.set(str.charAt(j), j + 1);
    }
    return ans;
}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country(name) {
    this.name = name;
    this.say = function () {
        console.log(this.name)
    }
}
Country.prototype.name = "random";
function DevelopingCountry(name) {
    Country.call(this,name);
    this.sayHi = function(){
        console.log(this.name + " Hi,i am a developing country.")
    }
}
function PoorCountry(name) {
    this.name = name;
    this.saySad = function () {
        console.log(this.name + " I am a sad poor country.")
    }
}
PoorCountry.prototype = new Country();
function object(o) {
    function F() {};
    F.prototype = 0;
    return new F();
}
function inheritPrototype(sybType, superType) {
    let prototype = object(superType.prototype);
    prototype.constructor = sybType;
    sybType.prototype = prototype;
}
function DevelopedCountry(name) {
    Country.call(this,name);
}
inheritPrototype(DevelopedCountry, Country);
DevelopedCountry.prototype.sayHappy = function(){
    console.log(this.name + " I am a Happy developed country.");
}


// test
testTime();
testMail("1118755555","22e2qeq2@dwda.scdda");
testMail("13355555555",'834767813@qq.com');
testRedundancy("Is is the iS is cost of of gasoline going up up a a d d a A wd wd ad ad wdad wdad word word play play");
testKeyBoard("7_This_is_a_test","_hs_s_a_es");
testKeyBoard("7_This_is_a_test","_hs_s_a_test");
testKeyBoard("7_This_is_a_es","_hs_s_a_es");
console.log("5. " + testSpecialReverse("   hello world! I   don't want to   see you anymore.   "));
twoSum([7,2,11,15,3,6,4,5],14);
console.log("7. " + lengthOfLongestSubstring("abbbbbdawwowda"));
let china = new DevelopingCountry("China");
china.sayHi();
let anyone = new PoorCountry("anyone");
anyone.saySad();
let england = new DevelopedCountry("england");
england.sayHappy();

