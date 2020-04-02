window.onload = function(){
    var topbtn = document.getElementById("ontopBtn");
    topbtn.onclick = function () {
        timer =  setInterval(function () {
            var backtop = document.body.scrollTop;
            var speedtop = backtop/5;
            document.body.scrollTop = backtop - speedtop;
            if (backtop === 0){
                clearInterval(timer);
            }
        },30);
    }
}