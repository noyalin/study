/**
 * Created by linyan on 16/4/23.
 */
function daohang() {
    if (!document.getElementsByTagName) return false;
    var list = document.getElementsByTagName("li");
    for (var i = 0; i < list.length; i++) {
        list[i].onmouseover = function () {
            this.style.backgroundColor = "yellow";
        };

        list[i].onmouseout = function () {
            this.style.backgroundColor = "transparent";
        };
    }
}

addLoadEvent(daohang);