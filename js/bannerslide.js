function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload;
            func();
        };
    }
}

addLoadEvent(bannerSlide);

function bannerSlide() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("bannerBox")) return false;
    var index = 0;
    var i = 0;
    var s;
    var timer;
    var box = document.getElementById("bannerBox");
    var banner = box.getElementsByTagName("img");
    var buttons = box.getElementsByTagName("a");
    buttons = Array.prototype.slice.call(buttons, 0);
    function slide(increase) {
        //图片转换
        var s = i + increase;
        var showele;
        banner[i].style.opacity = "0";
        setTimeout(function() {
            banner[i].style.zIndex = "1";
            if (s == banner.length) {
                showele = banner[0];
                show(showele);
                i = 0;
            } else {
                showele = banner[s];
                show(showele);
                i = s;
            }
        }, 400);
    }
    function show(ele) {
        //显示图片
        ele.style.opacity = "1";
        ele.style.zIndex = "5";
    }
    for (j = 0; j < buttons.length; j++) {
        //点击圆点显示图片
        buttons[j].onclick = function() {
            if (this.className == "dots_active") return;
            var point = parseInt(this.getAttribute("data-index"));
            var os = point - index;
            index = point;
            showButton();
            slide(os);
        };
    }
    function showButton() {
        //button高亮              
        buttons.forEach(function(el) {
            el.className = "";
        });
        buttons[index].className = "dots_active";
    }
    function go() {
        //随时间轮播
        if (index == 2) {
            index = 0;
        } else {
            index += 1;
        }
        showButton();
        slide(1);
    }
    function play() {
        timer = setInterval(go, 3500);
    }
    function stop() {
        clearInterval(timer);
    }
    box.onmouseover = stop;
    box.onmouseout = play;
    play();
}