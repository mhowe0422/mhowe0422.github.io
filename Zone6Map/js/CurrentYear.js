function CurrentYear() {
    var d = new Date();
    var n = '&#169;' + d.getFullYear();
    document.getElementById("copyright").innerHTML = n;
}


