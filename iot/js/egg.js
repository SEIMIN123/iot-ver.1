$(document).ready(function () {
    let i;
    var url = location.pathname;
    var slice = url.slice(-13, -5);
    var name = url.slice(-13,-7);

    function create() {
        var newDIV = document.createElement("div");
        let wrap = document.querySelector(".wrap");

        newDIV.setAttribute("id", "normal" + i);
        newDIV.setAttribute("class", "img");
        wrap.appendChild(newDIV);
        newDIV.style.backgroundImage = "url('" + "../data/" + slice + "/" + name + i + ".png" + "')";
    }
    for (i = 1; i < "url('../data/normal')".length; i++) {
        create();
    }
});
