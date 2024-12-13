var photoarr = [];
var index = 1;

function loadPhoto() {
    for (var i = 1; i < 6; i++) {
        photoarr[i] = new Image();
        photoarr[i].src = "image/banner" + i + ".jpg"
    }

}




function Start() {
    loadPhoto();
    document.getElementById("imgbanner").src = photoarr[index].src;
    index++;
    if (index === photoarr.length) {// quay ve dau khi het anh
        index = 1;
    }
    t = setTimeout("Start()", 2000);

}

//privious
function previous() {
    if (index > 1) {
        index--;
        
    }else{
        index=photoarr.length-1;
    }
    document.getElementById("imgbanner").src = photoarr[index].src;
    clearTimeout(t);
}

//Next
function next() {
    if (index < photoarr.length) {
        index++;
        // index += 1;
        document.getElementById("imgbanner").src = photoarr[index].src;
        if (index === photoarr.length-1) {// quay ve dau khi het anh
            index = 0;
        }
        clearTimeout(t);
    }
}